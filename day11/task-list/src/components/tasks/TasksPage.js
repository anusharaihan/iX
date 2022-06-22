import React, {useState, useEffect} from 'react'

// import the Task class
import { Task } from '../../models/task'

// import task components from the components folder
import TaskInput from './TaskInput'
import TaskTable from './TaskTable'

//import the instance of our task service
import TaskService from '../../services/task.service'

export default function TasksPage() {

    const [tasks, setTasks] = useState([]);
        useEffect(() => {
        fetchTasks();
    }, []);
  
    async function fetchTasks() {
        const tasks = await TaskService.fetchTasks();
        setTasks(tasks);
    }

    async function onCreateTask(taskName) {
        // create a new Task
        const task = await TaskService.createTask(new Task(
            null,
            taskName,
            false
        ))

        //add the task to the task list
        setTasks([...tasks, task]); // "...tasks" adds everything in "tasks" to this new array. ", task" adds the new task to the array
    }

    async function onToggleComplete(taskId) {
        // find task to toggle
        const task = tasks.find((task) => task.id === taskId);

        // toggle complete value
        task.complete = !task.complete;

        //update the task on firebase
        await TaskService.updateTask(task);

        // update the task list state
        setTasks(tasks.map((t) => {
        return t.id === taskId ? task: t
        }));
    }

    async function onRemoveTask(taskId) {
        //delete the task on firebase
        await TaskService.deleteTask(taskId);
        // filter task list to remove task
        setTasks(tasks.filter((task) => task.id !== taskId));
    }

    return (
        <div>TasksPage
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
         </div>    
  )
        
}