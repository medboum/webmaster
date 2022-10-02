import React from 'react'
import Champ from '../../components/admin/champs/Champ'
import Champs from '../../components/admin/champs/Champs'

export default function addFields() {
  return (
    <div className="bg-blueGray-100 relative my-2  mx-2 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-white py-8 shadow-lg md:my-0  md:mx-2 md:mb-6">
      <div className="px-6">
        <h2 className="text-xl font-semibold leading-tight">
          GESTION D'UNE SOUS CATÉGORIE
        </h2>
      </div>
      <h6 className="text-blueGray-400 mx-6 mt-3 mb-6 rounded-md bg-gray-200 px-[17px] py-2 text-sm font-bold uppercase">
        Création des Champs du Catégorie
      </h6>
      <div className="flex w-full flex-1 py-2">
        {' '}
        <div className="flex flex-[0.2] items-center justify-end">
          <label className="text-sm  md:text-[16px]">Catégorie </label>
        </div>
        <div className="flex flex-[0.8]  ">
          {' '}
          <select
            id="countries"
            className="mx-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:mx-10  "
          >
            <option selected>Select</option>
            <option value="US">Emploi</option>
            <option value="CA">Immobilier</option>
            <option value="FR">Loisirs</option>
            <option value="DE">Services</option>
          </select>
        </div>
      </div>
      <div className="flex w-full flex-1 py-2">
        {' '}
        <div className="flex flex-[0.2] items-center justify-end">
          <label className="text-sm  md:text-[16px]">Sous Catégorie </label>
        </div>
        <div className="flex flex-[0.8] ">
          {' '}
          <select
            id="countries"
            className="mx-4 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 md:mx-10  "
          >
            <option selected>Select</option>
            <option value="US">Emploi</option>
            <option value="CA">Immobilier</option>
            <option value="FR">Loisirs</option>
            <option value="DE">Services</option>
          </select>
        </div>
      </div>

      <Champ title="champ1" placeholder1="Surface,Number..." />
      <button className=" ml-[24%] w-[30%] rounded border   bg-green-500 py-2 px-4 font-semibold text-white ">
        Ajouter
      </button>

      <div className="border-1 mx-4 mt-5 border-gray-200 bg-gray-200 py-[1px]" />
      <Champs />
    </div>
  )
}
