import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux';

const UnOrder = styled.ul`
    list-style: none;
    li{
        margin-top: 10px;
    }
    input{
        margin-right: 10px;
    }
`;

const ActiveList = (props) => {
    // console.log("this is execured hre",props.tasks)
    return (
        <UnOrder>
            {props.tasks && props.tasks.map((task) => (
                <li
                style={{ textDecoration: task.textDecoration }}>
                <input
                        type='checkbox'
                        checked={task.checked} key={task.id}/>
                    {task.task}
            </li>
            ))}
        </UnOrder>
    )
}

const mapStateToProps = state => ({
    tasks: state.task.active_task
}
)

export default connect(mapStateToProps)(ActiveList)
