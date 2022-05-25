import { taskWillBePosted, $taskText, $tasks } from './index'
import { combine, sample } from 'effector'

// sample({
//   clock: taskWillBePosted,
//   source: combine($tasks, $taskText),
//     fn: ([tasks, new_task]) => [...tasks, new_task],
//   target: $tasks,
// })
