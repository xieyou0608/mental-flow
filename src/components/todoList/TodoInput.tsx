import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { recordActions } from "../../store/recordSlice";
import { MdAdd } from "react-icons/md";

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState("");
  const dispatch = useDispatch();
  const handleChangeTodoInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };
  const submitTodo = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(recordActions.addTodo(todoInput));
    setTodoInput("");
  };

  return (
    <form
      className="flex items-center w-full h-1/4 font-bold p-4"
      onSubmit={submitTodo}
    >
      <div className="flex-grow h-full">
        <input
          className="w-full h-full px-3 opacity-50 bg-[#EBFFFD] rounded-lg"
          value={todoInput}
          onChange={handleChangeTodoInput}
        />
      </div>
      <button className="hover:bg-gray-400 hover:bg-opacity-50 duration-500 rounded-full">
        <MdAdd className="text-3xl" />
      </button>
    </form>
  );
};

export default TodoInput;
