import React, {useState, useEffect} from 'react'

export default function Clock() {

    const [date, setDate] =  useState(new Date());

    useEffect(() => {
        console.log('component did mount + component did update');
    });

    useEffect(() => {
        console.log('component did mount');
        const id = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            console.log('component did unmount');
            clearInterval(id);
        }

    }, []);

    return (
        <div>
            <h1>The time now is</h1>
            <h2>{date.toLocaleTimeString()}</h2>

        </div>
    )
}
