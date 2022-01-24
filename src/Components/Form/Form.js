import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";
import { addTask } from "../../Actions/getTodoListAction";
import Loader from "../Loader/Loader";


const InputForm = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const addTaskList = useSelector((state) => state.addTask);
  const { loading } = addTaskList;

  const submitHandler = () => {
    // e.preventDefault()
    const data = {
      name,
      status : 'Incomplete'
    }
    dispatch(addTask(data));
    console.log(data);
    
  };

  return (
    <div>
      {loading && <Loader />}
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
