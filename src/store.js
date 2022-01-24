import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {todoReducer,addTaskReducer,deleteReducer,updateTaskReducer, getTaskIdReducer} from './Reducers/todoListReducer'

const reducer = combineReducers({
    todoList:todoReducer,
    addTask:addTaskReducer,
    deleteTask:deleteReducer,
    updateTask:updateTaskReducer,
    taskDetails: getTaskIdReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store