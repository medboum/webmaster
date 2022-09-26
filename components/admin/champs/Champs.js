import React from 'react'

export default function Champs() {
  return (
    <div className="mx-1 mt-2 md:mx-4">
      <div className=" overflow-x-auto py-4 sm:-mx-8 sm:px-8">
        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-200 bg-gray-100  py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Nom de champ
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Type
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Valeur
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Options
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
