const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/authentication");

const {
  getExpences,
  createExpence,
  updateExpence,
  deleteExpence,
} = require("../controllers/expenseContr");

router.get("/", getExpences);
router.post("/", createExpence);
router.patch("/:id", updateExpence);
router.delete("/:id", deleteExpence);

module.exports = router;
