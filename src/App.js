import React from "react";
import { Todolist } from "./components/Todolist";
import './styles/style.css';

export const App = () => {
  return (
    <div className="wrapper">
      <Todolist />
    </div>
  )
}
