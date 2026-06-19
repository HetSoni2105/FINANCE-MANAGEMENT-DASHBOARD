import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  date: { type: String, required: true },
  amount: { type: Number, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  type: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, required: true },
  note: { type: String },
});

export default mongoose.model("Transaction", transactionSchema);
