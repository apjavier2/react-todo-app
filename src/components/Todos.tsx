import React from "react";
import Todo from "../models/todo";

//React.FC - generic react type
//merge our declared type to the react.FC
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
