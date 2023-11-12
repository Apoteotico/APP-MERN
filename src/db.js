import mongoose from "mongoose";

export const conectDB = async () => {
  try {
    mongoose.connect('mongodb://localhost/merndb');
    console.log(">>> DB is connected")
  } catch (error) {
    console.log(error);
  }
}