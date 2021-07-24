import React from 'react'
import styled from 'styled-components'
import ActiveForm from '../Active/ActiveForm';
import Completed from '../Completed/Completed';
import Active from '../Active/Active';


const UnOrder = styled.ul`
    list-style:none;
    input{
        margin-right: 10px;
    }
    li{
        padding:5px 0px;
    }
`;

const All = () => {
    return (
        <>
            <Active />
            <Completed />
        </>
    )
}


export default All
