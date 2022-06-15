import {
  taskUpdate,
  taskWillBeDeleted,
  taskWillBeDone,
  toggleCalendarVisible,
} from 'models/task'

import { Task } from 'models/task/types'
import DoneButton from './DoneButton'
import CalendarIcon from './svg/CalendarIcon'
import DoneIcon from './svg/DoneIcon'
import TrashIcon from './svg/TrashIcon'
import UpdateIcon from './svg/UpdateIcon'

interface Props {
  task: Task
  index: number
}
export default function CardTask({ task, index }: Props) {
  const { text, id } = task

  return (
    <tr className="odd:bg-pink-100  even:bg-pink-50 text-pink-600">
      <td className="px-2 py-2 text-center">{index}</td>
      <DoneButton task={task} />
      <td className="px-2 py-2 text-left flex gap-2">
        <button onClick={() => taskWillBeDone(id)}>
          <DoneIcon height={24} width={24} />
        </button>
        <button onClick={() => toggleCalendarVisible()}>
          <CalendarIcon height={24} width={24} />
        </button>
        <button onClick={() => taskUpdate(task)}>
          <UpdateIcon height={24} width={24} />
        </button>
        <button onClick={() => taskWillBeDeleted(id)}>
          <TrashIcon height={24} width={24} />
        </button>
      </td>
    </tr>
  )
}
