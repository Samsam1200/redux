import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';
import {ServicesReducer} from './reducer.js'
const all = combineReducers({
    userStore:ServicesReducer
})

const store = createStore(all,applyMiddleware(thunk))

export default store