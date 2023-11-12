import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RemoveToDo, removeToDo } from "../features/todo/todoSlice";
function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);
  return (
    <div>
      <></>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button
            className="p-2 text-white bg-black rounded"
            onClick={() => dispatch(removeToDo(todo.id))}
          >
            Delete{" "}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
