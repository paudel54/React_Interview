import React from 'react'

const DemoComponent = (props) => {
    return (
        <div>
            <p>Demo Component</p>
            {JSON.stringify(props)}
            <hr />
            <h2>Value :- {props.value}</h2>
            <h2>Date :- {props.date.toString()}</h2>
            <h3>String literals :- {props.lekh}</h3>
            <h1>{props.test.toString()}</h1>
        </div>
    )
}

export default DemoComponent
