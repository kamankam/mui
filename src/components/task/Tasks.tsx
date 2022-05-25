import { useList } from 'effector-react'
import { $tasks } from 'models/task'
import CardTask from './CardTask'

export default function TaskComponent() {
  const tasks = useList($tasks, (task) => <CardTask task={task} />)

  return (
    <div className="bg-pink-100 mt-5 p-4 rounded-lg shadow-lg">
      <div className="mt-3 overflow-y-auto max-h-60">
        <table className="w-full">
          <thead className="">
            <tr className="bg-pink-400 text-pink-100 rounded-lg">
              <th className="text-center rounded-tl-lg py-2">id</th>
              <th className="text-left  py-2 w-full">Detail</th>
              <th className="text-left rounded-tr-lg  ">Action</th>
            </tr>
          </thead>
          <tbody>{tasks}</tbody>
        </table>
      </div>
    </div>
  )
}
