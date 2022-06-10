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

  const [tasks, setTasks] = useState([])

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
    // find task to toggle
    const task = tasks.find((task) => task.id === taskId);

    // toggle complete value
    task.complete = !task.complete;

    // update the task list state
    setTasks(tasks.map((t) => {
      return t.id === taskId ? task: t
    }));
  }

  function onRemoveTask(taskId) {
    // filter task list to remove task
    setTasks(tasks.filter((task) => task.id !== taskId));
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
          onRemoveTask= {onRemoveTask}
          tasks = {tasks} />
      </div> 
    </div>
  )
}
