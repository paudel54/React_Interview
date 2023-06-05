import React from 'react'

const PerInfo = (props) => {
    // Object Destructuring
    const { name, age } = props;
    return (
        <div>

            <div class="test">
                {JSON.stringify(props)}
                <h2> Name : {name}</h2>
                <h2> Age :{age}</h2>
            </div>

        </div>
    )
}

export default PerInfo
