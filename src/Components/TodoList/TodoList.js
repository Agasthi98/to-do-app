import React, { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import {
  getTasks,
  deleteTask,
  updateTask,
} from "../../Actions/getTodoListAction";
import "./TodoList.scss";

const TodoList = ({ history }) => {
  const dispatch = useDispatch();
  const [complete, setComplete] = useState("");

  const todoList = useSelector((state) => state.todoList);
  const { tasks, loading } = todoList;

  const deleteList = useSelector((state) => state.deleteTask);
  const { success: successDelete } = deleteList;

  const updateList = useSelector((state) => state.updateTask);
  const { success: successUpdate } = updateList;

  useEffect(() => {
    dispatch(getTasks());
  }, [history, successDelete, successUpdate]);

  const handleCheck = (id) => {
    dispatch(updateTask(id));
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteTask(id));
    }
  };

  return (
    <div>
      {loading && <Loader />}
      <Container>
        <Table className="table">
          <thead className="thead-light">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Task</th>
              <th scope="col">Todo</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasks &&
              tasks.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.name}</td>
                  <td>
                    <Form>
                      <Form.Check
                        onChange={(e) => setComplete(e.target.value)}
                        type="switch"
                        id="custom-switch"
                        label="complete"
                      />
                    </Form>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(post.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                  <td>
                    <Button
                      variant="primary"
                      className="btn-sm"
                      onClick={handleCheck}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default TodoList;
