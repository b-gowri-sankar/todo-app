import { ADDTASK, COMPLETE_TASK, REMOVE_TASK, UNDONE_TASK } from "../types";
import { v4 as uuidv4 } from 'uuid';

export const AddTask = (task) => disptach => {
    const id=uuidv4()
    disptach({
        type: ADDTASK,
        payload:{...task, id}
    })
}

export const CompleteTask = (task) => dispatch => {
    
    dispatch({
        type: COMPLETE_TASK,
        payload:{...task, textDecoration: 'line-through',
        checked: true}
    })
}

export const UndoneTask = (task) => dispatch => {
    
    dispatch({
        type: UNDONE_TASK,
        payload:{ ...task, textDecoration: 'none', checked: false}
    })
}

export const RemoveTask = (id) => dispatch => {

    dispatch({
        type: REMOVE_TASK,
        payload:id
    })
}