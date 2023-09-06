import React from 'react';

export const ShowTodo = ({ task }) => {
  console.log('task => ', task);

  return (
    <ul>
      {task.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  )
}
