/* eslint-disable no-undef */
import { useState, useEffect } from 'react'
import './App.css'
import TaskCreator from './components/TaskCreator'
import TasksTable from './components/TasksTable'

function App () {
  const [tasksItems, setTasksItems] = useState([
    { name: 'mi primera tarea', done: true }
  ])

  const createNewTask = (taskName) => {
    if (!tasksItems.find(task => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map(t => (t.name === task.name) ? { ...t, done: !t.done } : t)
    )
  }

  useEffect(() => {
    const data = localStorage.getItem('tasks')
    if (data) {
      setTasksItems(JSON.parse(data))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
  }, [tasksItems])

  return (
    <div className='App'>
      <TaskCreator createNewTask={createNewTask} />
      <TasksTable tasks={tasksItems} toggleTask={toggleTask} />
    </div>
  )
}

export default App
