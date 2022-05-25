import { useList } from 'effector-react'
import { $tasks } from 'components/models/task'
import CardTask from './CardTask'

export default function TaskComponent() {
  const tasks = useList($tasks, (task) => <CardTask task={task} />)

  return (
    <div className="bg-pink-100 mt-5 p-4 rounded-lg shadow-lg">{tasks}</div>
  )
}
