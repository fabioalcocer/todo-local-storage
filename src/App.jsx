/* eslint-disable no-undef */
import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskCreator from './components/TaskCreator'
import TasksTable from './components/TasksTable'
import VisibilityControl from './components/VisibilityControl'

function App () {
  const [tasksItems, setTasksItems] = useState([
    { name: 'mi primera tarea', done: true }
  ])

  const [showCompleted, setShowCompleted] = useState(false)

  const createNewTask = (taskName) => {
    if (!tasksItems.find((task) => task.name === taskName)) {
      setTasksItems([...tasksItems, { name: taskName, done: false }])
    }
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) =>
        t.name === task.name ? { ...t, done: !t.done } : t
      )
    )
  }

  const clearTasks = () => {
    setTasksItems(tasksItems.filter((task) => !task.done))
    setShowCompleted(false)
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
    <main className='bg-dark vh-100 text-white'>
      <div className='container col-md-4 offset-md-4 pt-4'>
        <TaskCreator createNewTask={createNewTask} />
        <TasksTable tasks={tasksItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          showCompleted={showCompleted}
          setShowCompleted={setShowCompleted}
          cleanTasks={clearTasks}
        />
        {showCompleted && (
          <TasksTable
            tasks={tasksItems}
            toggleTask={toggleTask}
            showCompleted={showCompleted}
          />
        )}
      </div>
    </main>
  )
}

export default App
