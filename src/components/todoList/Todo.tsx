import React from "react";
import { MdDone } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { recordActions } from "../../store/recordSlice";
type TodoType = {
  id: string;
  content: string;
};

const Todo: React.FC<{ todo: TodoType }> = ({ todo }) => {
  const dispatch = useDispatch();
  const handleFinishTodo = () => {
    dispatch(recordActions.finishTodo(todo));
  };
  const handleDeleteTodo = () => {
    dispatch(recordActions.removeTodo(todo.id));
  };
  return (
    <li className="flex items-center bg-white p-1">
      <h6 className="font-bold flex-grow m-3">{todo.content}</h6>
      <div>
        <button
          className="text-green-800 text-2xl m-3"
          onClick={handleFinishTodo}
        >
          <MdDone />
        </button>
        <button
          className="text-red-500 text-2xl m-3"
          onClick={handleDeleteTodo}
        >
          <AiFillDelete />
        </button>
      </div>
    </li>
  );
};

export default Todo;
