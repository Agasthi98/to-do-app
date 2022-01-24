import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Dropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getSingleTask, updateTask } from "../../Actions/getTodoListAction";

const EditForm = (match) => {
  const dispatch = useDispatch();

  const taskID = match.taskData.id;
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    dispatch(getSingleTask(taskID));
    setId(match.taskData.id);
    setName(match.taskData.name);
    setStatus(match.taskData.status);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const newUpdate = {
      name,
      status,
    };
    dispatch(updateTask(taskID, newUpdate));
    alert('Updated')
    window.location.replace('/')
  };

  const { onHide } = match;
  return (
    <>
    <div className="edit-form" >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Task Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form.Label>ID</Form.Label>
          <Form.Control
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <br />
          <Form.Label>Task Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <Form.Label>Status</Form.Label>
          <Form.Group controlId="type">
            <Form value={status} onChange={(e) => setStatus(e.target.value)}>
              <select style={{width:'100%'}}>
              <option value="">Select </option>
                <option value="Complete">Complete </option>
                <option value="Incmplete">Incmplete </option>
              </select>
            </Form>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              onHide();
            }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
      </div>
    </>
  );
};

export default EditForm;
