import TaskRow from './TaskRow'

function TasksTable ({ tasks, toggleTask, showCompleted = false }) {
  const taskTableRows = (doneValue) => {
    console.log(doneValue)
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow
          key={task.name}
          task={task}
          toggleTask={toggleTask}
        />
      ))
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows(showCompleted)}</tbody>
    </table>
  )
}

export default TasksTable
