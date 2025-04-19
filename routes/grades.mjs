// import express from "express";
// // import db from "../db/mangooseconn.mjs";
// // import { ObjectId } from "mongodb";


// // import Grade from "../models/Grades.mjs"
// import Grade from "/Users/joanne/Desktop/ClassWork/MongoDB_Intro/grades-app/models/Grade.mjs";
// const router = express.Router();

// // // Helper function to validate ObjectId
// // function isValidObjectId(id) {
// //   return ObjectId.isValid(id);  // Simplified validation
// // }

// // Get a single grade entry
// router.get("/", async (req, res) => {
//   // if (!isValidObjectId(req.params.id)) {
//   //   return res.status(400).send("Invalid ID format");
//   // }

//   // let collection = await db.collection("grades");
//   // let query = { _id: new ObjectId(req.params.id) };
//   // let result = await collection.findOne(query);

//   // if (!result) res.status(404).send("Not found");
//   // else res.status(200).send(result);


//   try {
//     const grade = await Grade.findById(req.params.id);
//     if (!grade) return res.status(404).send("Not found");
//     res.status(200).send(grade);
//   } catch (err) {
//     res.status(400).send("Invalid ID format");
//   }
// });

// // Other routes here...

// export default router;
import express from "express";
import Grade from "../models/Grade.mjs"; // Use relative path, not absolute

const router = express.Router();

// GET ALL GRADES - LIST ENDPOINT
router.get("/", async (req, res) => {
  try {
    const grades = await Grade.find({}).limit(100); // Get first 100 grades
    if (!grades.length) {
      return res.status(404).send("No grades found");
    }
    res.status(200).json(grades);
  } catch (err) {
    console.error("Error fetching grades:", err);
    res.status(500).send("Server error");
  }
});

// GET SINGLE GRADE BY ID
router.get("/:id", async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id);
    if (!grade) {
      return res.status(404).send("Grade not found");
    }
    res.status(200).json(grade);
  } catch (err) {
    console.error("Error fetching grade:", err);
    res.status(400).send("Invalid ID format");
  }
});

export default router;