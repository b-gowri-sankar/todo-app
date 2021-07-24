import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { UndoneTask } from '../../redux/Actions/taskAction';

const WrapperUl = styled.ul`
    list-style: none;
    li{
        margin-top: 10px;
    }
    input{
        margin-right: 10px;
    }
`;


const Completed = (props) => {

    const handleClickListerner = (task) => {
        props.UndoneTask(task)
    }

    return (
        <WrapperUl>

            {props.tasks && props.tasks.map((task) => (
                <li key={ task.id }
                    style={{ textDecoration: task.textDecoration }}>
                    <input
                        type='checkbox'
                        checked={task.checked}
                        readOnly onClick={ () => handleClickListerner(task) }/>
                    {task.task}
                </li>
            ))}
        </WrapperUl>
    )
}

const mapStateToProps = state => (
    {
        tasks: state.task.completed_tasks
    }
)

export default connect(mapStateToProps, {UndoneTask})(Completed)
