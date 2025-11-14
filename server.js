const express = require('express');
const taskRouter = require('./src/routes/tasks');

const app = express();

// In-memory task storage
const tasks = [
  { id: 1, title: 'Sample Task', completed: false }
];

// Share across routes
app.locals.tasks = tasks;

// Middleware for JSON parsing
app.use(express.json());

// Mount router
app.use('/tasks', taskRouter);

// Health route
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    uptime: process.uptime()
  });
});

// Server listening
const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
