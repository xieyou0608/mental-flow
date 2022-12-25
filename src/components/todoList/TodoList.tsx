import React from "react";
import Todo from "./Todo";
import TodoInput from "./TodoInput";
import RoundedBox from "../layout/RoundedBox";
import { useSelector } from "react-redux";
import { AppState } from "../../store/store";

const TodoList = () => {
  const todoList = useSelector((state: AppState) => state.record.todoList);

  return (
    <RoundedBox subheader="Todos" className="h-[50vh]">
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
      <TodoInput />
    </RoundedBox>
  );
};

export default TodoList;
