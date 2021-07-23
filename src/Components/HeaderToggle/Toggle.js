import React from 'react'
import styled from 'styled-components'
import Active from '../Active/Active';
import All from '../All/All';
import Completed from '../Completed/Completed';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    h1{
        display: grid;
        place-items: center;
        height: 20vh;
    }

    border-bottom: 1px solid grey;
    /* padding-bottom: 1em; */
`;

const ToggleDiv = styled.div`
    display: flex;
    justify-content: space-around;
    p{
        padding-bottom: 0.5em;
        border-bottom: 6px solid #2F80ED;
        border-radius: 6px;
        cursor: pointer;
    }
`;

const Toggle = () => {
    return (
        <>
            <Wrapper>
                <h1>#todo app</h1>
                <ToggleDiv>
                    <p>All</p>
                    <p>Active</p>
                    <p> Competed </p>
                </ToggleDiv>
            </Wrapper>
            <All />
            <Active />
            <Completed />
        </>
    )
}

export default Toggle
