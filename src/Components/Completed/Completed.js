import React from 'react'
import styled from 'styled-components'

const WrapperUl = styled.ul`
    list-style: none;
    li{
        margin-top: 10px;
    }
    input{
        margin-right: 10px;
    }
`;


const Completed = () => {
    return (
        <WrapperUl>
            <li
                style={{ textDecoration: 'line-through' }}>
                <input
                    type='checkbox'
                    checked={true} />
                this is first
            </li>
            <li
                style={{ textDecoration: 'line-through' }}>
                <input
                    type='checkbox'
                    checked={true} />
                this is first
            </li>

        </WrapperUl>
    )
}

export default Completed
