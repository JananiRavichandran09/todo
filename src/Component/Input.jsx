import React, { useState } from "react";

const Input = ({ todoValue, setTodoValue, addTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState("");
  const addButtonCall = () => {
    addTodo(title, description, priority, dueDate);
    setTitle("");
    setDescription("");
    setPriority("");
    setDueDate("");
  };
  return (
    <div className="container">
      <h1
        className="text-center m-3"
        style={{ color: "#198754", textAlign: "center" }}
      >
        My Todo
      </h1>
      <div className="container">
        <div
          className="row  justify-content-around text"
          style={{ marginTop: "100px", textAlign: "center" }}
        >
          <input
            style={{
              padding: "10px",
              marginRight: "100px",
              borderRadius: "10px",
            }}
            class="col-lg-4 col-sm-12 p-2 m-1 border-success border-3"
            type="text"
            placeholder="Todo Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            style={{
              padding: "10px",
              marginRight: "100px",
              borderRadius: "10px",
            }}
            class="col-lg-4 col-sm-12 p-2 m-1 border-success border-3"
            type="text"
            placeholder="Todo Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <input
            style={{
              padding: "10px",
              marginRight: "100px",
              borderRadius: "10px",
            }}
            class="col-lg-4 col-sm-12 p-2 m-1 border-success border-3"
            type="number"
            placeholder="Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          />
          <input
            style={{
              padding: "10px",
              marginRight: "100px",
              borderRadius: "10px",
            }}
            class="col-lg-4 col-sm-12 p-2 m-1 border-success border-3"
            type="date"
            placeholder="dd-mm-yyyy"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />
          <div>
            <button
              style={{
                padding: "10px",
                marginRight: "100px",
                borderRadius: "15px",
                backgroundColor: "#198754",
                border: "none",
                borderRadius: "10px",
                color: "white",
              }}
              class="col-lg-1 col-sm-3 col-3 p-2 m-1 btn btn-success border-success border-3"
              onClick={() => {
                addButtonCall(title, description, priority, dueDate);
              }}
            >
              Add Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
