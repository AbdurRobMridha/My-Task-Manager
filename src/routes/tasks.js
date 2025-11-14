const express = require('express');
const router = express.Router();

// GET /tasks - Retrieve all tasks
router.get('/', (req, res) => {
  const tasks = req.app.locals.tasks;
  res.status(200).json({
    success: true,
    data: tasks
  });
});

// GET /tasks/:id - Retrieve task by ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const tasks = req.app.locals.tasks;

  // Check if ID is a valid number
  if (isNaN(id)) {
    return res.status(400).json({
      error: 'Invalid ID format'
    });
  }

  const task = tasks.find(t => t.id === parseInt(id));
  if (!task) {
    return res.status(404).json({
      error: 'Task not found'
    });
  }

  res.status(200).json({
    success: true,
    data: task
  });
});

module.exports = router;