const express = require("express");
const app = express();
const port = 3000;
app.locals.tasks = [];
app.locals.tasks = [
  {
    id: 1,
    title: "Complete project proposal",
    completed: false,
    priority: "high",
    createdAt: new Date("2025-11-01T10:00:00Z")
  },
  {
    id: 2,
    title: "Review code changes",
    completed: true,
    priority: "medium",
    createdAt: new Date("2025-11-02T14:30:00Z")
  },
  {
    id: 3,
    title: "Schedule team meeting",
    completed: false,
    priority: "low",
    createdAt: new Date("2025-11-03T09:15:00Z")
  },
  {
    id: 4,
    title: "Update documentation",
    completed: false,
    priority: "medium",
    createdAt: new Date("2025-11-04T16:45:00Z")
  },
  {
    id: 5,
    title: "Test API endpoints",
    completed: true,
    priority: "high",
    createdAt: new Date("2025-11-05T11:20:00Z")
  }
];

// Import routes (assuming basic routes are in index.js for now; will refactor later)
app.use(express.json());

app.get('/tasks', (req, res) => {
  const tasks = req.app.locals.tasks;
  res.status(200).json({
    success: true,
    data: tasks
  });
});

app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});