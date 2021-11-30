import { React, useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { GrEdit } from "react-icons/gr";
import ViewTask from "./ViewTask";
import { useDispatch } from "react-redux";
import { editTask, deleteTask } from "../JS/Actions/actions";
import { MdDone } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function Lightbox({ show, setShow, todo, i, setHover }) {
  const handleClose = () => {
    setShow(false);
    setHover(-1);
  };
  const handleShow = () => setShow(true);
  const handleChange = (e) => {
    setDescription(e.target.value);
    e.preventDefault();
  };

  const [description, setDescription] = useState(todo.description);
  const [isDone, setIsDone] = useState(todo.isDone);

  const dispatch = useDispatch();
  const handleEditTask = () => {
    const updatedTodo = {
      id: {
        $oid: todo.id.$oid,
      },
      description: description,
      isDone: isDone,
    };
    dispatch(editTask(updatedTodo));
    setShow(false);
    setHover(-1);
  };

  const handleDelete = () => {
    const todoToDelete = {
      id: { $oid: todo.id.$oid },
      description: todo.description,
      isDone: todo.isDone,
    };
    dispatch(deleteTask(todoToDelete));
    setShow(false);
    setHover(-1);
  };

  const done = () => {
    setIsDone(true);
  };

  const notDone = () => {
    setIsDone(false);
  };

  return (
    <>
      <GrEdit style={{ marginTop: "5px" }} onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Todo task here...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ViewTask description={description} i={i} isDone={isDone} />
          <div style={{ display: "flex" }}>
            <Form.Control
              type="text"
              placeholder=" Add Todo task here..."
              onChange={handleChange}
              value={description}
            />

            <MdDone size={35} color="Green" onClick={done} />
            <IoMdClose size={35} color="red" onClick={notDone} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleEditTask}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Lightbox;
