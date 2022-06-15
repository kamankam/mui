import { useGate, useStore } from 'effector-react'
import { $taskText, FormGate, setTask } from 'models/task'
import ButtonTask from './ButtonTask'
import { useRef } from 'react'

export default function InputTask() {
  const taskText = useStore($taskText)

  const textareaRef = useRef<HTMLInputElement>(null)
  useGate(FormGate, textareaRef)

  return (
    <div className="flex  justify-center">
      <input
        ref={textareaRef}
        value={taskText}
        onChange={(e) => setTask(e.target.value)}
        className="bg-pink-100 px-5 py-2 placeholder-pink-400 focus:outline-none  rounded-l-full"
        placeholder="Enter text"
      />
      <ButtonTask />
    </div>
  )
}
