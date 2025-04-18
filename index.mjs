// creating new project:
//copied same steps from CRUD yesterday example

//copied las

// creating new project:
//copied same steps from CRUD yesterday example

//copied last codes form slack

import express from "express";
import dotenv from "dotenv";
dotenv.config();
import grades from "./routes/grades.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

// API routes
app.use("/grades", grades);

// Global error handler
app.use((err, _req, res, next) => {
  console.error(err.stack); // Log the error for debugging
  res.status(500).send("Seems like we messed up somewhere...");
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
