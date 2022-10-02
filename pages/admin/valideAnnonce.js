import React from 'react'
import AnnonceDetails from '../../components/admin/annonce/AnnonceDetails'
import AnnonceOptions from '../../components/admin/annonce/AnnonceOptions'
import AnnonceToValidate from '../../components/admin/annonceValidation/AnnonceToValidate'
import AnnoToValdiateDetails from '../../components/admin/annonceValidation/AnnoToValdiateDetails'
import { SearchIcon } from '@heroicons/react/outline'

export default function valideAnnonce() {
  return (
    <div className="bg-blueGray-100 relative mx-2 mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-white py-8 shadow-lg">
      <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
        <div className="px-6 pb-6">
          <h2 className="font-teko text-3xl leading-tight tracking-wide">
            {' '}
            VALIDATION D'UNE ANNONCE
          </h2>
        </div>
        {/* Search Section */}

        <div className="mb-7 px-6">
          {' '}
          <div>
            {' '}
            <label
              for="countries"
              className="mb-2 block text-[16px] font-medium text-gray-700 "
            >
              Type de validation
            </label>
            <select
              id="countries"
              className="block w-[40%] rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            >
              <option selected>Annonce Valide</option>
              <option value="US">Annonce non valide</option>
              <option value="CA">Annonce refusées</option>
            </select>
          </div>
          <button className="mt-3 flex rounded border border-green-500 bg-green-400  px-2 py-2  font-semibold text-white ">
            <div className="mt-1  text-white">
              <SearchIcon width={16} height={16} />
            </div>
            <span className="ml-1">Chercher</span>
          </button>
        </div>
        <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <th className="border-b-2 border-gray-200 bg-gray-100  py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Photo
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Details
                </th>

                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                  description
                </th>
                <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-center text-xs font-semibold uppercase tracking-wider text-gray-600">
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              <AnnonceToValidate
                details={
                  <AnnoToValdiateDetails
                    title="Vente d'une appartement à Rabat"
                    categorie="Immobilier"
                    sousCategorie="appartement"
                    dateDePub="19 juin, 2021"
                    prix="100.00 MAD"
                  />
                }
                description="Dans le cadre de notre développement continu, nous recrutons des téléopérateurs pour notre centre d’appel Medicall basé à nador. Vous maîtrisez parfaitement la langue française et l'outil informatique ? Vous recherchez un métier d'avenir, valorisant, évolutif et bien rémunéré ? Vous avez également un bon relationnel, une grande capacité d'écoute et vous êtes doté(e) d'un excellent sens du service. Vous aurez comme missions : prise de rendez-vous immobilier pour le marché français. Nous proposons un salaire motivant + Primes déplafonnés + Avantages sociaux …. Notre offre vous intéresse?"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
