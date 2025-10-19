import { useState } from 'react';
import './TodoItem.css';

export default function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText.trim());
      setIsEditing(false);
    } else {
      setEditText(todo.text); // Reset if empty
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.text); // Reset to original
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className="todo-item editing">
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyPress}
          className="edit-input"
          autoFocus
        />
        <button onClick={handleSave} className="save-button">
          Save
        </button>
        <button onClick={handleCancel} className="cancel-button">
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button
        onClick={() => onToggle(todo.id)}
        className="checkbox"
      >
        {todo.completed && '✓'}
      </button>
      
      <span 
        className="todo-text"
        onDoubleClick={() => setIsEditing(true)}
        title="Double-click to edit"
      >
        {todo.text}
      </span>
      
      <span className="todo-date">{todo.date}</span>
      
      <button
        onClick={() => setIsEditing(true)}
        className="edit-button"
      >
        Edit
      </button>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-button"
      >
        Delete
      </button>
    </div>
  );
}