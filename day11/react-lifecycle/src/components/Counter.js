import React, {useState, useEffect} from 'react'

export default function Counter() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        console.log('count 1 changed');

        return () => {
            console.log('unmount');
        };
    }, [count1])

  return (
    <div>
        <div>
            Count 1 is {count1}
            <button onClick={() => setCount1(count1+1)}>
                Inc Count 1
            </button>
        </div>
        <div>
            Count 2 is {count2}
            <button onClick={() => setCount2(count2+1)}>
                Inc Count 2
            </button>
        </div>
        
        
    </div>
  )
}
