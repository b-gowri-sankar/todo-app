import React from 'react'
import styled from 'styled-components'

const UnOrder = styled.ul`
    list-style: none;
    li{
        margin-top: 10px;
    }
    input{
        margin-right: 10px;
    }
`;

const ActiveList = () => {
    return (
        <UnOrder>
            <li
                style={{ textDecoration: 'none' }}>
                <input
                    type='checkbox'
                    checked={false} />
                this is second
            </li>
            <li
                style={{ textDecoration: 'none' }}>
                <input
                    type='checkbox'
                    checked={false} />
                this is second
            </li>
        </UnOrder>
    )
}

export default ActiveList
