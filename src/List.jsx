import React from "react";
import "./styles.css";
import ToDo from "./ToDo";

let index = 2;

export default function List() {
  const [todos, addtodos] = React.useState([
    {
      id: 1,
      title: "",
      description: "",
      color: "Blue",
      completed: false
    }
  ]);
  const addToDo = () => {
    const todo = [
      {
        id: index,
        title: "",
        description: "",
        color: "Blue",
        completed: false
      }
    ];
    const temp = todos.slice();
    addtodos(todo.concat(temp));
    index++;
  };
  const ondelete = (id) => {
    const temp = todos.filter((todo) => todo.id !== id);
    addtodos(temp);
  };
  const oncompleted = (id) => {
    const temp = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = todo.completed ? false : true;
      }
      return todo;
    });
    addtodos(temp);
  };
  return (
    <div>
      <div className="addToDo" onClick={() => addToDo()}>
        + ADD TO-DO
      </div>
      <div className="list">
        {todos.length !== 0
          ? todos.map((todo) => (
              <ToDo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                description={todo.description}
                color={todo.color}
                completed={todo.completed}
                ondelete={ondelete}
                oncompleted={oncompleted}
              />
            ))
          : "No Tasks Left"}
      </div>
    </div>
  );
}
