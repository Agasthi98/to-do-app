import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";
import { addTask } from "../../Actions/getTodoListAction";
import Loader from "../Loader/Loader";
import Success from "../Loader/Succsess";

const InputForm = () => {
  const [name, setName] = useState("");
  const [complete] = useState(false);

  const dispatch = useDispatch();

  const addTaskList = useSelector((state) => state.addTask);
  const { loading, success } = addTaskList;

  const submitHandler = () => {
    // e.preventDefault()
    dispatch(addTask(name, complete));
    console.log(name, complete);
  };

  return (
    <div>
      {loading && <Loader />}
      {success && <Success success="New Task added" />}
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
    </div>
  );
};

export default InputForm;
