import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import Lightbox from "../EditTask/Lightbox";

function Filter({ filteredBy, todos }) {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(-1);

  const handleMouseEnter = (i) => {
    setHover(i);
  };

  return (
    <>
      {filteredBy === "Done"
        ? todos
            .filter((todo) => {
              return todo.isDone === true;
            })
            .map((todo, i) => {
              return (
                <ListGroup
                  as="ol"
                  onMouseEnter={() => handleMouseEnter(i)}
                  key={i}
                >
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <span>{i + 1}. </span>
                    <div className="ms-2 me-auto">
                      <div
                        className="fw"
                        style={
                          todo.isDone
                            ? { textDecoration: "line-through" }
                            : null
                        }
                      >
                        {todo.description}
                      </div>
                    </div>
                    {hover === i ? (
                      <>
                        <Lightbox
                          show={show}
                          setShow={setShow}
                          todo={todo}
                          i={i}
                          setHover={setHover}
                        />
                      </>
                    ) : todo.isDone ? (
                      <MdDone size={35} color="Green" />
                    ) : (
                      <IoMdClose size={35} color="red" />
                    )}
                  </ListGroup.Item>
                </ListGroup>
              );
            })
        : filteredBy === "Not-Yet"
        ? todos
            .filter((todo) => {
              return todo.isDone === false;
            })
            .map((todo, i) => (
              <ListGroup
                as="ol"
                onMouseEnter={() => handleMouseEnter(i)}
                key={i}
              >
                <ListGroup.Item
                  as="li"
                  className="d-flex justify-content-between align-items-start"
                >
                  <span>{i + 1}.</span>
                  <div className="ms-2 me-auto">
                    <div
                      className="fw"
                      style={
                        todo.isDone ? { textDecoration: "line-through" } : null
                      }
                    >
                      {todo.description}
                    </div>
                  </div>
                  {hover === i ? (
                    <>
                      <Lightbox
                        show={show}
                        setShow={setShow}
                        todo={todo}
                        i={i}
                        setHover={setHover}
                      />
                    </>
                  ) : todo.isDone ? (
                    <MdDone size={35} color="Green" />
                  ) : (
                    <IoMdClose size={35} color="red" />
                  )}
                </ListGroup.Item>
              </ListGroup>
            ))
        : todos.map((todo, i) => (
            <ListGroup as="ol" onMouseEnter={() => handleMouseEnter(i)} key={i}>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <span>{i + 1}.</span>
                <div className="ms-2 me-auto">
                  <div
                    className="fw"
                    style={
                      todo.isDone ? { textDecoration: "line-through" } : null
                    }
                  >
                    {todo.description}
                  </div>
                </div>
                {hover === i ? (
                  <>
                    <Lightbox
                      show={show}
                      setShow={setShow}
                      todo={todo}
                      i={i}
                      setHover={setHover}
                    />
                  </>
                ) : todo.isDone ? (
                  <MdDone size={35} color="Green" />
                ) : (
                  <IoMdClose size={35} color="red" />
                )}
              </ListGroup.Item>
            </ListGroup>
          ))}
    </>
  );
}

export default Filter;
