import React from 'react'
import './Demo.css';

export default function Demo(props) {
    return (
        <div>
            <div className={props.name==='Jacques' ? 'green' : 'blue'}> {/* the ? and : is a ternary operator */}
                {props.name} {props.surname}
            </div>
        </div>
    )
}