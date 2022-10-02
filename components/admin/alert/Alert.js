import React from 'react'
import AnnonceDetails from '../annonce/AnnonceDetails'
import AnnonceOptions from '../annonce/AnnonceOptions'

export default function Alert({ titre, details, prix, MotsClé }) {
  return (
    <>
      <tr>
        <td className=" border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap text-center text-gray-900">
            {titre}
          </p>
        </td>
        <td className=" border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap text-center font-medium text-gray-900">
            {details}
          </p>
        </td>
        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap text-center font-medium text-gray-900">
            {prix}
          </p>
        </td>
        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap text-center text-gray-900">
            <button className="my-1 rounded border border-red-500 bg-transparent bg-red-500 px-2  py-2 font-semibold text-white hover:border-transparent  md:ml-3">
              Supprimer
            </button>
          </p>
        </td>
      </tr>
    </>
  )
}
