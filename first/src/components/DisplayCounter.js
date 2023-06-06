import React from 'react'

const DisplayCounter = (props) => {
    console.log("Display Counter is rendered");
    return (
        <div>
            {JSON.stringify(props)}
            <h2>Counter: {props.counter}</h2>
        </div>
    )
}

export default React.memo(DisplayCounter);
