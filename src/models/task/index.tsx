import { createEvent, createStore, restore } from 'effector'
import { Task } from './types'

export const $tasks = createStore<Task[]>([
  //   { id: 'some id', text: 'hey Katya' },
])
export const setTask = createEvent<string>()
export const $taskText = restore(setTask, '')
export const taskWillBePosted = createEvent()
