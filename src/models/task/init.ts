import { $isCalendarVisible, toggleCalendarVisible } from 'models/task/index'
import { combine, sample } from 'effector'
import { chain } from 'lodash'
import {
  $tasks,
  $taskText,
  taskWillBeDone,
  taskWillBePosted,
  taskWillBeDeleted,
  taskUpdate,
  $updatedTask,
  $taskTextUpdate,
  taskWillBeUpdate,
  $taskPendingUpdate,
} from './index'
import { v4 as uuidv4 } from 'uuid'
import { FormGate } from '.'

//публикуем таск и фильтруем пустые строки
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

//удаление таск
sample({
  clock: taskWillBeDeleted,
  source: $tasks,
  fn: (tasks, postIdToDelete) =>
    tasks.filter(({ id }) => postIdToDelete !== id),
  target: $tasks,
})

// Добавление текста из поле ввода, связь с ref
// sample({
//   clock: $updatedTask,
//   source: FormGate.state,
//   filter: (updatedTask) => !!updatedTask,
//   fn: (textareaRef) => {
//     textareaRef.current?.focus()
//   },
// })

// Добавление текста из поле ввода, связь с ref
sample({
  clock: $updatedTask,
  source: FormGate.state,
  filter: (updatedTask) => !!updatedTask,
  fn: (textareaUpdateRef) => {
    textareaUpdateRef.current?.focus()
  },
})

//извлекаем таск из опубликованного обратно в область инпута в стор $taskTextUpdate
sample({
  clock: taskUpdate,
  fn: (postToTextarea) => {
    console.log(postToTextarea.text)
    return postToTextarea.text
  },
  target: $taskTextUpdate,
})

// Запоминаем пост для обновления
sample({
  clock: taskUpdate,
  target: $updatedTask,
})

//task pending managment

sample({
  clock: taskUpdate,
  fn: (task) => !!task,
  target: $taskPendingUpdate,
})

//логика по обновлению поста
sample({
  clock: taskWillBeUpdate,
  source: combine($updatedTask, $taskTextUpdate, $tasks),
  // tasks -опубликованные таски, taskTextUpdate - то что в области инпута, updateTask-пост, который хотим обновить
  fn: ([updateTask, taskTextUpdate, tasks]) => {
    //записываем в переменную Id таска, который хотим отредактировать
    // @ts-ignore
    const taskId = updateTask.id
    const updatedTask = chain(tasks)
      .filter((task) => task.id !== taskId) // выбираем подходящий пост по id
      .concat([{ text: taskTextUpdate, id: taskId, isDone: false }]) // add update post
      .value() // has side effect (changing post order)??? НЕ ПОМНЮ ЧТО ЭТО

    return updatedTask
  },
  target: $tasks,
})

// todo: moveto calendar model
sample({
  clock: toggleCalendarVisible,
  source: $isCalendarVisible,
  fn: (isCalendarVisible) => !isCalendarVisible,
  target: $isCalendarVisible,
})
