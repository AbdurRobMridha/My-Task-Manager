const db = require("./src/config/db");

async function seed() {
  const [[{ count }]] = await db.query("SELECT COUNT(*) AS count FROM tasks");

  if (count > 0) {
    console.log("Database already seeded!");
    process.exit();
  }

  const tasks = [];

  for (let i = 1; i <= 15; i++) {
    tasks.push([`Sample Task ${i}`, `Description ${i}`, "pending"]);
  }

  await db.query(
    "INSERT INTO tasks (title, description, status) VALUES ?",
    [tasks]
  );

  console.log("15 tasks inserted!");
  process.exit();
}

seed();
