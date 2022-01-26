import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="w-full h-auto">
      <ul className="w-full h-auto flex items-center flex-col-reverse">
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={todos}
            text={todo.text}
            key={todo.id}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
