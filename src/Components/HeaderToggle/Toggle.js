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
        border-bottom: 2px solid #2F80ED;
        border-radius: 0px;
        cursor: pointer;
    }
`;

const Toggle = () => {

    const [tog, setTog] = React.useState({
        allTog: true,
        activeTog: false,
        completedTog: false,
    })

    return (
        <>
            <Wrapper>
                <h1>#todo</h1>
                <ToggleDiv>
                    <p
                        onClick={
                            () => (
                                setTog({ ...tog, allTog: true, activeTog: false, completedTog: false })
                            )}>All</p>
                    <p onClick={
                            () => (
                                setTog({ ...tog, allTog: false, activeTog: true, completedTog: false })
                            )}>Active</p>
                    <p onClick={
                            () => (
                                setTog({ ...tog, allTog: false, activeTog: false, completedTog: true })
                            )}> Competed </p>
                </ToggleDiv>
            </Wrapper>
            {tog.allTog && <All/>}
            {tog.activeTog && <Active />}
            {tog.completedTog && <Completed />}
        </>
    )
}

export default Toggle
