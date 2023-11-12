import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../features/todo/todoSlice";

function AddToDo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addToDoHandler = (e) => {
    e.preventDefault();

    dispatch(addToDo(input));
    setInput("");
  };
  return (
    <form
      className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md"
      onSubmit={addToDoHandler}
    >
      <input
        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
        value={input}
        placeholder="Enter a Todo"
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="p-2 text-white bg-black rounded" type="submit">
        Add
      </button>
    </form>
  );
}

export default AddToDo;
