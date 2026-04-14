import jwt from "jsonwebtoken";
import User from "../models/User.models.js"

const JWT_SECRET = process.env.JWT_SECRET || "planpilot_dev_secret_change_in_production";

// protect - verifies JWT and attaches user to req.user

async function protect(req, res, next){
    try {
        let token = null;

        // Check Authorization header first(Bearer token)
        if(req.headers.authorization?.startsWith("Bearer ")){
            token = req.headers.authorization.split(" ")[1];
        }

        // Fall back to cookies
        if(!token && req.cookies?.planpilot_token){
            token = req.cookies.planpilot_token;
        }

        if(!token){
            return res.status(401).json({
                message: "Not authenticated - please log in"
            });
        }

        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET);

        // Attach user to request - 
        const user = await User
                .findById(decoded.userId)
                .select("-passwordHash -passwordResetToken -passwordResetExpires");

       if(!user){
        return res.status(401).json({ message: "User no longer exists" });
       }

       if(!user.isActive){
        return res.status(401).json({ message: "Account has been deactivated" })
       }

       req.user = user;
       //console.log("users in middleware",user);
       next();

    } catch (err) {
        if(err.name === "JsonWebTokenError"){
            return res.status(401).json({ message: "Invalid token - please log in again" });
        }

        if(err.name === "TokenExpiredError"){
            return res.status(401).json({ message: "Token expired - please log in again" });
        }

        return res.status(500).json({ message: "Auth error", error: err.message })
    }
}


// optionalAuth - attaches user if token present but does not block if missing
// Use on routes that work for both logged-in and anonymous users

async function optionalAuth(req, res, next){
    try {

        let token = null;

        if(req.headers.authorization?.startsWith("Bearer ")){
            token = req.headers.authorization.split(" ")[1];
        }

        if(!token && req.cookies?.planpilot_token){
            token = req.cookies.planpilot_token;
        }

        if(!token) return next();

        const decoded = jwt.verify(token, JWT_SECRET);
        const user = await User 
              .findById(decoded.userId)
              .select("-passwordHash");

        if(user && user.isActive)req.user = user;

        next();
        
    } catch (err) {
        next(); // invalid token - continue anonymously
    }
}

// generateToken - create a signedd JWT for a user

function generateToken(userId){
    return jwt.sign(
        { userId },
        JWT_SECRET,
        { expiresIn: "30d" }
    );
}

// sendTokenCookie - sets JWT as httpOnly cookie + returns token in body
function sendTokenCookie(res, userId){
    const token = generateToken(userId);

    res.cookie("planpilot_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in ms
    });

    return token;
}

export { protect, optionalAuth, generateToken, sendTokenCookie };