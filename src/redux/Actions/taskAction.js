import { ADDTASK } from "../types";
import { v4 as uuidv4 } from 'uuid';

export const AddTask = (task) => disptach => {
    const id=uuidv4()
    disptach({
        type: ADDTASK,
        payload:{...task, id}
    })
}