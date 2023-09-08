import React from 'react';
import '../styles/style.css';
import { Button } from './Button';

export const ShowTodo = ({ task, remove }) => {
  return (
    <ul className='container'>
      {task.map(({ text, id }) => (
        <div className='block' key={id}>
          <li className='task'>{text}</li>
          <Button onClick={() => remove(id)} label={'Delete'} />
        </div>
      ))}
    </ul>
  )
}
