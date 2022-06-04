import { Task } from 'models/task/types'

interface Props {
  task: Task
}

export default ({ task }: Props) => {
  const { text, isDone } = task
  let className = 'px-2 py-2 text-left'

  className = isDone ? `${className}   line-through ` : className

  return <td className={className}>{text}</td>
}
