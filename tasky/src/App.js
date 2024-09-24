import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
function App() {
  return (
    <div className="container">
    <h1>tasky</h1>
    <Task title="Dishes" deadline="Today" />
    <Task title="Laundry" deadline="Tomorrow">
      Fold laudary and put away
    </Task>
    <Task title="Tidy" deadline="Today" />
    </div>
  );
}

export default App;
