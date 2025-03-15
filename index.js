const express = require("express");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();
const Expense = require("./models/Expense");
const User = require("./models/User");
const connectDB = require("./config/db");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/expense", require("./routes/expenseRouter"));
app.use("/api/user", require("./routes/userRouter"));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  connectDB();
});
