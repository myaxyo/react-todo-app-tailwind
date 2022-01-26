import React, { useState } from "react";

import "./App.css";
import Forms from "./components/Forms";
import TodoList from "./components/TodoList";

const App = () => {
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="w-full h-screen bg-pink-300 flex items-center flex-col p-[30px]">
      <header className="p-[20px] text-3xl font-bold text-green-500">
        <h1>Mo's Todo List</h1>
      </header>
      <Forms
        todos={todos}
        setTodos={setTodos}
        textInput={textInput}
        setTextInput={setTextInput}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
};

export default App;
