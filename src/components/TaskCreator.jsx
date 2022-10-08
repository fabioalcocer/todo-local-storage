import { useState } from 'react'

function TaskCreator ({ createNewTask }) {
  const [newTaskName, setNewTaskName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    createNewTask(newTaskName)
    setNewTaskName('')
  }

  return (
    <form onSubmit={handleSubmit} className='my-2 row w-100 mx-0 pl-0'>
      <div className='col-9 px-0'>
        <input
          type='text'
          placeholder='Enter a new task'
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          className='form-control'
        />
      </div>
      <div className='col-3 mb-2 ps-4 pe-0'>
        <button className='btn btn-primary btn-md'>Save Task</button>
      </div>
    </form>
  )
}

export default TaskCreator
