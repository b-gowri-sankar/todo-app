import { combineReducers } from "redux";

import taskReducer from './Reducers/taskReducer';

const rootReducer = combineReducers({

    task: taskReducer

})


export default rootReducer;