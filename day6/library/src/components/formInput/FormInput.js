import React, {useState} from 'react'

export default function FormInput(props) {
    const[inputType, setInputType] = useState(props.inputType);

    return (
        <div className="mb-3">
            <label className="form-label">
                    {props.inputType}
            </label>
            <input id={props.inputType} type="text" className="form-control"/>
        </div>
    )
}