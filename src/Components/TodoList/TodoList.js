import React, { useEffect, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import EditForm from "../Edit/EditForm";

import {
  getTasks,
  deleteTask,
} from "../../Actions/getTodoListAction";
import "./TodoList.scss";

const TodoList = ({ history }) => {

  const [updateTaskData, setUpdateTaskData] = useState([])
  const [updateTask, setUpdateTask] = useState(false)
 
  const dispatch = useDispatch();

  const todoList = useSelector((state) => state.todoList);
  const { tasks, loading } = todoList;

  const deleteList = useSelector((state) => state.deleteTask);
  const { success: successDelete } = deleteList;

  
  const taskDetail = useSelector((state) => state.taskDetails);
  const { task } = taskDetail;

  const updateList = useSelector((state) => state.updateTask);
  const { success: successUpdate } = updateList;

  const updateData = (taskData) =>{
    setUpdateTaskData(taskData)
    console.log(taskData)
    setUpdateTask(true)
  } 

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
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks &&
              tasks.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.name}</td>
                  <td>{post.status}</td>
                  <td>
                  <Button onClick={() => {updateData(post)}} style={{marginRight:'20px'}} variant="primary" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
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
        <Modal show={updateTask}
        onHide={() => setUpdateTaskData(false)}
        size='lg'
        centered
        >
          <EditForm 
           taskData = {updateTaskData}
           onHide={()=> setUpdateTask(false)} 
           />
          
        </Modal>
      </Container>
    </div>
  );
};

export default TodoList;
