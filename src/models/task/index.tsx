import { createEvent, createStore, restore } from 'effector'
import { Task } from './types'

export const $tasks = createStore<Task[]>([
  { id: 'id 1', text: 'hey Katya', isDone: false },
  { id: 'id 2', text: 'hey Katya', isDone: false },
  { id: 'id 3', text: 'hey Katya', isDone: false },
])
export const setTask = createEvent<string>()
export const $taskText = restore(setTask, '')
export const taskWillBePosted = createEvent()

//for DoneLine
export const taskWillBeDone = createEvent<string>()
