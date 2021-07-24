import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { UndoneTask } from '../../redux/Actions/taskAction';
import Delete from '../../Images/delete.svg'
import { RemoveTask } from '../../redux/Actions/taskAction';

const WrapperUl = styled.ul`
    list-style: none;
    li{
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        img{
            cursor: pointer;
        }
    }
    input{
        margin-right: 10px;
    }
`;


const Completed = (props) => {

    const handleClickListerner = (task) => {
        props.UndoneTask(task)
    }

    const clickRemoveListener = (id) => {
        props.RemoveTask(id)
    }

    return (
        <WrapperUl>

            {props.tasks && props.tasks.map((task) => (
                <li key={ task.id }
                    style={{ textDecoration: task.textDecoration }}>
                    <div>
                        <input
                            type='checkbox'
                            checked={task.checked}
                            readOnly onClick={() => handleClickListerner(task)} />
                            {task.task}
                    </div>
                    <div>
                        <img src={Delete} alt='delete icon' onClick={() => clickRemoveListener(task.id) }/>
                    </div>
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

export default connect(mapStateToProps, {UndoneTask, RemoveTask})(Completed)
