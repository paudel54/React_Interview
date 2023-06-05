import React from 'react'

const PerInfo = (props) => {
    // Object Destructuring
    // Props are immutable and concept of state came to make it more dynamic. 
    // props are attribute passed from components in form of object literals and are later destructured to access 
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
