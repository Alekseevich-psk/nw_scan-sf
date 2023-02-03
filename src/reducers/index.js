import { combineReducers } from "redux";
import authStore from './auth';
import taskStore from './task';

export default combineReducers({
    authStore, 
    taskStore
})