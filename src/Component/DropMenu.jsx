import React from 'react';
import Display from './Display';
import { Link } from 'react-router-dom';

const DropMenu = ({ handleFilter,filterStatus, filteredTodo, statusUpdate, handleEdit, deleteButton}) => {
    return (
      <div className="container">
        <div class="d-flex justify-content-between px-3 py-4">
          <div className="d-flex">
            <h4>Status Filter: </h4>
            <select
              name="statusFilter"
              value={filterStatus}
              class={
                filterStatus === "completed" ? "bg-success" : "btn btn-warning"
              }
              onChange={(e) => handleFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>
        <div class=" container">
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
        </div>
        <div>
          <div className='container text-center'>
            <Link to="/">
              <button type="button" class="btn btn-outline-dark">
                Back to Todo
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default DropMenu;