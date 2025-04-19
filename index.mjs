// // creating new project:
// //copied same steps from CRUD yesterday example

// //copied las

// // creating new project:
// //copied same steps from CRUD yesterday example

// //copied last codes form slack

// import express from "express";
// import dotenv from "dotenv";

// //adding mangooseconn

// import connectDB from "./db/Conn.mjs";



// import grades from "./routes/grades.mjs";
// import gradesAgg from "./routes/grades_agg.mjs";


// dotenv.config();
// //initilaizeing mongoose connction

// connectDB();

// // const PORT = process.env.PORT || 5050;
// // const app = express();

// // app.use(express.json());

// // // Root route
// // app.get("/", (req, res) => {
// //   res.send("Welcome to the API.");
// // });

// // // API routes
// // app.use("/grades", grades);

// // // Global error handler
// // app.use((err, _req, res, next) => {
// //   console.error(err.stack); // Log the error for debugging
// //   res.status(500).send("Seems like we messed up somewhere...");
// // });

// // // Start the Express server
// // app.listen(PORT, () => {
// //   console.log(`Server is running on port: ${PORT}`);
// // });

// const PORT = process.env.PORT || 5050;
// const app = express();

// app.use(express.json());
// app.use("/grades", grades);
// app.use("/grades-agg", gradesAgg);

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// ///////1//////
// //starting mangoDB to mangoos
// //to install mangoose had to sudo chown -R $USER:$USER ~/.npm
// //////2//////
// //package.json adding mangoose

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/conn.mjs";  // Import the named export
import grades from "./routes/grades.mjs";

dotenv.config();

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());

// Initialize database connection
connectDB().then(() => {
  // Start server only after DB connection
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to the API.");
});

// API routes
app.use("/grades", grades);



// Global error handler
app.use((err, _req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Seems like we messed up somewhere...");
});