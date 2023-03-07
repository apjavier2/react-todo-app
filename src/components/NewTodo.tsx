import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

//{onAddTodo: (enteredText: string)=> void}
//indicates that we are expecting a function that takes string as a parameter and returns void
const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);

  //This indicates that the ref that this will be connected to is for an input element.
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (enteredText.trim().length === 0) {
      return;
    }
    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef}></input>
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
