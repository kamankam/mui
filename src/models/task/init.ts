import { taskWillBePosted, $taskText, $tasks } from './index'
import { combine, sample } from 'effector'

sample({
  clock: taskWillBePosted,
  source: combine($tasks, $taskText),
  fn: ([tasks, new_task]) => [
    ...tasks,
    { text: new_task, id: 'todo: generate id' },
  ],
  target: $tasks,
})
