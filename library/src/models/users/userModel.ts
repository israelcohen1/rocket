import mongoose from "mongoose";
export const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true ,required: true},
  email: { type: String, unique: true,required: true },
  password: { type: String, unique: true ,required: true},
  collection: { type: mongoose.Schema.Types.ObjectId, ref: "Collection" ,default:null},
});
export const User = mongoose.model("User", UserSchema);
