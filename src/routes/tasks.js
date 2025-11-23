const express = require("express");
const router = express.Router();
const db = require("../config/db");



router.get("/", async (req, res) => {
  try {
    let page = parseInt(req.query.page) || 1;
    let limit = Math.min(parseInt(req.query.limit) || 10, 50);
    let offset = (page - 1) * limit;

    const [[{ total }]] = await db.query("SELECT COUNT(*) AS total FROM tasks WHERE deleted_at IS NULL");

    const [rows] = await db.query(
      "SELECT * FROM tasks WHERE deleted_at IS NULL ORDER BY created_at DESC LIMIT ? OFFSET ?",
      [limit, offset]
    );

    res.json({
      totalTasks: total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      limit,
      data: rows,
    });
  } catch (err) {
    res.status(500).json({ error: "Pagination error" });
  }
});


let search = req.query.q;

let where = search
  ? "WHERE deleted_at IS NULL AND title LIKE ?"
  : "WHERE deleted_at IS NULL";

let params = search ? [`%${search}%`, limit, offset] : [limit, offset];

const [rows] = await db.query(
  `SELECT * FROM tasks ${where} ORDER BY created_at DESC LIMIT ? OFFSET ?`,
  params
);




// GET all tasks
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT * FROM tasks ORDER BY created_at DESC"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: "Database error" });
  }
});

// CREATE task
router.post("/", async (req, res) => {
  const { title, description } = req.body;

  if (!title) return res.status(400).json({ error: "Title is required" });

  try {
    const sql = "INSERT INTO tasks (title, description) VALUES (?, ?)";
    const [result] = await db.query(sql, [title, description || null]);

    const [newTask] = await db.query("SELECT * FROM tasks WHERE id = ?", [
      result.insertId,
    ]);

    res.status(201).json(newTask[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

// UPDATE task
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;

  const updates = [];
  const values = [];

  if (title) {
    updates.push("title = ?");
    values.push(title);
  }
  if (description) {
    updates.push("description = ?");
    values.push(description);
  }
  if (status) {
    updates.push("status = ?");
    values.push(status);
  }

  if (updates.length === 0)
    return res.status(400).json({ error: "No fields to update" });

  values.push(id);

  try {
    const sql = `UPDATE tasks SET ${updates.join(", ")} WHERE id = ?`;
    const [result] = await db.query(sql, values);

    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Task not found" });

    const [updatedTask] = await db.query("SELECT * FROM tasks WHERE id = ?", [
      id,
    ]);

    res.json(updatedTask[0]);
  } catch (err) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

// DELETE task
// router.delete("/:id", async (req, res) => {
//   const { id } = req.params;

//   try {
//     const [result] = await db.query("DELETE FROM tasks WHERE id = ?", [id]);

//     if (result.affectedRows === 0)
//       return res.status(404).json({ error: "Task not found" });

//     res.status(204).send();
//   } catch (err) {
//     res.status(500).json({ error: "Failed to delete task" });
//   }
// });

router.delete("/:id", async (req, res) => {
  try {
    const [result] = await db.query(
      "UPDATE tasks SET deleted_at = NOW() WHERE id = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ error: "Task not found" });

    res.status(200).json({ message: "Task soft-deleted" });
  } catch (err) {
    res.status(500).json({ error: "Soft delete failed" });
  }
});

// GET soft-deleted tasks
router.get("/deleted", async (req, res) => {
  const [rows] = await db.query(
    "SELECT * FROM tasks WHERE deleted_at IS NOT NULL"
  );
  res.json(rows);
});



//restore task
router.put("/:id/restore", async (req, res) => {
  const [result] = await db.query(
    "UPDATE tasks SET deleted_at = NULL WHERE id = ?",
    [req.params.id]
  );

  if (result.affectedRows === 0)
    return res.status(404).json({ error: "Task not found" });

  res.json({ message: "Task restored" });
});



module.exports = router;
