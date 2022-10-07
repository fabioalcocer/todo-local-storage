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
    <div>
      <input
        checked={isChecked}
        type='checkbox'
        onChange={(e) => setShowCompleted(!showCompleted)}
      />
      <label> Show Tasks Done</label>

      <button onClick={handleDelete}>Clear</button>
    </div>
  )
}

export default VisibilityControl
