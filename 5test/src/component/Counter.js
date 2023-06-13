import React, { useState } from 'react';
const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h3 data-testid="cnt">{counter}</h3>
            <button data-testid="btn"
                onClick={() => setCounter(counter + 1)}>Increment</button>
            <hr />
            {/* for input we always target for value like we used in past e.target.value: to refer content of input */}
            <input type="text" data-testid="input" defaultValue="10" />
        </div>
    )
}
export default Counter;
