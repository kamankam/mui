import { Task } from 'models/task/types'
import { combine, sample } from 'effector'
import { $tasks, $taskText, taskWillBeDone, taskWillBePosted } from './index'
import { find, identity } from 'lodash'

sample({
  clock: taskWillBePosted,
  source: combine($tasks, $taskText),
  fn: ([tasks, new_task]) => [
    ...tasks,
    { text: new_task, id: 'todo: generate id', isDone: false },
  ],
  target: $tasks,
})

sample({
  clock: taskWillBeDone,
  source: $tasks,
  fn: (tasks, taskIdToChangeStatus) => {
    tasks.forEach((obj) => {
      if (obj.id === taskIdToChangeStatus) {
        obj.isDone = true
      }
    })
    console.log(tasks)
    return tasks
  },

  target: $tasks,
})
