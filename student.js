const express = require("express");
const studentRouter = express.Router();

const students = [];
// middleware that is specific to this router
studentRouter.get("/", (req, res) => {
  res.status(200).json(students);
});
// define the about route
studentRouter.post("/", (req, res) => {
  res.status(200).json(req.body);
});

studentRouter.put("/:id", (req, res) => {
  res.status(200).json(req.params);
});

studentRouter.delete("/:id", (req, res) => {
  res.status(200).json(req.params);
});

module.exports = studentRouter;
