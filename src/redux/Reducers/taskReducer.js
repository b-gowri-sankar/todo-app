import { ADDTASK, COMPLETE_TASK, UNDONE_TASK } from "../types";


 const initState = {
    completed_tasks: [],
    active_tasks: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADDTASK:
            return {
                ...state,
                active_tasks: [
                    action.payload,
                    ...state.active_tasks
                ]
            }
        case COMPLETE_TASK:            
            return {
                ...state,
                completed_tasks: [
                    action.payload,
                    ...state.completed_tasks
                ],
                active_tasks: [
                    ...state.active_tasks.filter(task => task.id !== action.payload.id)
                ]
            }
        case UNDONE_TASK:
            return {
                ...state,
                active_tasks: [
                    action.payload,
                    ...state.active_tasks
                ],
                completed_tasks: [
                    ...state.completed_tasks.filter(task => task.id !== action.payload.id)
                ]
            }
        default:
            return state;
    }
}

export default reducer;