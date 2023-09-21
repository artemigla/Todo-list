import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "./Button";
import { deleteTask } from "./TodoSlice";

export const ShowList = React.memo(({ id, task }) => {

  const dispatch = useDispatch();
  const handleDelete = (id) => dispatch(deleteTask(id));

  return (
    <ul className="container">
      <div className="block">
        <li className="task">{task}</li>
        <Button onClick={() => handleDelete({ id })} label={'Delete'} />
      </div>
    </ul>
  )
})
