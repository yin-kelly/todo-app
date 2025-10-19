import './FilterBar.css';

export default function FilterBar({ 
  filter, 
  setFilter, 
  activeCount, 
  completedCount, 
  onClearCompleted 
}) {
  return (
    <div className="filter-bar-container">
      <div className="stats">
        <span><strong>{activeCount}</strong> active</span>
        <span><strong>{completedCount}</strong> completed</span>
      </div>
      
      {completedCount > 0 && (
        <button onClick={onClearCompleted} className="clear-button">
          Clear completed
        </button>
      )}
      
      <div className="filter-buttons">
        <button
          onClick={() => setFilter('all')}
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
        >
          Completed
        </button>
      </div>
    </div>
  );
}