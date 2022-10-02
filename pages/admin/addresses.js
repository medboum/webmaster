import React from 'react'

export default function addresses() {
  return (
    <div className="bg-blueGray-100 relative mx-2 mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-white py-8 shadow-lg">
      <div className="px-6 pb-6">
        <h2 className="text-xl font-semibold leading-tight"> ADDRESSES</h2>
      </div>{' '}
      <div className="flex flex-wrap">
        <div className="w-full px-4 lg:w-6/12">
          <div className="relative mb-3 w-full">
            <label
              className="text-blueGray-600 mb-2 block  text-xs font-medium  uppercase"
              htmlFor="grid-password"
            >
              Pays
            </label>
            <input
              type="text"
              className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-gray-100 px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
              placeholder="text"
            />
          </div>
        </div>
        <div className="w-full px-4 lg:w-6/12">
          <div className="relative mb-3 w-full">
            <label
              className="text-blueGray-600 mb-2 block text-xs font-medium  uppercase"
              htmlFor="grid-password"
            >
              Ville
            </label>
            <input
              type="text"
              className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-gray-100 px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
              placeholder="ville"
            />
          </div>
        </div>
        <div className="w-full px-4 lg:w-6/12">
          <div className="relative mb-3 w-full">
            <label
              className="text-blueGray-600 mb-2 block text-xs font-medium uppercase"
              htmlFor="grid-password"
            >
              Quartier
            </label>
            <input
              type="text"
              className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-gray-100 px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
              placeholder="ville"
            />
          </div>
        </div>
        <div className="mt-6 w-full  lg:w-6/12">
          {' '}
          <button className="ml-4 rounded border border-green-500 bg-transparent py-2 px-4 font-semibold text-green-700 hover:border-transparent hover:bg-green-500 hover:text-white ">
            Ajouter
          </button>
        </div>
      </div>
    </div>
  )
}
