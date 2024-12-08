import mongoose from "mongoose";
export const BookSchema = new mongoose.Schema({
  title: { type: String,required: true},
  author: { type: String,required: true },
  coverimg: { type: String ,required: true},
  rating: { type: Number,default: 0},
  commentid:{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" ,default:null},
  label: { type: String, default:""},
  description: { type: String,default:""},
  year: {type: Number, required: true},
  genre: { type: String,required: true}, 
});
export const Book = mongoose.model("Book", BookSchema);
