import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

//React.FC - generic react type
//merge our declared type to the react.FC
const Todos: React.FC<{
  items: Todo[];
  onRemoveTodo: (todoId: string) => void;
}> = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          onRemoveTodo={props.onRemoveTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
