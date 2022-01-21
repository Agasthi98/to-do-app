import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";
import { addTask } from "../../Actions/getTodoListAction";

const InputForm = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  // const addTaskList = useSelector((state) => state.addTask);
  // const { loading, tasks } = addTaskList;

  const submitHandler = () => {
    dispatch(addTask(name));
    console.log(name);
  };

  return (
    <Container>
      <Form onSubmit={submitHandler} style={{ marginTop: "80px" }}>
        <Form.Control
          type="text"
          placeholder="Input task"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <Button type="submit" style={{ float: "left", marginTop: "10px" }}>
          submit
        </Button>
      </Form>
    </Container>
  );
};

export default InputForm;
