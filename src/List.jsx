import React from "react";
import "./styles.css";
import ToDo from "./ToDo";
import ColorPicker from "./ColorPicker.jsx";
import colors from "./colors.js";

let index = 2;

export default function List() {
  const [selectedColor, setSelectedColor] = React.useState(
    colors[parseInt(Math.random() * colors.length, 10)]
  );
  const [todos, settodos] = React.useState([
    {
      id: 1,
      title: "",
      description: "",
      color: selectedColor,
      completed: false,
      delete: false
    }
  ]);
  const addToDo = () => {
    const todo = [
      {
        id: index,
        title: "",
        description: "",
        color: selectedColor,
        completed: false,
        delete: false
      }
    ];

    const temp = todos.slice();
    settodos(todo.concat(temp));
    index++;
    console.log(selectedColor);
  };
  const ondelete = (id) => {
    setTimeout(() => {
      const temp = todos.filter((todo) => todo.id !== id);
      settodos(temp);
    }, 200);
  };
  const oncompleted = (id) => {
    const temp = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = todo.completed ? false : true;
      }
      return todo;
    });
    settodos(temp);
  };
  const handleChange = (color, event) => {
    setSelectedColor(color.hex);
    // color = {
    //   hex: '#333',
    //   rgb: {
    //     r: 51,
    //     g: 51,
    //     b: 51,
    //     a: 1,
    //   },
    //   hsl: {
    //     h: 0,
    //     s: 0,
    //     l: .20,
    //     a: 1,
    //   },
    // }
  };
  return (
    <div>
      <div className="selection_box">
        <ColorPicker className="color_picker" handleChange={handleChange} />
        <div className="addToDo" onClick={() => addToDo()}>
          + ADD TO-DO
        </div>
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
                del={todo.delete}
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
