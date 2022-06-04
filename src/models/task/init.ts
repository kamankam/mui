import { combine, sample } from 'effector'
import { $tasks, $taskText, taskWillBeDone, taskWillBePosted } from './index'
import { v4 as uuidv4 } from 'uuid'

//публикуем таск
sample({
  clock: taskWillBePosted,
  source: combine($tasks, $taskText),
  fn: ([tasks, new_task]) => [
    ...tasks,
    { text: new_task, id: uuidv4(), isDone: false },
  ],

  target: $tasks,
})

//зануляем поля ввода после публикации
sample({
  clock: [taskWillBePosted],
  fn: () => '',
  target: $taskText,
})

//меняем статус isDone на true для зачеркивания таска
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
    return [...tasks]
  },

  target: $tasks,
})
