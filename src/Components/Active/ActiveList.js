import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { CompleteTask } from '../../redux/Actions/taskAction';

const UnOrder = styled.ul`
    list-style: none;
    li{
        margin-top: 10px;
    }
    input{
        margin-right: 10px;
        cursor: pointer;
    }
`;

const ActiveList = (props) => {

    const listClickListener = (task) => {
        props.CompleteTask(task)
    }

    return (
        <UnOrder>
            {props.tasks && props.tasks.map((task) => (
                <li key={task.id}
                style={{ textDecoration: task.textDecoration }}>
                <input
                        type='checkbox'
                        checked={task.checked} readOnly onClick={ ()=> listClickListener(task)}/>
                    {task.task}
            </li>
            ))}
        </UnOrder>
    )
}

const mapStateToProps = state => ({
    tasks: state.task.active_tasks
}
)

export default connect(mapStateToProps, { CompleteTask})(ActiveList)
