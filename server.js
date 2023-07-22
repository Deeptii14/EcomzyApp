import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authroute.js";
import cors from "cors";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
//configure env
dotenv.config();

// rest object
const app = express();

//conectdtabase
connectDB();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/products", productRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("<h1 >HELOO GYSS</h1>");
});
//port
const Port = process.env.Port || 8080;

//run listen
app.listen(Port, () => {
  console.log(
    `Server Running ${process.env.NODe_HYY} on ${Port}`.bgYellow.white
  );
});
