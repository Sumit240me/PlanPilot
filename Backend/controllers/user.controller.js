import User from "../models/User.models.js";
import Trip from "../models/Trip.models.js";
import { sendTokenCookie } from "../middleware/auth.middleware.js";


// Helper - build safe user object to send to client
// Never include passwordHash or sensitive fields

function safeUser(user) {
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        homeCity: user.homeCity,
        ageGroup: user.ageGroup,
        preferredCompanion: user.preferredCompanion,
        preferredBudget: user.preferredBudget,
        preferredMoods: user.preferredMoods,
        categoryScores: user.categoryScores,
        totalTrips: user.totalTrips,
        avgTripRating: user.avgTripRating,
        visitedPlaceIds: user.visitedPlaceIds,
        createdAt: user.createdAt,
        lastLoginAt: user.lastLoginAt,
    };
}

// POST /api/users/register
// Create a new user account

const register = async (req, res) => {
    try {

        const {
            name,
            email,
            password,
            homeCity = "",
            ageGroup = "",
            preferredCompanion = "",
            preferredBudget = "",
        } = req.body;

        // --- Validation ----------------
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "name, email and password are required",
            });
        }
        //console.log(name,email,password);

        if (password.length < 6) {
            return res.status(400).json({
                message: "Password must be of atleast 6 characters",
            });
        }


        const existing = await User.findOne({ email: email.toLowerCase().trim() });
        if (existing) {
            return res.status(409).json({ message: "An account with this email already exists" });
        }

        const user = await User.create({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            passwordHash: password,  // pre-save defined in the user schema hashes this
            // homeCity,
            // ageGroup,
            // preferredCompanion,
            // preferredBudget,
        });


        const token = sendTokenCookie(res, user._id);

        console.log(`[register] New user registered: ${user.email}`);

        return res.status(201).json({
            message: "Account created successfully",
            token,
            user: safeUser(user),
        });

    } catch (err) {
        console.log("[register]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};

// POST /api/users/login
// Log in with email and password

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: "email and password both are required" })
        }

        const user = await User
            .findOne({ email: email.toLowerCase().trim() })
            .select("+passwordHash");

        if (!user) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        if (!user.isActive) {
            return res.status(401).json({ message: "This account has been deactivated" });
        }

        // --compare password ---------
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        user.lastLoginAt = new Date();
        await user.save();

        const token = sendTokenCookie(res, user._id);

        console.log(`[login] User logged in: ${user.email}`);

        return res.status(200).json({
            message: "Logged in successfully",
            token,
            user: safeUser(user),
        });

    } catch (err) {
        console.error("[login]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};

// POST /api/users/logout
// Clear the auth cookie

const logout = async (req, res) => {
    res.cookie("planpilot_token", "", {
        httpOnly: true,
        expires: new Date(0),
    });

    return res.status(200).json({ message: "Logged out successfully" });
};

// GET /api/users/me
// Get the currently logged-in user's profiel

const getMe = async (req, res) => {
    try {
        return res.status(200).json({ user: safeUser(req.user) });
    } catch (err) {
        console.error("[getMe]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};

// PUT /api/users/me
// Update profile - name, homeCity, ageGroup, preferences

const updateProfile = async (req, res) => {
    try {

        const allowed = [
            "name",
            "homeCity",
            "ageGroup",
            "preferredCompanion",
            "preferredBudget",
            "preferredMoods",
        ];

        const updates = {};
        allowed.forEach((field) => {
            if (req.body[field] !== undefined) updates[field] = req.body[field];
        });

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({ message: "No valid fields provided to update" });
        }

        const user = await User.findByIdAndUpdate(
            req.user._id,
            { $set: updates },
            { returnDocument: "after", runValidators: true }
        );

        return res.status(200).json({
            message: "Profile updated",
            user: safeUser(user),
        });

    } catch (err) {
        console.error("[updateProfile]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};

// PUT /api/users/me/password
// Change password

const changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        if (!currentPassword || !newPassword) {
            return res.status(400).json({
                message: "currentPassword and newPassword are required",
            });
        }

        if (newPassword.length < 6) {
            return res.status(400).json({
                message: "New Password must be at least 6 characters",
            });
        }
        // Load user with passwordHash
        const user = await User
            .findById(req.user._id)
            .select("+passwordHash");

        const isMatch = await user.comparePassword(currentPassword);
        if (!isMatch) {
            return res.status(401).json({ message: "Current password is incorrect" });
        }

        // Setting passwordHash triggers the pre-save hook to re-hash
        user.passwordHash = newPassword;
        await user.save();

        return res.status(200).json({ message: "Password changed successfully" })

    } catch (err) {
        console.error("[changePassword]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message })
    }
};


// GET /api/users/me/trips
// Get all trips for the logged-in user
// Protected route

const getMyTrips = async (req, res) => {
    try {
        console.log(req.user);
        const trips = await Trip
            .find({ userId: req.user._id })
            .sort({ createdAt: -1 })
            .select(
                "destination startDate endDate numberOfDays mood " +
                "status tripTitle cities costEstimate overallRating createdAt days.activities.photos"
            )
            .lean();
       // console.log("trips: ", trips)

        return res.status(200).json(trips);

    } catch (err) {
        console.error("[getMyTrips]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
}

// GET /api/users/me/preferences

const getMyPreferences = async (req, res) => {
    try {
        // coming through middleware
        const user = req.user;

        return res.status(200).json({
            categoryScores: user.categoryScores,
            visitedPlaceIds: user.visitedPlaceIds,
            preferredBudget: user.preferredBudget,
            preferredCompanion: user.preferredCompanion,
            preferredMoods: user.preferredMoods,
            avgTripRating: user.avgTripRating,
            totalTrips: user.totalTrips,
        });

    } catch (err) {
        console.error("[getMyPrefernces]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message })
    }
};

// POST /api/users/me/update-score

const updateScoresAfterTrip = async (req, res) => {
    try {
        const { activityRatings = [], overallRating } = req.body;

        if (activityRatings.length === 0 && !overallRating) {
            return res.status(400).json({ message: "No ratings provided" });
        }

        const user = await User.findById(req.user._id);

        // Update per-category scores
        if (activityRatings.length > 0) {
            user.updateCategoryScores(activityRatings);
        }

        if (overallRating) {
            user.updateTripRating(overallRating);
        }

        await user.save();

        console.log(
            `[updateScoresAfterTrip] Updated scores for ${user.email}:`,
            user.categoryScores
        );

        return res.status(200).json({
            message: "Score updated",
            categoryScores: user.categoryScores,
            avgTripRating: user.avgTripRating,
            totalTrips: user.totalTrips,
        });

    } catch (err) {
        console.error("[updateProfile]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message });

    }
}


// POST /api/users/me/add-visited-palces
// Called when a trip is confirmed - logs place IDs to user's history

const addVisitedPlaces = async(req, res) => {
    try {
        const { placeIds = [] } = req.body;

        if(placeIds.length === 0){
            return res.status(400).json({ message: "placeIds array is required" });
        }

        const user = await User.findById(req.user._id);
        user.addVisitedPlaces(placeIds);
        await user.save();

        return res.status(200).json({
            message: "Visited places updated",
            visitedCount: user.visitedPlaceIds.length,
        });

    } catch (err) {
        console.error("[addVisitedPlaces]", err.message);
        return res.status(500).json({ message: "Server error", error: err.message})
    }
};

// DELETE /api/users/me
// Soft delete - sets isActive to false

const deleteAccount = async(req,res) => {
    try {
        // perform the operation and update it
        await User.findByIdAndUpdate(req.user._id, { isActive: false });

        // Clear auth cookie
        res.cookie("planpilot_token", "", {
            httpOnly:  true,
            expries: new Date(0),
        });

        return res.status(200).json({ message:"Account deactivated successfully" })

    } catch (err) {
        console.log("[deleteAccount]", err.message);
        return res.status(500).json({ message:"Server error", error: err.message })
    }
};

export {
    register,
    login,
    logout,
    getMe,
    updateProfile,
    changePassword,
    getMyTrips,
    getMyPreferences,
    updateScoresAfterTrip,
    addVisitedPlaces,
    deleteAccount
};