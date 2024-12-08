import mongoose from "mongoose";
export const CommentSchema = new mongoose.Schema({
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  content: { type: String, required: true },
  rating: { type: Number ,required: true},
  bookid: { type: mongoose.Schema.Types.ObjectId, ref: "Book"},
  comment:{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" ,default:null},
});
export const Comment = mongoose.model("Comment", CommentSchema);
