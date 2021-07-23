import React from 'react'
import styled from 'styled-components'

const UnOrder = styled.ul`
    
`;

const All = () => {
    return (
        <UnOrder>
            <li style={{textDecoration:'line-through'}}><input type='checkbox' checked={ true}/>this is first</li>
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

export default All
