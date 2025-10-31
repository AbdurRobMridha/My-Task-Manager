// src/routes/tasks.js
const express = require("express");
const router = express.Router();

// In-memory tasks array
const tasks = [
  { id: 1, title: "Learn Node.js", completed: false, priority: "high", createdAt: new Date() },
  { id: 2, title: "Build REST API", completed: false, priority: "medium", createdAt: new Date() },
  { id: 3, title: "Practice Postman", completed: true, priority: "low", createdAt: new Date() },
  { id: 4, title: "Write documentation", completed: false, priority: "medium", createdAt: new Date() },
  { id: 5, title: "Push project to GitHub", completed: true, priority: "high", createdAt: new Date() }
];

// GET /tasks - return all tasks
router.get("/", (req, res) => {
  res.status(200).json(tasks);
});

// GET /task/:id - return task by id or 404
router.get("/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json(task);
});

module.exports = router;
