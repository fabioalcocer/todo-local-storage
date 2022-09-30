import TaskRow from './TaskRow'

function TasksTable ({ tasks, toggleTask }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task) => (
          <TaskRow
            key={task.name}
            task={task}
            toggleTask={toggleTask}
          />
        ))}
      </tbody>
    </table>
  )
}

export default TasksTable
