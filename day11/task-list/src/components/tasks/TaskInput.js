import React, { useState } from 'react'
import Spinner from '../common/Spinner'
export default function TaskInput(props) {

    const [taskName, setTaskName] = useState('')
    const [saving, setSaving] = useState(false);


    async function onTaskFormSubmit(e) {
        e.preventDefault();
        setSaving(true); //start showing spinner
        await props.onCreateTask(taskName);
        setSaving(false); //stop showing spinner

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
                        disabled={saving}
                    >
                        {
                            saving ?
                            <Spinner />
                            :
                            "+"
                        }
                    </button>
                </div>
            </form>
            
        </div>

    )
}