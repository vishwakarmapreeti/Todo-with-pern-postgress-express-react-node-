import React, { useEffect, useState } from 'react';
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from './api';
import TodoItem from './components/TodoItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newDesc, setNewDesc] = useState('');

  const loadTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async () => {
    if (newDesc.trim()) {
      await createTodo(newDesc);
      setNewDesc('');
      loadTodos();
    }
  };

  const handleUpdate = async (id, desc) => {
    await updateTodo(id, desc);
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    <div className="container"><br />
      <h1 className="title">Pern Todo List</h1>

      <div className="add-item input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter task"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
        />
        <button className="btn btn-success" type="button" onClick={handleAdd}>
          Add
        </button>
      </div>


      <div className="container mt-5">
        <div className="row fw-bold mb-2">
          <div className="col-6">Description</div>
          <div className="col-3 edit text-center">Edit</div>
          <div className="col-3 delete text-center">Delete</div>
        </div>

        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onUpdate={handleUpdate} onDelete={handleDelete} />
        ))}
      </div>

    </div>
  );

}

export default App;
