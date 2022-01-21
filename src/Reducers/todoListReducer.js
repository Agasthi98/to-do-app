import { GET_TASKS, DELETE_TASKS, ADD_TASKS } from "../Constants/constantTypes";

export const todoReducer = (state = { tasks: [] }, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        tasks: action.payload,
        loading: false,
      };
    case DELETE_TASKS:
      return {
        success: true,
        loading: false,
      };
    default:
      return state;
  }
};


export const addTaskReducer = (state= {}, action) => {
  switch (action.type){
    case ADD_TASKS:
      return {
        success: true,
        loading: false,
      };
      default:
        return state;
  }
}