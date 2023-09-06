import React from 'react';
export const ShowTodo = ({ task, remove }) => {

  return (
    <ul>
      {task.map(({ text, id }) => (
        <div key={id}>
          <li>{text}</li>
          <button onClick={() => remove(id)}>Delete</button>
        </div>
      ))}

    </ul>
  )
}
