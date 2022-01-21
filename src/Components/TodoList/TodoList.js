import React, { useEffect } from "react";
import { Button,Container,Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, deleteTask } from "../../Actions/getTodoListAction";
import "./TodoList.scss";

const TodoList = () => {
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todoList);
  const { tasks, loading } = todoList;

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteTask(id));
    }
  };

  return (
    <Container>
      <Table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Task</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.name}</td>
              <td>
                <Button
                  variant="danger"
                  className="btn-sm"
                  onClick={() => deleteHandler(post.id)}
                >
                  <i className="fas fa-trash"></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TodoList;
