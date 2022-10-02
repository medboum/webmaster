import React from 'react'

export default function ValidationOptions() {
  return (
    <div className="flex flex-col">
      <button className="rounded border border-green-500 bg-green-400  py-2  font-semibold text-white md:ml-3 ">
        Valider
      </button>
      <button className="my-1 rounded border border-red-500 bg-transparent bg-red-500  py-2 font-semibold text-white hover:border-transparent  md:ml-3">
        Refuser
      </button>
      {/* Ask for modify somthing in the annonce */}
    </div>
  )
}
