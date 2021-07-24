import React from 'react'
import styled from 'styled-components'
import ActiveForm from '../Active/ActiveForm';

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
            <ActiveForm />
            <UnOrder>
                <li style={{textDecoration:'line-through'}}><input type='checkbox' checked={ true} readOnly/>this is first</li>
                <li
                    style={{ textDecoration: 'none' }}>
                    <input
                        type='checkbox'
                        checked={false} readOnly/>
                    this is second
                </li>
            </UnOrder>
        </>
    )
}

export default All
