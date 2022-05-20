import TestHeader from './HeaderTask'
import InputTask from './InputTask'
import BodyTask from './BodyTask'

export default function Task() {
  return (
    <div className="bg-pink-200 flex justify-center items-center h-screen">
      <div className="w-full mx-3 max-w-2xl">
        <TestHeader />
        <InputTask />
        <BodyTask />
      </div>
    </div>
  )
}
