import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

//React.FC - generic react type
//merge our declared type to the react.FC
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} />
      ))}
    </ul>
  );
};

export default Todos;
