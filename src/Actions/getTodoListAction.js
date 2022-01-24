import axios from "axios";
import {
  GET_TASKS,
  DELETE_TASKS,
  ADD_TASKS,
  UPDATE_TASKS,
  GET_SINGLE_TASK,
} from "../Constants/constantTypes";

export const getTasks = () => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:5000/task`);

  console.log(data);

  dispatch({
    type: GET_TASKS,
    payload: data,
  });
};

export const deleteTask = (id) => async (dispatch) => {
  await axios.delete(`http://localhost:5000/task/${id}`);

  dispatch({
    type: DELETE_TASKS,
  });
};

export const addTask = (name) => async (dispatch) => {
  const data = await axios.post(`http://localhost:5000/task/`, name);
  console.log(data);
  dispatch({
    type: ADD_TASKS,
    payload: data,
  });
};

export const getSingleTask = (id) => async (dispatch) => {
  const { data } = await axios.get(`http://localhost:5000/task/${id}`);

  dispatch({
    type: GET_SINGLE_TASK,
    payload: data,
  });
};

export const updateTask = (id, newUpdate) => async (dispatch) => {
  const { data } = await axios.put(`http://localhost:5000/task/${id}`, newUpdate);
  console.log(data);
  dispatch({
    type: UPDATE_TASKS,
    payload: data,
  });
};
