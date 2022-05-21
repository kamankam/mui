import { createEvent, createStore, restore } from 'effector'
import { Task } from './types'

export const $task = createStore<Task[]>([])
export const setTask = createEvent<string>()
export const $taskText = restore(setTask, '')
export const taskWillBePosted = createEvent<string>()
