import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import citiesRouter from "./routes/cities.routes.js";
import placesRouter from "./routes/places.routes.js";
import tripsRouter from "./routes/trips.routes.js"
import userRouter from "./routes/user.routes.js";

dotenv.config();
const port = parseInt(process.env.PORT)

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(cookieParser());  

app.use("/api/cities", citiesRouter);
app.use("/api/places", placesRouter);
app.use("/api/trips", tripsRouter);
app.use("/api/user",  userRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((error) => {
    console.log(error);
});