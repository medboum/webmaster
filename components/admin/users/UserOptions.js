import React from 'react'

export default function UserOptions({ onClickA }) {
  return (
    <div className="flex flex-col">
      <button
        onClick={onClickA}
        className="my-1 rounded border border-red-500 bg-transparent bg-red-500  py-2 font-semibold text-white hover:border-transparent  md:ml-3"
      >
        Supprimer
      </button>
      <button className="rounded border border-orange-500  bg-orange-500  py-2  font-semibold text-white hover:border-transparent md:ml-3">
        Details
      </button>
    </div>
  )
}
