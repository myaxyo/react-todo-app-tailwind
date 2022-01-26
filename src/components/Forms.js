import React, { useState } from "react";

const Forms = ({ textInput, setTextInput, todos, setTodos, setStatus }) => {
  const handleInput = (e) => {
    console.log(e.target.value);
    setTextInput(e.target.value);
  };

  const defaultPre = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: textInput, completed: false, id: Math.random() * 1000 },
    ]);
    setTextInput("");
  };

  return (
    <form className="w-[50%] h-[90px] flex p-6">
      <input
        value={textInput}
        onChange={handleInput}
        type="text"
        className="outline-none w-[100%] h-[100%] text-[25px] p-[5px] "
      />
      <button onClick={defaultPre} className="h-[100%]">
        <i className="fas fa-plus-square h-[100%] text-[30px] flex justify-center items-center bg-white text-green-400 px-2 hover:text-teal-400"></i>
      </button>
    </form>
  );
};

export default Forms;
