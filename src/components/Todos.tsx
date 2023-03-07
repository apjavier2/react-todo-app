import React from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

//React.FC - generic react type
//merge our declared type to the react.FC
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.list}>
      {todosCtx.items.map((todo) => (
        <TodoItem
          key={todo.id}
          text={todo.text}
          onRemoveTodo={todosCtx.removeTodo.bind(null, todo.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
