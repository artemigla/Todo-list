import { v4 as uuid } from 'uuid';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  nameTask: ''
};

export const TodoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state) => {
      const newTask = {
        id: uuid(),
        task: state.nameTask
      }
      if (state.nameTask.length) {
        state.todos.push(newTask);
      }
      state.nameTask = "";
    },
    updateValue: (state, action) => {
      state.nameTask = action.payload
    },
    deleteTask: (state, action) => {
      const indexTask = state.todos.findIndex(() => {
        return state.nameTask === action.payload;
      });
      state.todos.splice(indexTask, 1);
    }
  }
})

export const { addTask, updateValue, deleteTask } = TodoSlice.actions;
export default TodoSlice.reducer;



