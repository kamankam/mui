import { Task } from 'models/task/types'
import DoneIcon from './svg/DoneIcon'
import TrashIcon from './svg/TrashIcon'
import CalendarIcon from './svg/CalendarIcon'

interface Props {
  task: Task
}
export default function CardTask({ task }: Props) {
  const { text, id } = task
  return (
    <tr className="odd:bg-pink-100  even:bg-pink-50 text-pink-600">
      <td className="px-2 py-2 text-center">{id}</td>
      <td className="px-2 py-2 text-left">{text}</td>
      <td className="px-2 py-2 text-left flex gap-2">
        <button>
          <DoneIcon height={24} width={24} />
        </button>
        <button>
          <TrashIcon height={24} width={24} />
        </button>
        <button>
          <CalendarIcon height={24} width={24} />
        </button>
      </td>
    </tr>
  )
}
