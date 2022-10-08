import { useState } from 'react'

function TaskCreator ({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createNewTask(newTaskName)
    setNewTaskName('')
  }

  return (
    <form onSubmit={handleSubmit} className='my-2 row mx-auto justify-content-center'>
      <div className='col-8 col-lg-9 px-0'>
        <input
          type='text'
          placeholder='Enter a new task'
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='col-4 col-lg-3 mb-2 pe-0'>
        <button className='btn btn-primary btn-md w-100'>Save Task</button>
      </div>
    </form>
  )
}

export default TaskCreator
