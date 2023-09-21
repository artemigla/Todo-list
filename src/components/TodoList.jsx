import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../styles/style.css';
import { Button } from './Button';
import { ShowList } from './ShowList';
import { addTask, updateValue } from './TodoSlice';

export const TodoList = () => {

  const todos = useSelector(state => state.todo.todos);
  const task = useSelector(state => state.todo.nameTask);
  const dispatch = useDispatch();

  const handleInput = (event) => dispatch(updateValue(event.target.value));
  const handleButton = () => dispatch(addTask());

  return (
    <div>
      <div className='form'>
        <input value={task} onInput={handleInput} />
        <Button onClick={handleButton} label={'Add task'} />
      </div>
      {todos.map((todo) => <ShowList key={todo.id} {...todo} />)}
    </div>
  )
}
