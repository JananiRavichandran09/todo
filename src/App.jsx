import React, { useEffect, useState } from "react";
import Input from "./Component/Input";
import '../src/App.css'
import DropMenu from "./Component/DropMenu";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  const [todoValue, setTodoValue] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState(todoValue);
  const [filterStatus, setFilteredStatus] = useState("all");

  const addTodo = (title, description, priority, dueDate, image) => {
    let newData = {
      id: todoValue.length,
      title: title,
      description: description,
      priority: priority,
      dueDate: dueDate,
      image:image,
      completed: false,
    };
    setTodoValue([...todoValue, newData]);
  };

  const deleteButton = (deleteIndex) => {
    setTodoValue(todoValue.filter((item, index) => item.id !== deleteIndex));
  };

  const statusUpdate = (status, id) => {
    setTodoValue(
      todoValue.map((item, index) => {
        if (id === item.id) {
          if (item.completed) {
            return { ...item, completed: false };
          } else {
            return { ...item, completed: true };
          }
        }
        return item;
      })
    );
  };

  const handleFilter = (todoFilter) => {
    console.log(todoFilter + "filter status");
    setFilteredStatus(todoFilter);
  };

  useEffect(() => {
    if (filterStatus === "all") {
      setFilteredTodo(todoValue);
    } else if (filterStatus === "pending") {
      setFilteredTodo(
        todoValue.filter((item, index) => item.completed === false)
      );
    } else if (filterStatus === "completed") {
      setFilteredTodo(
        todoValue.filter((item, index) => item.completed === true)
      );
    }
  }, [filterStatus, todoValue]);

 const handleEdit = (
   id,
   newTitle,
   newDescription,
   newPriority,
   newDueDate,
   newImage // Add newImage parameter
 ) => {
   setTodoValue(
     todoValue.map((item, index) => {
       return {
         ...item,
         title: item.id === id ? newTitle : item.title,
         description: item.id === id ? newDescription : item.description,
         priority: item.id === id ? newPriority : item.priority,
         dueDate: item.id === id ? newDueDate : item.dueDate,
         image: item.id === id ? newImage : item.image, // Update image if ID matches
       };
     })
   );
 };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Input
                todoValue={todoValue}
                setTodoValue={setTodoValue}
                addTodo={addTodo}
              />
            }
          />
          <Route
            path="/home"
            element={
              <DropMenu
                handleFilter={handleFilter}
                filterStatus={filterStatus}
                filteredTodo={filteredTodo}
                setFilteredTodo={setFilteredTodo}
                deleteButton={deleteButton}
                statusUpdate={statusUpdate}
                handleEdit={handleEdit}
              />
            }
          />
        </Routes>
      </BrowserRouter>
     
      
    </div>
  );
};

export default App;
App.js


{/* <div class=" container">
        <div class="row row-cols-1 row-cols-md-3 row-cols-sm-2 mt-1 p-3 g-4">
          {filteredTodo.map((item, index) => {
            return (
              <Display
                item={item}
                index={index}
                deleteButton={deleteButton}
                statusUpdate={statusUpdate}
                handleEdit={handleEdit}
              />
            );
          })}
        </div>
      </div> */}