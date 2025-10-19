import './App.css';
import TodoForm from './components/TodoForm';

export default function App() {
  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>My Todo List</h1>
          <p>Stay organized and productive</p>
        </header>
        
        <TodoForm />
      </div>
    </div>
  );
}