import React, { useState } from "react";
import Task from "./Task";
import Addtask from "./Addtask";
import { ListGroup } from "react-bootstrap";

function ListTask() {
  const [filteredBy, setFilteredBy] = useState("All");

  const handleFilterChange = (e) => {
    setFilteredBy(e.target.value);
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto" }}>
      <ListGroup as="ol">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Tasks</div>
          </div>
          <select id="filter" style={{marginRight:"10px"}} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Done">Done</option>
            <option value="Not-Yet">Not-Yet</option>
          </select>
          <div className="fw-bold">State | Edit</div>
        </ListGroup.Item>
      </ListGroup>
      <Task filteredBy={filteredBy} />
      <Addtask />
    </div>
  );
}

export default ListTask;
