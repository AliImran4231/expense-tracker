const model = require("../models/Expense");
const User = require("../models/User");

const getExpences = async (req, res) => {
  const expenses = await expenses.find({ user: req.user.id });
  res.status(200).json(expenses);
};

const createExpence = async (req, res) => {
  const { title, amount, category, date } = req.body;

  if (!title || !amount || !category || !date) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  const newExpense = await Expense.create({
    title,
    amount,
    category,
    date,
    user: User._id,
  });

  res.status(201).json(newExpense);
};

const updateExpence = async (req, res) => {
  const Expence = await Expence.findById(req.params.id);
  if (!Expence) return res.status(404).json({ msg: "Expense not found" });

  const user = await User.findById(req.user.id);
  if (!user) return res.status(400).json({ message: "User does not exist" });

  if (goal.user.toString() !== user.id) {
    return res.status(401).json({ message: "User not authorized" });
  }

  const updateExpense = await Expence.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updateExpense);
}

const deleteExpence = async (req, res) => {
  const Expence = await Expence.findById(req.params.id);
  if (!Expence) return res.status(404).json({ msg: "Expense not found" });

  const user = await User.findById(req.user.id);
  if (!user) return res.status(400).json({ message: "User does not exist" });

  if (goal.user.toString() !== user.id) {
    return res.status(401).json({ message: "User not authorized" });
  }

  const deleteExpense = await Expence.findByIdAndDelete(req.params.id);
  res.status(200).json({ message: "Expense deleted" });
}

module.exports = { getExpences, createExpence, updateExpence, deleteExpence };
