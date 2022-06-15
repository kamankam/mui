import { $isCalendarVisible, toggleCalendarVisible } from 'models/task/index'
import { combine, sample } from 'effector'
import {
  $tasks,
  $taskText,
  taskWillBeDone,
  taskWillBePosted,
  taskWillBeDeleted,
  taskUpdate,
  $updatedTask,
} from './index'
import { v4 as uuidv4 } from 'uuid'
import { FormGate } from '.'

//публикуем таск
sample({
  clock: taskWillBePosted,
  source: combine($tasks, $taskText),
  filter: ([_, taskText]) => taskText !== '',
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

// sample({
//   clock: taskWillBePosted,
//   source: $taskText,
//   filter: (taskText) => taskText !== ' ',
//   target: $taskText,
// })

//удаление таск
sample({
  clock: taskWillBeDeleted,
  source: $tasks,
  fn: (tasks, postIdToDelete) =>
    tasks.filter(({ id }) => postIdToDelete !== id),
  target: $tasks,
})

// Добавление текста из поле ввода, связь с ref
sample({
  clock: $updatedTask,
  source: FormGate.state,
  filter: (updatedTask) => !!updatedTask,
  fn: (textareaRef) => {
    textareaRef.current?.focus()
  },
})

//обновление поста

sample({
  clock: taskUpdate,
  fn: (postToTextarea) => {
    console.log(postToTextarea.text)
    return postToTextarea.text
  },
  target: $taskText,
})

// todo: moveto calendar model
sample({
  clock: toggleCalendarVisible,
  source: $isCalendarVisible,
  fn: (isCalendarVisible) => !isCalendarVisible,
  target: $isCalendarVisible,
})
