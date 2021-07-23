import React from 'react'
import styled from 'styled-components'

const UnOrder = styled.ul`
    
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
