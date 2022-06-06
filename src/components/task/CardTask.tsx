import { Task } from 'models/task/types'
import DoneIcon from './svg/DoneIcon'
import TrashIcon from './svg/TrashIcon'
import Calendar from './Calendar'
import DoneButton from './DoneButton'
import { taskWillBeDone, taskWillBeDeleted } from 'models/task'
import { setCalendarVisible, $isCalendarVisible } from 'models/task/index'
import CalendarIcon from './svg/CalendarIcon'

interface Props {
  task: Task
  index: number
}
export default function CardTask({ task, index }: Props) {
  const { text, id } = task

  const handleOnCalendarClick = () => {
    setCalendarVisible(true)
  }
  return (
    <tr className="odd:bg-pink-100  even:bg-pink-50 text-pink-600">
      <td className="px-2 py-2 text-center">{index}</td>
      <DoneButton task={task} />
      <td className="px-2 py-2 text-left flex gap-2">
        <button onClick={() => taskWillBeDone(id)}>
          <DoneIcon height={24} width={24} />
        </button>
        <button onClick={() => taskWillBeDeleted(id)}>
          <TrashIcon height={24} width={24} />
        </button>
        <button onClick={handleOnCalendarClick}>
          <CalendarIcon height={24} width={24} />
        </button>
      </td>
    </tr>
  )
}
