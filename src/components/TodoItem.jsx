import './TodoItem.css';

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <button
        onClick={() => onToggle(todo.id)}
        className="checkbox"
      >
        {todo.completed && '✓'}
      </button>
      
      <span className="todo-text">{todo.text}</span>
      
      <span className="todo-date">{todo.date}</span>
      
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-button"
      >
        Delete
      </button>
    </div>
  );
}