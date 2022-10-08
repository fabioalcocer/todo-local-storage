function VisibilityControl ({
  isChecked,
  showCompleted,
  setShowCompleted,
  cleanTasks
}) {
  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete?')) {
      cleanTasks()
    }
  }

  return (
    <div className='d-flex justify-content-between align-items-center  bg-secondary text-white text-center p-2 border-secondary'>
      <div className='form-check form-switch'>
        <input
          className='form-check-input'
          checked={isChecked}
          type='checkbox'
          onChange={(e) => setShowCompleted(!showCompleted)}
        />
      </div>
      <label> Show Tasks Done</label>

      <button className='btn btn-danger btn-sm' onClick={handleDelete}>Clear</button>
    </div>
  )
}

export default VisibilityControl
