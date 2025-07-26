import mongoose from "mongoose";
import { Schema } from "mongoose";
const userSchema = new Schema({
  userId: Number,
  name: String,
  email: String,
  password: String,
  age: Number,
});
const user = mongoose.model("User", userSchema);
export default user;
