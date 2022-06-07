import React, { useState } from 'react'

export default function Counter(props) {
    const[count, setCount] = useState(props.count);

    function increaseCount() {
        setCount(count+1);
    }

    return (
        <div className='m-4'>
            <p>the count is: {count} </p>
            <button onClick={increaseCount}>
                Click to increase count
            </button>
        </div>
    )
}