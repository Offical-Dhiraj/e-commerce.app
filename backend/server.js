import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import connectCloudinary from "./config/cloudinary.js";
dotenv.config();

//App config.
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middeleware.

app.use(express.json());
app.use(cors());

//API endPoint.

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log(`Server running on ${port}`));

export default express;
