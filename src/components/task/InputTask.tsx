import { useGate, useStore } from 'effector-react'
import {
  $taskText,
  FormGate,
  FormGateUpdate,
  setTask,
  setUpdateText,
  $taskTextUpdate,
} from 'models/task'
import ButtonTask from './ButtonTask'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ButtonUpdateTask from './ButtomUpdateTask'
import { useRef } from 'react'

export default function InputTask() {
  const taskText = useStore($taskText)
  const taskTextUpdate = useStore($taskTextUpdate)

  const textareaRef = useRef<HTMLInputElement>(null)
  useGate(FormGate, textareaRef)

  const textareaUpdateRef = useRef<HTMLInputElement>(null)
  useGate(FormGateUpdate, textareaUpdateRef)

  return (
    <>
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
      <div className="flex p-4 justify-center">
        <input
          value={taskTextUpdate}
          ref={textareaUpdateRef}
          onChange={(e) => setUpdateText(e.target.value)}
          className="bg-pink-100 px-5 py-2 placeholder-pink-400 focus:outline-none  rounded-l-full"
          placeholder="Update text"
        />
        <ButtonUpdateTask />
      </div>
    </>
  )
}
