import React from 'react'

const PerInfo = (props) => {
    return (
        <div>

            <div class="test">
                {/* {JSON.stringify(props)} */}
                <h2> Name : {props.name}</h2>
                <h2> Age :{props.age}</h2>
            </div>

        </div>
    )
}

export default PerInfo
