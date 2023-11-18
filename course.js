const express = require("express");
const courseRouter = express.Router();

const courses = [{ name: "angular", id: 1 }];
// middleware that is specific to this router

// fetching data with get method in course api
courseRouter.get("/", (req, res) => {
  res.status(200).json(courses);
});

// creating data with post method in course api
courseRouter.post("/", (req, res) => {
  id = courses.length + 1;
  let course = { ...req?.body, id };
  courses.push(course);
  res.status(200).json(courses);
});

courseRouter.put("/:id", (req, res) => {
  let id = req.params.id;
  let index = courses.findIndex((e) => {
    if (id == e.id) {
      return true;
    } else {
      return false;
    }
  });
  let course = courses[index];
  course.name = req.body.name;
  res.json(course);
});

courseRouter.delete("/:id", (req, res) => {
  let index = courses.findIndex((e) => {
    if (req.params.id == e.id) {
      return true;
    } else {
      return false;
    }
  });
  courses.splice(index, 1);
  res.status(200).json({ data: courses });
});

module.exports = courseRouter;
