import { createEvent, createStore } from 'effector'
import { createGate } from 'effector-react'
import { Task } from './types'

export const $task = createStore<Task[]>([])
export const taskWillBePosted = createEvent<string>()
export const setTask = createEvent<string>()

//export const TaskGate = createGate<React.RefObject<HTMLTextAreaElement>>()
