import { useStore } from 'effector-react'
//import { Task } from 'components/models/task/types'
import { $taskText, setTask, taskWillBePosted } from 'components/models/task'

interface Task {
  task: Task
}

export default function InputTask({ task }: Task) {
  const taskText = useStore($taskText)

  return (
    <div className="flex  justify-center">
      <input
        value={taskText}
        onChange={(e) => setTask(e.target.value)}
        className="bg-pink-100 px-5 py-2 placeholder-pink-400 focus:outline-none  rounded-l-full"
        placeholder="Enter text"
      />
      <button
        className="bg-pink-400 text-pink-100  px-5 rounded-r-full"
        onClick={() => taskWillBePosted(task)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </div>
  )
}
