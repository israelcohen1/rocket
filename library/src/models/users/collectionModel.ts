import mongoose from "mongoose";
export const CollectionSchema = new mongoose.Schema({
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  collectionname: { type: String, required: true},
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },
});
export const Collection = mongoose.model("Collection", CollectionSchema);
