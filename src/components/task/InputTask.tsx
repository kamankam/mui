import { useGate, useStore } from 'effector-react'
import {
  $taskText,
  FormGate,
  FormGateUpdate,
  setTask,
  setUpdateText,
  $taskTextUpdate,
  $taskPendingUpdate,
} from 'models/task'
import ButtonTask from './ButtonTask'
import ButtonUpdateTask from './ButtomUpdateTask'
import { useRef } from 'react'

export default function InputTask() {
  return (
    <>
      <InputForTaskPost />
      <InputForTaskUpdate />
    </>
  )
}

function InputForTaskPost() {
  const taskText = useStore($taskText)

  const textareaRef = useRef<HTMLInputElement>(null)
  useGate(FormGate, textareaRef)
  const isTaskPendingUpdate = useStore($taskPendingUpdate)
  if (!isTaskPendingUpdate) return null
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

function InputForTaskUpdate() {
  const taskTextUpdate = useStore($taskTextUpdate)
  const textareaUpdateRef = useRef<HTMLInputElement>(null)
  useGate(FormGateUpdate, textareaUpdateRef)

  const isTaskPendingUpdate = useStore($taskPendingUpdate)
  if (!isTaskPendingUpdate) return null

  return (
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
  )
}
