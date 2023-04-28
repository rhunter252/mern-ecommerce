import dotenv from "dotenv";
import connectToDatabase from "./database.js";
import express from "express";
const port = 5000 || process.env.PORT;

// Routes
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
connectToDatabase();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
