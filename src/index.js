const express = require("express");
const app = express();
const port = 3000;

// Overwrite in-memory storage with exactly 5 sample tasks (resets any previous data)
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

// Import routes
const tasksRouter = require("./routes/tasks");

// Middleware (must be before routes)
app.use(express.json());

// Mount routes
app.use("/tasks", tasksRouter);  // Handles /tasks and /tasks/:id

// Health route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime()
  });
});

// Root route
app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});