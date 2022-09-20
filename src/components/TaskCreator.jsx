import { useState } from 'react'

function TaskCreator () {
  const [newTaskName, setNewTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // eslint-disable-next-line no-undef
    localStorage.setItem('task', newTaskName)
    setNewTaskName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter a new task'
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button>Save Task</button>
    </form>
  )
}

export default TaskCreator
