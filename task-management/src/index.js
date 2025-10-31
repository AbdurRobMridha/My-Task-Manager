const express = require('express');
const app = express();
const port = 3000;
 const tasks = [
    { id: 1, title: "Learn Node.js", completed: false, priority: "high", createdAt: new Date() },
    { id: 2, title: "Build REST API", completed: false, priority: "medium", createdAt: new Date() },
    { id: 3, title: "Practice Postman", completed: true, priority: "low", createdAt: new Date() },
    { id: 4, title: "Write documentation", completed: false, priority: "medium", createdAt: new Date() },
    { id: 5, title: "Push project to GitHub", completed: true, priority: "high", createdAt: new Date() }
  ];
  
app.get('/', (req, res) => {
       res.send('Task Management API is running!');
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime()
  });
});

app.get('/tasks', (req, res) => {
       res.json(tasks);
});

app.get("/task/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  const tasks = [
    { id: 1, title: "Learn Node.js", completed: false, priority: "high", createdAt: new Date() },
    { id: 2, title: "Build REST API", completed: false, priority: "medium", createdAt: new Date() },
    { id: 3, title: "Practice Postman", completed: true, priority: "low", createdAt: new Date() },
    { id: 4, title: "Write documentation", completed: false, priority: "medium", createdAt: new Date() },
    { id: 5, title: "Push project to GitHub", completed: true, priority: "high", createdAt: new Date() }
  ];

  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json(task);
});



app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
});
