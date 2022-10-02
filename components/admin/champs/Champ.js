import React from 'react'

export default function Champ({
  title,
  placeholder1,
  placeholder2,
  placeholder3,
}) {
  return (
    //This should used  in a Modal
    <div className="flex w-full justify-between  py-3 ">
      <div className="ml-3 flex flex-[0.2]  items-center justify-end">
        <p>{title}</p>
      </div>
      <div className="mx-4 flex w-full flex-[0.8] md:px-3">
        <div className="w-full md:px-4">
          {' '}
          <input
            type="text"
            className="placeholder-blueGray-300 blueGray-600 w-full rounded border-0 bg-gray-100 py-2.5 text-sm text-sm text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring md:px-3"
            placeholder={placeholder1}
          />
        </div>
        <div className="w-full px-1 md:px-4">
          {' '}
          <select
            id="countries"
            className=" block w-full rounded-lg border border-gray-300 bg-gray-100  p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  "
          >
            <option selected>{placeholder2}</option>
            <option value="US">Emploi</option>
            <option value="CA">Immobilier</option>
            <option value="FR">Loisirs</option>
            <option value="DE">Services</option>
          </select>
        </div>
        <div className="w-full ">
          {' '}
          <input
            type="text"
            className="placeholder-blueGray-300 text-blueGray-600  rounded border-0 bg-gray-100  py-2.5 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring md:px-3"
            placeholder="placeholder3"
          />
        </div>
      </div>
    </div>
  )
}
