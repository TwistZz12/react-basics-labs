import React from 'react';
const Task = (props) => {
    return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className='title'>{props.title}</p>
            <p>Due：{props.deadline}</p>
            <p className='element'>{props.description}</p>
            <p className='priority' style={{backgroundColor:
                props.priority ==='Low' ? 'green':
                props.priority ==='Medium' ? '#DAA520':
                props.priority ==='High' ? 'red':'transparent'
            }}>
            {props.priority}
            </p>
            <button onClick={props.markDone} className='doneButton'>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
      
    )

}

export default Task;