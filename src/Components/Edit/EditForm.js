import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
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
  };

  const { onHide } = match;
  return (
    <div className="updateTask">
      <div className="updateTask-header">
        <Modal.Header>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <div className="addlist">
            <div className="row">
              <div className="inputtodoname">
                <input
                  type="text"
                  disabled
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option id="Incomplete">Incomplete</option>
                  <option id="Completed">Completed</option>
                </select>
              </div>
            </div>
          </div>
          <button className="btn-update" onClick={onSubmit}>
            Update
          </button>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-close"
            onClick={() => {
              onHide();
            }}
          >
            Close
          </button>
        </Modal.Footer>
      </div>
    </div>
  );
};

export default EditForm;
