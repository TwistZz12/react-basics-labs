import logo from './logo.svg';
import './App.css';
import Task from './components/Task';
import React,{useState} from 'react';
import AddTaskForm from './components/Form';

function App() {
  const [ formState, setFormState ] = useState({
    title: "",
    description: "",
    deadline: "",
    priority:""
  });
  const formChangeHandler = (event) => {
    let form = {...formState};

    switch(event.target.name) {
      case "title":
          form.title = event.target.value;
          break;
      case "description":
          form.description = event.target.value;
          break;
      case "deadline":
          form.deadline = event.target.value;
          break;
      case "priority":
          form.priority = event.target.value;
      default:
          form = formState;
    }
    setFormState(form);
  }
  const[ taskState , setTaskState ] = useState({
    tasks:[
      { id : 1 , title:"Dishes", description: "Empty dishwasher", deadline: "Today" , done:false , priority:"Low"},
      { id : 2 , title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" , done:false, priority:"Medium"},
      { id : 3 , title: "Tidy up", deadline: "Today" , done:false, priority:"High"}
    ]
  });


  const doneHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks[taskIndex].done = !tasks[taskIndex].done;
    setTaskState({tasks});
    console.log(`${taskIndex} ${tasks[taskIndex].done}`);
  }
  
  const deleteHandler = (taskIndex) => {
    const tasks = [...taskState.tasks];
    tasks.splice(taskIndex, 1);
    setTaskState({tasks});
  } 

  console.log(formState);

  return (
    <div className="container">
    <h1>Tasky</h1>
  {taskState.tasks.map((task,index) =>(
    <Task
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
      done={task.done}
      priority={task.priority}
      markDone={() => doneHandler(index)}
      deleteTask = {() => deleteHandler(index)}
    />
  ))}
  <AddTaskForm change={formChangeHandler} />
  </div>
  );
}

export default App;
