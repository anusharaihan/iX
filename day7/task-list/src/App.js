import React, { useState } from 'react'

// import the bootstrap styles from node_modules folder
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import'./App.css'

// import the Task class
import { Task } from './models/task'

// import task components from the components folder
import TaskInput from './components/TaskInput'
import TaskTable from './components/TaskTable'

export default function App() {

  const [tasks, setTasks] = useState([
    new Task(1, 'Task 1', false),
    new Task(2, 'Task 2', false)
  ])

  function onCreateTask(taskName) {
    // create a new Task
    const task = new Task(
      new Date().getTime(), //returns number of ms since 1/1/1970, which will be a unique identifier
      taskName,
      false
    )

    //add the task to the task list
    setTasks([...tasks, task]); // "...tasks" adds everything in "tasks" to this new array. ", task" adds the new task to the array
  }

  function onToggleComplete(taskId) {
    console.log('App.js', taskId);
    // find task to toggle

    // toggle complete value

    // update the task list state
  }

  function onRemoveTask(taskId) {
    // filter task list to remove task

    // update task list

  }


  return (
    <div className='container my-4'>
      <div className='card card-body text-center'>
        <h1>TaskList</h1>
        <hr></hr>
        <p>Our simple task list</p>
        <TaskInput onCreateTask = {onCreateTask}/>
        <TaskTable
          onToggleComplete = {onToggleComplete}
          tasks = {tasks} />
      </div> 
    </div>
  )
}
