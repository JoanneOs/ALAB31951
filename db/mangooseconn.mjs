//import { MongoClient } from "mongodb";
//changing this line to mangoose:

import mongoose from "mongoose";


import dotenv from "dotenv";
dotenv.config();


//i need to all MongoClient code and replace with Mongoose connection
// const client = new MongoClient(process.env.ATLAS_URI);
// let conn;
// try {
//   conn = await client.connect();
// } catch (e) {
//   console.error(e);
// }

// // Connect to the "sample_training" database
// let db = conn.db("sample_training");
// export default db;

//mongoose.connect() instead of MongoClient


const connectDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI, {
      dbName: "sample_training"  // Specify database name here
    });
    console.log("MongoDB connected via Mongoose");
    
    // Return the Mongoose connection instance
    return mongoose.connection;
  } catch (e) {
    console.error("Mongoose connection error:", e);
    process.exit(1);  // Exit process with failure
  }
};

// Export the connection promise
export default connectDB();

