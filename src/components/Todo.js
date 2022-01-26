import React from "react";

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandle = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandle = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="w-[70%] h-[50px] bg-white flex items-center pl-3 font-mono text-xl my-2">
      <li
        className={`w-[90%] ${
          todo.completed ? "line-through text-blue-400" : ""
        }`}
      >
        {text}
      </li>
      <button
        onClick={() => completeHandle()}
        className="w-[5%] h-full bg-green-500 text-white border-0"
      >
        <i className="fas fa-check"></i>
      </button>
      <button
        onClick={() => deleteHandle()}
        className="w-[5%] h-full bg-red-500 text-white border-0"
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
