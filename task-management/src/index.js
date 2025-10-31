const express = require("express");
const app = express();
const port = 3000;

// Import routes
const tasksRouter = require("./routes/tasks");

// Middleware
app.use(express.json());

// Routes
app.use("/tasks", tasksRouter);    // Handles /tasks and /tasks/:id

// Health route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime()
  });
});
app.get('/', (req, res) => {
       res.send('Task Management API is running!');
});


// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
