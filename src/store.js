import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {todoReducer,addTaskReducer} from './Reducers/todoListReducer'

const reducer = combineReducers({
    todoList:todoReducer,
    addTask:addTaskReducer
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store