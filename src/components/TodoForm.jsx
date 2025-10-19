import { useState } from 'react';
import './TodoForm.css';

export default function TodoForm() {
  const [input, setInput] = useState('');

  return (
    <div className="todo-form-container">
      <div className="todo-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What needs to be done?"
          className="todo-input"
        />
        <button className="add-button">Add</button>
      </div>
    </div>
  );
}