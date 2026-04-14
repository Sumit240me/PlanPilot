import{ Place} from "../models/Place.models.js";


const DUPLICATE_RADIUS_METERS = 80;

// check does place exist with the same placeId

async function existsByPlaceId(placeId) {
    const found = await Place.findOne({ placeId }).lean();
    return found || null;
}

// check whether the place exist nearby or not

async function existsByProximity(lng, lat) {
    const found = await Place.findOne({
        coordinates: {
            $nearSphere: {
                $geometry: {
                    type: "Point",
                    coordinates: [lng, lat],
                },
                $maxDistance: DUPLICATE_RADIUS_METERS,
            },
        },
    }).lean();
    return found || null;
}

// apply insert, update and skip on data

async function checkDuplicate(transformedPlace) {

    const byId = await existsByPlaceId(transformedPlace.placeId);

    if (byId) {
        return { action: "update", existingDoc: byId };
    }

    // check nearby
    const [lng, lat] = transformedPlace.coordinates.coordinates;
    const byProximity = await existsByProximity(lng, lat);

    if (byProximity) {

        const incomingHasMoreData =
            (transformedPlace.description?.length || 0) >
            (byProximity.description?.length || 0);

        if (incomingHasMoreData) {
            return { action: "update", existingDoc: byProximity };
        }

        // Existing record is already better — skip entirely
        return { action: "skip", existingDoc: byProximity };
    }

    // No duplicate found — safe to insert
    return { action: "insert", existingDoc: null };

}


// run dedup check then insert or update accordingly

async function upsertPlace(transformedPlace) {
    const { action, existingDoc } = await checkDuplicate(transformedPlace);

    if (action === "skip") {
        return { result: "skipped", existingDoc };
    }

    if (action === "update") {
        const updated = await Place.findByIdAndUpdate(
            existingDoc._id,
            {
                $set: {
                    avgRating: transformedPlace.avgRating,
                    ratingCount: transformedPlace.ratingCount,
                    popularityScore: transformedPlace.popularityScore,
                    description: transformedPlace.description || existingDoc.description,
                    photos: transformedPlace.photos.length
                        ? transformedPlace.photos
                        : existingDoc.photos,
                    moodMatch: transformedPlace.moodMatch,
                    companionMatch: transformedPlace.companionMatch,
                    typicalDurationHours: transformedPlace.typicalDurationHours,
                    bestTimeOfDay: transformedPlace.bestTimeOfDay,
                    tags: transformedPlace.tags,
                    lastUpdatedAt: new Date(),
                },
            },
            { returnDocument: 'after' }
        );
        return { result: "updated", place: updated };
    }

    const newPlace = await Place.create(transformedPlace);
    return { result: "inserted", place: newPlace };
}

export { upsertPlace, checkDuplicate };