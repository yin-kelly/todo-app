import { useState } from 'react';
import './TodoForm.css';

export default function TodoForm({ onAdd }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      onAdd(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="todo-form-container">
      <div className="todo-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="What needs to be done?"
          className="todo-input"
        />
        <button onClick={handleAdd} className="add-button">
          Add
        </button>
      </div>
    </div>
  );
}