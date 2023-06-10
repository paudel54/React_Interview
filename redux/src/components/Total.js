import React from 'react'
import { useSelector } from 'react-redux';
const Total = () => {
    // accessing global store value form component. 
    const total = useSelector((state) => state.total);
    return (
        <div className='customDiv'>
            <h3>This is Total Component</h3>
            <hr />
            <h2>Total: {total}</h2>
        </div>
    )
}

export default Total
