'use client';

import { useEffect, useState } from 'react';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTitle, setNewTitle] = useState('');

  // Fetch todos
  const fetchTodos = async () => {
    const res = await fetch('/api/todos');
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // Add new todo
  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    await fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newTitle }),
    });

    setNewTitle('');
    fetchTodos();
  };

  // Mark todo as completed (fake API since we don't have PUT yet — simulate it in memory for now)
  const handleCompleteTodo = async (id: number) => {
    // simulate by updating local state
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  // Delete todo (fake API since we don't have DELETE yet — simulate it in memory for now)
  const handleDeleteTodo = async (id: number) => {
    // simulate by updating local state
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <main style={styles.container}>
      <h1 style={styles.heading}>📝 To-Do List</h1>

      <form onSubmit={handleAddTodo} style={styles.form}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.addButton}>
          ➕ Add Todo
        </button>
      </form>

      <ul style={styles.todoList}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              ...styles.todoItem,
              backgroundColor: todo.completed ? '#d4edda' : '#fff',
            }}
          >
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.title}
            </span>

            <div style={styles.buttons}>
              {!todo.completed && (
                <button
                  onClick={() => handleCompleteTodo(todo.id)}
                  style={styles.completeButton}
                >
                  ✅ Complete
                </button>
              )}
              <button
                onClick={() => handleDeleteTodo(todo.id)}
                style={styles.deleteButton}
              >
                🗑️ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}

// Inline CSS styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#333',
  },
  form: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '2rem',
  },
  input: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginRight: '0.5rem',
    flexGrow: 1,
    maxWidth: '300px',
  },
  addButton: {
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  todoList: {
    listStyleType: 'none',
    padding: 0,
    maxWidth: '500px',
    margin: '0 auto',
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    marginBottom: '0.75rem',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    backgroundColor: '#fff',
    transition: 'background-color 0.3s ease',
  },
  buttons: {
    display: 'flex',
    gap: '0.5rem',
  },
  completeButton: {
    padding: '0.3rem 0.75rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  deleteButton: {
    padding: '0.3rem 0.75rem',
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
