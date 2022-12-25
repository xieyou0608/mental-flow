import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export interface Todo {
  id: string;
  content: string;
}
export interface Record {
  id: string;
  startTime: Date;
  endTime: Date | undefined;
  watchSeconds: number | undefined;
  doneList: Todo[];
}

export interface RecordState {
  isActive: boolean;
  watchSeconds: number;
  todoList: Todo[];
  recordList: Record[];
}

const initialState: RecordState = {
  isActive: false,
  watchSeconds: 0,
  todoList: [],
  recordList: [],
};

export const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    addTodo(state, action) {
      const newTodo = {
        id: v4(),
        content: action.payload,
      };
      state.todoList = [...state.todoList, newTodo];
    },
    removeTodo(state, action) {
      const targetId: string = action.payload;
      state.todoList = state.todoList.filter((todo) => todo.id !== targetId);
    },
    finishTodo(state, action) {
      if (state.recordList.length === 0) {
        alert("請先開始番茄鐘");
        return;
      }
      const done: Todo = action.payload;
      const lastIdx = state.recordList.length - 1;
      const doneList = state.recordList[lastIdx].doneList;
      state.recordList[lastIdx].doneList = [...doneList, done];
      state.todoList = state.todoList.filter((todo) => todo.id !== done.id);
    },
    undoneTodo(state, action) {
      const undone: Todo = action.payload;
      const lastIdx = state.recordList.length - 1;
      const doneList = state.recordList[lastIdx].doneList;
      state.recordList[lastIdx].doneList = doneList.filter(
        (todo) => todo.id !== undone.id
      );
      state.todoList = [...state.todoList, undone];
    },

    startCounting(state) {
      state.isActive = true;
      if (state.watchSeconds === 0) {
        state.recordList = [
          ...state.recordList,
          {
            id: v4(),
            startTime: new Date(),
            endTime: undefined,
            watchSeconds: undefined,
            doneList: [],
          },
        ];
      }
    },
    countSeconds(state) {
      state.watchSeconds += 1;
    },
    pauseCounting(state) {
      state.isActive = false;
    },
    stopCounting(state) {
      state.isActive = false;
      const lastIdx = state.recordList.length - 1;
      state.recordList[lastIdx].endTime = new Date();
      state.recordList[lastIdx].watchSeconds = state.watchSeconds;
      state.watchSeconds = 0;

      // RecordService.addRecord(newRecord);
    },
  },
});

export const recordActions = recordSlice.actions;
