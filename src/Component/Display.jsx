import React, { useState } from "react";

const Display = ({ item, index, deleteButton, statusUpdate, handleEdit }) => {
  const [edit, setEdit] = useState(true);
  const [newTitle, setNewTitle] = useState(item.title);
  const [newDescription, setNewDescription] = useState(item.description);
  const [newPriority, setNewPriority] = useState(item.priority);
  const [newDueDate, setNewDueDate] = useState(item.dueDate);
  const [newImage, setNewImage] = useState(item.image); // Initialize newImage with item.image

  return (
    <>
      {edit ? (
        <div className="col" key={index}>
          <div className="card bg-success bg-opacity-50">
            <div
              className="card-body"
              style={{ backgroundColor: "rgb(221, 255, 170)" }}
            >
              <p className="card-title">Name : {item.title}</p>
              <p className="card-text">Description : {item.description}</p>
              <p className="card-text">Priority : {item.priority}</p>
              <p className="card-text">Due Date : {item.dueDate}</p>
              <div className="image-container">
                {item.image && (
                  <div style={{ width: "100px", height: "100px" }}>
                    <img
                      src={URL.createObjectURL(item.image)}
                      alt="Attachment"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                )}
              </div>
              <p className="card-text">
                Status :
                <select
                  className={
                    item.completed
                      ? "bg-success m-2 p-0"
                      : "btn btn-warning m-2 p-0"
                  }
                  name="completion"
                  id="task-completion"
                  value={item.completed}
                  onChange={(e) => {
                    statusUpdate(e.target.value, item.id);
                  }}
                >
                  <option value={true}>Completed</option>
                  <option value={false}>Pending</option>
                </select>
              </p>
              <div className="row">
                <button
                  className="col m-3 btn btn-success"
                  onClick={() => {
                    setEdit(!edit);
                  }}
                >
                  Edit
                </button>
                <button
                  className="col m-3 btn btn-danger"
                  onClick={() => {
                    deleteButton(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="col" key={index}>
          <div className="card bg-success bg-opacity-50 ">
            <div className="card-body">
              <div>
                <label>Name :</label>
                <input
                  type="text"
                  placeholder={item.title}
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </div>
              <br />
              <div>
                <label> Description :</label>
                <input
                  type="text"
                  placeholder={item.description}
                  value={newDescription}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
              </div>
              <br />
              <div>
                <label> Priority :</label>
                <select
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value)}
                >
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
              <br />
              <div>
                <label>Due Date :</label>
                <input
                  type="date"
                  placeholder={item.dueDate}
                  value={newDueDate}
                  onChange={(e) => setNewDueDate(e.target.value)}
                />
              </div>
              <br />
              <div>
                <label>Image :</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setNewImage(e.target.files[0])}
                />
              </div>
              <br />
              <div className="image-container">
                {newImage && (
                  <div style={{ width: "100px", height: "100px" }}>
                    <img
                      src={URL.createObjectURL(newImage)}
                      alt="Attachment"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </div>
                )}
              </div>
              <br />
              <div>
                <h5 className="card-text">
                  Status :
                  <select
                    style={{ color: "white" }}
                    className={
                      item.completed
                        ? "bg-success m-2 p-0"
                        : "btn btn-warning m-2 p-0"
                    }
                    name="completion"
                    id="task-completion"
                    value={item.completed}
                    onChange={(e) => {
                      statusUpdate(e.target.value, item.id);
                    }}
                  >
                    <option value={true}>Completed</option>
                    <option value={false}>Pending</option>
                  </select>
                </h5>
              </div>
              <div className="row">
                <button
                  className="col m-3 btn btn-success"
                  onClick={() => {
                    handleEdit(
                      item.id,
                      newTitle,
                      newDescription,
                      newPriority,
                      newDueDate,
                      newImage
                    );
                    setEdit(!edit);
                  }}
                >
                  Save
                </button>
                <button
                  className="col m-3 btn btn-danger"
                  onClick={() => {
                    deleteButton(item.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Display;
