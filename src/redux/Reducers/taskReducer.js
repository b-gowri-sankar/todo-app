import { ADDTASK } from "../types";


 const initState = {
    tasks: [],
    completed_task: [],
    active_task: []
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case ADDTASK:
            // console.log(action.payload)
            // const tasks = tasks.unshift(action.payload);
            // const active_task.unshift(action.payload);
            
            return {
                ...state,
                tasks: [action.payload,
                    ...state.tasks
                ],
                active_task: [
                    action.payload,
                    ...state.active_task
                ]
            }
        default:
            return state;
    }
}

export default reducer;