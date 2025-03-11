const model = require("../models/Expense", "User");

const getExpences = async (req, res) => {
  try {
    const expences = await model.find();
    res.status(200).json(expences);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createExpence = async (req, res) => {
  const expence = req.body;
  const newExpence = new model(expence);
  try {
    await newExpence.save();
    res.status(201).json(newExpence);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const updateExpence = async (req, res) => {
  const { id } = req.params;
  const { title, amount, date } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No expence with id: ${id}`);
  const updatedExpence = { title, amount, date, _id: id };
  await model.findByIdAndUpdate(id, updatedExpence, { new: true });
  res.json(updatedExpence);
};

const deleteExpence = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No expence with id: ${id}`);
  await model.findByIdAndRemove(id);
  res.json({ message: "Expence deleted successfully." });
};

module.exports = { getExpences, createExpence, updateExpence, deleteExpence };
