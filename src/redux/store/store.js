import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from '../../components/TodoSlice.js';
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from 'redux';
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage
};

const reducers = combineReducers({
  todo: TodoSlice
});

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})
