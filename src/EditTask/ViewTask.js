import React from "react";
import { ListGroup } from "react-bootstrap";
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function ViewCard({ description, i, isDone }) {
  return (
    <>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <span>{i + 1}. </span>
        <div className="ms-2 me-auto">
          <div
            className="fw"
            style={isDone ? { textDecoration: "line-through" } : null}
          >
            {description}
          </div>
        </div>
        {isDone ? (
          <MdDone size={35} color="Green" />
        ) : (
          <IoMdClose size={35} color="red" />
        )}
      </ListGroup.Item>
      <br />
    </>
  );
}

export default ViewCard;
