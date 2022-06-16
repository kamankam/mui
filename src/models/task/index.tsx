import { createEvent, createStore, restore } from 'effector'
import { Task } from './types'
import { createGate } from 'effector-react'

//add tasks
export const $tasks = createStore<Task[]>([])
export const setTask = createEvent<string>()
export const setUpdateText = createEvent<string>()
export const $taskText = restore(setTask, '')
export const $taskTextUpdate = restore(setUpdateText, '')

export const taskWillBePosted = createEvent()
export const taskWillBeDeleted = createEvent<string>()
export const taskWillBeUpdate = createEvent()

//for DoneLine
export const taskWillBeDone = createEvent<string>()

//Calendar
export const toggleCalendarVisible = createEvent()
export const $isCalendarVisible = createStore(false)

// для обновления поста, обработчик на кнопку "+"
export const setTaskText = createEvent<string>()

//update tasks

export const taskUpdate = createEvent<Task>()
export const $updatedTask = createStore<Task | null>(null)

// Gate for post text in input
export const FormGate = createGate<React.RefObject<HTMLInputElement>>()

// Gate for update text in input
export const FormGateUpdate = createGate<React.RefObject<HTMLInputElement>>()
