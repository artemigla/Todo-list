import React, { useState } from "react";
import { ShowTodo } from "./Showtodo";
import { v4 as uuid } from 'uuid';

export const Todolist = () => {

  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);

  const handleInput = (e) => setTask(e.target.value);

  const handleButton = () => {
    const newTask = {
      id: uuid(),
      text: task
    }
    setTodo([...todo, newTask]);
    setTask('');
  }

  const deleteTodo = (text) => {
    const newTodos = todo.filter((t) => {
      return t.id !== text
    });
    setTodo(newTodos);

  }

  return (
    <div>
      <input type={'text'} value={task} onInput={handleInput} />
      <button onClick={handleButton}>New task</button>
      <ShowTodo task={todo} remove={deleteTodo} />
    </div>
  )
}
