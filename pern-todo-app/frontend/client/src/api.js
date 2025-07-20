const API_URL = 'http://localhost:5000/api/todos';

export const getTodos = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const createTodo = async (description) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify({ description }),
  });
  return res.json();
};

export const updateTodo = async (id, description) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ description }),
  });
};

export const deleteTodo = async (id) => {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
};
