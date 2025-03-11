const mongoose = require("mongoose");
const User = require("./User");

const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Food",
      "Housing",
      "Transportation",
      "Utilities",
      "Healthcare",
      "Entertainment",
      "Others",
    ],
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
});

module.exports = mongoose.model("Expense", expenseSchema);
