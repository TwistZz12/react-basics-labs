import React from 'react';
const Task = (props) => {
    return (
        <div className="card">
            <p className='title'>{props.title}</p>
            <p>Due：{props.deadline}</p>
            <p className='element'>{props.description}</p>
            
        </div>
      
    )

}

export default Task;