const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

// Initialize app
dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
const mongo_url = process.env.MONGO_URL;
mongoose.connect(mongo_url, console.log("Connected to MongoDB"));

// Routes
app.get("/", (req, res) => {
  res.send("Routine Software API is running");
});

// Port
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
