import React from "react";
import "./styles.css";

export default function ToDo(props) {
  const tick_icon = "./tick-icon.png",
    cross_icon = "./cross-icon.png",
    delete_icon = "./bin-icon.png";

  const [description, setDescription] = React.useState("");
  const [title, setTitle] = React.useState("");

  const { id, completed, color, ondelete, oncompleted } = props;
  return (
    <div className={"To-Do " + color}>
      <input
        className={"title ".concat(completed ? "done" : "")}
        placeholder="Title"
        value={title}
        onChange={(event) => {
          const str = event.target.value;
          const temp = str.charAt(0).toUpperCase() + str.slice(1);
          setTitle(temp);
        }}
      ></input>
      <textarea
        className={"description ".concat(completed ? "done" : "")}
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>
      <br />
      <div className="right">
        <img
          className="remove"
          src={delete_icon}
          alt="Remove"
          width="20px"
          title="Delete TO-DO"
          onClick={() => ondelete(id)}
        ></img>
        <img
          className="completed"
          src={completed ? cross_icon : tick_icon}
          alt={completed ? "Mark Not Done" : "Mark Done"}
          width="20px"
          title={completed ? "Mark Not Done" : "Mark Done"}
          onClick={() => oncompleted(id)}
        ></img>
      </div>
    </div>
  );
}
