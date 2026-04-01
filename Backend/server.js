const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connection = require("./src/config/db");



dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/shipments", require("./src/routes/shipmentRoutes"));


// Server
app.listen(process.env.PORT, async () => {
    try {
      await connection;
      console.log("Connected to db");
    } catch (err) {
      console.log(err);
      console.log("Error connecting in database");
    }
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });