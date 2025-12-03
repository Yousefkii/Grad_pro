require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const ConnectDB = require("./config/db");
const authRouts = require("./routes/authRoutes");

const app = express();
// Middleware to handle CORS
app.use(
cors({
origin: process.env.CLIENT_URL || "*",
methods: ["GET", "POST", "PUT", "DELETE"],
allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express. json());

ConnectDB();

app.use("/api/vi/auth", authRouts);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));


const PORT = process.env.PORT || 5000;
app. listen(PORT, () => console.log(`Server running on port ${PORT}`));