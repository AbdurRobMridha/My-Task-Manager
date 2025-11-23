const express = require("express");
const app = express();
const taskRoutes = require("./src/routes/tasks");

app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
