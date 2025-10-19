import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      date: new Date().toLocaleDateString()
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>My Todo List</h1>
          <p>Stay organized and productive</p>
        </header>
        
        <TodoForm onAdd={addTodo} />
        
        {/* Temporary display to test state */}
        <div style={{background: 'white', padding: '20px', borderRadius: '8px'}}>
          <p>Total todos: {todos.length}</p>
          <pre>{JSON.stringify(todos, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
}