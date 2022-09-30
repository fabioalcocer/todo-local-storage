function TaskRow ({ task, toggleTask }) {
  return (
    <tr>
      <td>{task.name}</td>
      <input
        type='checkbox'
        name=''
        id=''
        checked={task.done}
        onChange={() => toggleTask(task)}
      />
    </tr>
  )
}

export default TaskRow
