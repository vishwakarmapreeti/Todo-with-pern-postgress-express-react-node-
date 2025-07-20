const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all todos
router.get('/', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todos ORDER BY id');
    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a single todo
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query('SELECT * FROM todos WHERE id = $1', [id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Create a new todo
router.post('/', async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todos (description) VALUES ($1) RETURNING *',
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a todo
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await pool.query(
      'UPDATE todos SET description = $1 WHERE id = $2',
      [description, id]
    );
    res.json({ message: 'Todo updated' });
  } catch (err) {
    console.error(err.message);
  }
});

// Delete a todo
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query('DELETE FROM todos WHERE id = $1', [id]);
    res.json({ message: 'Todo deleted' });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
