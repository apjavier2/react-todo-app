import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

//React.FC - generic react type
//merge our declared type to the react.FC
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </ul>
  );
};

export default Todos;
