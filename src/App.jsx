import { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';

export default function App() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('all');
  
  // Add background color state
  const [bgColor, setBgColor] = useState(() => {
    const saved = localStorage.getItem('bgColor');
    return saved || '#8B5CF6'; // Default purple
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Save background color preference
  useEffect(() => {
    localStorage.setItem('bgColor', bgColor);
  }, [bgColor]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
      date: new Date().toLocaleDateString()
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeCount = todos.filter(t => !t.completed).length;
  const completedCount = todos.filter(t => t.completed).length;

  return (
    <div className="app" style={{ background: bgColor }}>
      <div className="container">
        <header className="header">
          <h1>My To-do List ✅</h1>
          <p>Be productive!</p>
          
          {/* Color Picker */}
          <div className="color-picker-container">
            <label htmlFor="bgColor">Background Color: </label>
            <input
              type="color"
              id="bgColor"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="color-picker"
            />
          </div>
        </header>
        
        <TodoForm onAdd={addTodo} />
        
        <FilterBar
          filter={filter}
          setFilter={setFilter}
          activeCount={activeCount}
          completedCount={completedCount}
          onClearCompleted={clearCompleted}
        />
        
        <div className="todo-list-container">
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        </div>
        
        <footer className="footer">
          Made with 💜 using React • {todos.length} total {todos.length === 1 ? 'task' : 'tasks'}
        </footer>
      </div>
    </div>
  );
}