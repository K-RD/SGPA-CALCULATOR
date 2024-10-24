const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to database
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.error("error opening the database: ", err.message);
  } else {
    console.log("Connected to the database.");
  }
});

// Middleware
app.use(express.json());

// Routes: serving html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
