export default function BodyTask() {
  return (
    <div className="bg-pink-100 mt-5 p-4 rounded-lg shadow-lg">
      <div>
        <h1 className="text-lg font-bold mb-0 text-gray-800 leading-none">
          Todo's
        </h1>
        <h2 className="text-xs mt-0 inline-block ">
          2 todos pending, 1 completed
        </h2>
      </div>
      <div className="mt-3 overflow-y-auto max-h-60">
        <table className="w-full">
          <thead className="">
            <tr className="bg-pink-400 text-pink-100 rounded-lg">
              <th className="text-center rounded-tl-lg py-2">#</th>
              <th className="text-left  py-2 w-full">Details</th>
              <th className="text-left rounded-tr-lg  ">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-pink-100  even:bg-pink-50 text-pink-600">
              <td className="px-2 py-2 text-center">1</td>
              <td className="px-2 py-2 text-left">Записаться на брови</td>
              <td className="px-2 py-2 text-left flex gap-2">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
