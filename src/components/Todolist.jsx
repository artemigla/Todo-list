import React, { useState } from "react";
import { ShowTodo } from "./Showtodo";
import { v4 as uuid } from 'uuid';
import { Button } from "./Button";

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
      <div className="form">
        <input type={'text'} value={task} onInput={handleInput} />
        <Button onClick={handleButton} label={'New task'} />
      </div>
      <div>
        <ShowTodo task={todo} remove={deleteTodo} />
      </div>
    </div>
  )
}
