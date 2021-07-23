import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { AddTask } from '../../redux/Actions/taskAction';

const Container = styled.form`
    margin-top: 10px;
    display: flex;
    input{
        width: 100%;
        padding: 10px;
        border:1px solid grey;
        border-radius: 10px;
        &:focus{
            outline: none;
        }
    }
    button{
        padding: 0px 20px;
        margin-left: 10px;
        border-radius: 10px;
        background-color: #2F80ED;
        border: none;
        color: white;
        cursor: pointer;
    }
`;

const ActiveForm = (props) => {

    const [Task, setTask] = React.useState({
        task: '',
        active: false,
        textDecoration: 'none',
        checked: false,
        
    });


    const submitClickListerner = (e) => {
        e.preventDefault();
        props.AddTask(Task)
    }
    return (
        <Container onSubmit={(e)=>submitClickListerner(e)}>
            <input
                type='text'
                id='task'
                value={Task.task}
                placeholder='add something'
                onChange={ (e) => setTask({...Task, task:e.target.value}) } required/> 
            <button>Add</button>
        </Container>
    )
}

export default connect(null, { AddTask })(ActiveForm);
