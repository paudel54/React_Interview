import React from 'react'

const DisplayFlag = (props) => {
    console.log("Display FLag is Rendered!")
    return (
        <div>
            {JSON.stringify(props)}
            <h2>Flag: {props.flag.toString()}</h2>
        </div>
    )
}

export default React.memo(DisplayFlag);
