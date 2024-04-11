import React from 'react';

const DropMenu = ({ handleFilter,filterStatus}) => {
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
      </div>
    );
};

export default DropMenu;