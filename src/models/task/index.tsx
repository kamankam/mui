import { createEvent, createStore, restore } from 'effector'
import { Task } from './types'

//add tasks
export const $tasks = createStore<Task[]>([])
export const setTask = createEvent<string>()
export const $taskText = restore(setTask, '')
export const taskWillBePosted = createEvent()
export const taskWillBeDeleted = createEvent<string>()

//for DoneLine
export const taskWillBeDone = createEvent<string>()

//Calendar
export const setCalendarVisible = createEvent<boolean>()
export const $isCalendarVisible = restore(setCalendarVisible, false)

//update tasks
export const taskWillBeUpdate = createEvent<Task>()
//export const $updatedPost = createStore<Task>()
