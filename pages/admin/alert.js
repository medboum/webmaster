import React from 'react'
import Alert from '../../components/admin/alert/Alert'
import AlertDetails from '../../components/admin/alert/AlertDetails'
import AlertForm from '../../components/admin/alert/AlertForm'

export default function alert() {
  return (
    <div className="bg-blueGray-100 relative mx-2 mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-white py-8 shadow-lg">
      {' '}
      <div className="px-6">
        <h2 className="font-teko text-3xl leading-tight tracking-wide">
          MES ALERTS
        </h2>
      </div>
      <AlertForm />
      <div className="  overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
        <div className="inline-block min-w-full overflow-hidden rounded-md  pl-3 shadow">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-200 bg-gray-100  py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Titre
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Informations
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Prix
                </th>

                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              <Alert
                details={
                  <AlertDetails
                    categorie="Immobilier"
                    sousCategorie="appartement"
                    pays="Maroc"
                    ville="Rabat"
                  />
                }
                prix="122"
                MotsClé="[haha,hoho"
                titre="Titre"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
