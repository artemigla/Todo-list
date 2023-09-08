import React from 'react';
import '../styles/style.css';

export const ShowTodo = ({ task, remove }) => {

  return (
    <ul className='container'>
      {task.map(({ text, id }) => (
        <div className='block' key={id}>
          <li className='task'>{text}</li>
          <button onClick={() => remove(id)}>Delete</button>
        </div>
      ))}
    </ul>
  )
}
