import React from 'react'
import AnnonceDetails from './AnnonceDetails'
import AnnonceOptions from './AnnonceOptions'

export default function Annonce({ photo, details, prix, statut, options }) {
  return (
    <>
      <tr>
        <td className="  border-b border-gray-200 bg-gray-50 px-5 py-5 text-sm">
          <div className="h-24 w-24 flex-shrink-0 sm:table-cell  ">
            <img
              className="h-full w-full rounded-md md:ml-10"
              src="https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80"
              alt=""
            />
          </div>
          {/* </div> */}
        </td>
        <td className="w-2/5 border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap text-center text-gray-900">
            {details}
          </p>
        </td>
        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap text-center font-medium text-gray-900">
            {prix}
          </p>
        </td>
        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap text-center font-medium text-gray-900">
            {statut}
          </p>
        </td>
        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap text-center text-gray-900">
            <AnnonceOptions />
          </p>
        </td>
      </tr>
    </>
  )
}
