import { Task } from 'models/task/types'

interface Props {
  task: Task
}

export default function CompleteTask({ task }: Props) {
  const { text, id, isDone } = task

  return (
    <div>
      <h1 className="text-lg font-bold mb-0 text-gray-800 leading-none">
        Todo's
      </h1>
      <h2 className="text-xs mt-0 inline-block ">
        2 todos pending, 1 completed
      </h2>
    </div>
  )
}
