import React from "react";

//React.FC - generic react type
//merge our declared type to the react.FC
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li>{todo}</li>
      ))}
    </ul>
  );
};

export default Todos;
