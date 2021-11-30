import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "../JS/Actions/actions";
function Addtask() {
  
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setDescription(e.target.value);
    e.preventDefault();
  };
  var generate = function () {
    var ObjectId = (
      m = Math,
      d = Date,
      h = 16,
      s = (s) => m.floor(s).toString(h)
    ) =>
      s(d.now() / 1000) + " ".repeat(h).replace(/./g, () => s(m.random() * h));
    // Thanks to Ruben Stolk
    return ObjectId();
  };

  const handleSubmit = (e) => {
    
    const todo = {
      "id": {
        "$oid": generate()
      },
      "description": description,
      "isDone": false
    }
    dispatch(addTodo(todo))
    console.log(todo);
    setDescription("")
  };
  const handleEnter = (e) => {
    if(e.key === "Enter"){
      handleSubmit()
    } return;
  }

  return (
    <div style={{ display: "flex" }}>
      <Form.Control
        type="text"
        placeholder=" Add Todo task here..."
        onChange={handleChange}
        value={description}
        onKeyPress={handleEnter}
      />
      <Button variant="primary" type="submit" onKeyPress={handleEnter} onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
}

export default Addtask;
