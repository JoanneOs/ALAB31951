import express from "express";
// import db from "../db/mangooseconn.mjs";
// import { ObjectId } from "mongodb";


// import Grade from "../models/Grades.mjs"
import Grade from "/Users/joanne/Desktop/ClassWork/MongoDB_Intro/grades-app/models/Grade.mjs";
const router = express.Router();

// // Helper function to validate ObjectId
// function isValidObjectId(id) {
//   return ObjectId.isValid(id);  // Simplified validation
// }

// Get a single grade entry
router.get("/:id", async (req, res) => {
  // if (!isValidObjectId(req.params.id)) {
  //   return res.status(400).send("Invalid ID format");
  // }

  // let collection = await db.collection("grades");
  // let query = { _id: new ObjectId(req.params.id) };
  // let result = await collection.findOne(query);

  // if (!result) res.status(404).send("Not found");
  // else res.status(200).send(result);


  try {
    const grade = await Grade.findById(req.params.id);
    if (!grade) return res.status(404).send("Not found");
    res.status(200).send(grade);
  } catch (err) {
    res.status(400).send("Invalid ID format");
  }
});

// Other routes here...

export default router;
