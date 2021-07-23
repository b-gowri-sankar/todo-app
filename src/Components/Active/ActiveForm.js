import React from 'react'
import styled from 'styled-components'

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

const ActiveForm = () => {
    return (
        <Container>
            <input type='text' id='task' value='' placeholder='add something' />
            <button>Add</button>
        </Container>
    )
}

export default ActiveForm
