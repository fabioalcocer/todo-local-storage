function TaskRow ({ task, toggleTask }) {
  return (
    <tr>
      <td>{task.name}
        <input
          type='checkbox'
          name=''
          id=''
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  )
}

export default TaskRow
