import { useStore } from 'effector-react'
import { $taskText, setTask } from 'models/task'
import ButtonTask from './ButtonTask'

export default function InputTask() {
  const taskText = useStore($taskText)

  return (
    <div className="flex  justify-center">
      <input
        value={taskText}
        onChange={(e) => setTask(e.target.value)}
        className="bg-pink-100 px-5 py-2 placeholder-pink-400 focus:outline-none  rounded-l-full"
        placeholder="Enter text"
      />
      <ButtonTask />
    </div>
  )
}
