import React, { useState } from "react";
import { ShowTodo } from "./Showtodo";

export const Todolist = () => {

  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);

  const handleInput = (e) => {
    setTask(e.target.value);
  }

  const handleButton = () => {
    setTodo([...todo, task]);
    setTask('');
  }
  return (
    <div>
      <input type={'text'} value={task} onInput={handleInput} />
      <button onClick={handleButton}>New task</button>
      <ShowTodo task={todo} />
    </div>
  )
}
