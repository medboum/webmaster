import React from 'react'

export default function AnnonceOptions({ hideEdit }) {
  return (
    <div className="flex flex-col">
      <button
        className={`rounded border border-green-500 bg-green-400  py-2  font-semibold text-white md:ml-3 ${hideEdit}`}
      >
        Modifier
      </button>
      <button className="my-1 rounded border border-red-500 bg-transparent bg-red-500  py-2 font-semibold text-white hover:border-transparent  md:ml-3">
        Supprimer
      </button>
      <button className="rounded border border-orange-500  bg-orange-500  py-2  font-semibold text-white hover:border-transparent md:ml-3">
        Details
      </button>
    </div>
  )
}
