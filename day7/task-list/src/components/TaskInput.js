import React, { useState } from 'react'

export default function TaskInput(props) {

    const [taskName, setTaskName] = useState('')

    function onTaskFormSubmit(e) {
        e.preventDefault();
        props.onCreateTask(taskName);

        setTaskName('');

    }
    return (
        <div>
            <form onSubmit={onTaskFormSubmit}>
                <div className="input-group mb-3">
                    <input
                        value={taskName}
                        onChange = {(e) => setTaskName(e.target.value)}
                         type="text"
                         className="form-control"
                         placeholder="Task"
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                    >
                        +
                    </button>
                </div>
            </form>
            
        </div>

    )
}