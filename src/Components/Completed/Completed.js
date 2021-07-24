import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';
import { UndoneTask } from '../../redux/Actions/taskAction';
import Delete from '../../Images/delete.svg';
import DeleteWhite from '../../Images/deleteWhite.svg'
import { RemoveTask } from '../../redux/Actions/taskAction';
import { RemoveAllTasks } from '../../redux/Actions/taskAction';

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

const Button = styled.a`
    display: flex;
    border: none;
    float: right;
    color: whitesmoke;
    margin-top: 10px;
    padding: 5px 10px;
    font-weight: bold;
    font-size: 14px;
    justify-content: flex-end;
    background-color:#EB5757;
    width: max-content;
    cursor: pointer;
    span{
        align-self: center;
        
    }

;
`;


const Completed = (props) => {

    const handleClickListerner = (task) => {
        props.UndoneTask(task)
    }

    const clickRemoveListener = (id) => {
        props.RemoveTask(id)
    }
    const removeAllTasks = () => {
        props.RemoveAllTasks()
    }

    return (
        <>
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
           {props.tasks.length === 0 ? null :  <Button onClick={()=>removeAllTasks()}><img src={DeleteWhite} alt='delte icon'/> <span> Delete All</span></Button>}
        </>
    )
}

const mapStateToProps = state => (
    {
        tasks: state.task.completed_tasks
    }
)

export default connect(mapStateToProps, {UndoneTask, RemoveTask, RemoveAllTasks})(Completed)
