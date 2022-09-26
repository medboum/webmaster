import React from 'react'

// components

export default function AlertForm() {
  return (
    <>
      <div className="bg-blueGray-100 relative mx-2 mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-white py-8 shadow-lg">
        <div className="flex-auto px-4 pt-0 lg:px-10">
          <form>
            <h6 className="text-blueGray-400 mt-3 mb-6 rounded-md bg-gray-200 px-[17px] py-2 text-sm font-bold uppercase">
              CRÉER ALERTE EMAIL
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="block py-2 text-sm font-medium text-gray-400"
                    htmlFor="grid-password"
                  >
                    Nom de l'alerte :
                  </label>
                  <input
                    type="text"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    placeholder="hicham"
                  />
                </div>
                <div>
                  {' '}
                  <label
                    for="countries"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Ville
                  </label>
                  <select
                    id="countries"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 "
                  >
                    <option selected>Multimedia</option>
                    <option value="US">Emploi</option>
                    <option value="CA">Immobilier</option>
                    <option value="FR">Loisirs</option>
                    <option value="DE">Services</option>
                  </select>
                </div>
                <div>
                  {' '}
                  <label
                    for="countries"
                    className="block py-2 text-sm font-medium text-gray-400"
                  >
                    Pays
                  </label>
                  <select
                    id="countries"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                  >
                    <option selected>Multimedia</option>
                    <option value="US">Emploi</option>
                    <option value="CA">Immobilier</option>
                    <option value="FR">Loisirs</option>
                    <option value="DE">Services</option>
                  </select>
                </div>
              </div>

              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="block py-2 text-sm font-medium text-gray-400"
                    htmlFor="grid-password"
                  >
                    Categorie de l'alerte :
                  </label>
                  <select
                    id="countries"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                  >
                    <option selected>Multimedia</option>
                    <option value="US">Emploi</option>
                    <option value="CA">Immobilier</option>
                    <option value="FR">Loisirs</option>
                    <option value="DE">Services</option>
                  </select>
                </div>
                <div className="w-full ">
                  <label
                    for="countries"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Sous Categorie de l'alerte :
                  </label>
                  <select
                    id="countries"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                  >
                    <option selected>Multimedia</option>
                    <option value="US">Emploi</option>
                    <option value="CA">Immobilier</option>
                    <option value="FR">Loisirs</option>
                    <option value="DE">Services</option>
                  </select>
                </div>
                <div className="relative mb-3 w-full">
                  <label
                    for="countries"
                    className="block py-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                  >
                    Mot clé :
                  </label>
                  <input
                    type="text"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    placeholder="hicham"
                  />
                </div>
              </div>
              <button className="my-2 ml-4 rounded border border-green-500 bg-transparent py-2 px-4 font-semibold text-green-700 hover:border-transparent hover:bg-green-500 hover:text-white">
                Enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
