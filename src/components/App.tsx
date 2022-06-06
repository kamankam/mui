import Tasks from './task/Tasks'
import InputTask from './task/InputTask'
import CompleteTask from './task/CompleteTask'
import HeaderList from './task/HeaderList'
import Calendar from './task/Calendar'

export default () => {
  return (
    <div className="bg-pink-200 flex justify-center items-center h-screen">
      <div className="w-full mx-3 max-w-2xl">
        <HeaderList />
        <InputTask />
        <CompleteTask />
        <Tasks />
        <Calendar />
      </div>
    </div>
  )
}
