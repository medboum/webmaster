import React from 'react'

export default function addSubCategory() {
  return (
    <div className="bg-blueGray-100 relative my-2  mx-2 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-white py-8 shadow-lg md:my-0  md:mx-2 md:mb-6">
      <div className="px-6">
        <h2 className="text-xl font-semibold leading-tight">
          {' '}
          GESTION D'UNE SOUS CATÉGORIE
        </h2>
      </div>
      <div className="flex w-full flex-row py-6 px-12 md:px-32">
        <p className="py-2.5 text-sm md:text-[15px]">Catégorie existante</p>
        <div>
          {' '}
          <select
            id="countries"
            className=" ml-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
          >
            <option selected>Multimedia</option>
            <option value="US">Emploi</option>
            <option value="CA">Immobilier</option>
            <option value="FR">Loisirs</option>
            <option value="DE">Services</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row px-12 pb-4 md:px-32">
        <p className="-mr-1 flex py-2.5 text-sm md:text-[15px]">
          Ses Sous Catégories
        </p>
        <div>
          {' '}
          <select
            id="countries"
            className=" ml-3 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
          >
            <option selected>Multimedia</option>
            <option value="US">Emploi</option>
            <option value="CA">Immobilier</option>
            <option value="FR">Loisirs</option>
            <option value="DE">Services</option>
          </select>
        </div>
        <button className=" mx-6 rounded border border-red-500 bg-transparent bg-red-500 px-2   font-semibold text-white hover:border-transparent  ">
          Supprimer
        </button>
      </div>
      <div className="mx-6 border border-gray-100 bg-gray-100 " />
      {/*   Création d'une sous catégorie */}
      <h6 className="text-blueGray-400 mx-6 mt-3 mb-6 rounded-md bg-gray-200 px-[17px] py-2 text-sm font-bold uppercase">
        Création d'une sous catégorie
      </h6>
      <div className="flex flex-col">
        <div className="flex w-full pt-4">
          <div className="flex-end flex flex-[0.3] items-center justify-center">
            <label className=" text-sm uppercase">Catégorie</label>
          </div>
          <div className="flex flex-[0.7]">
            <input
              type="text"
              className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-2.5 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
              placeholder="hicham"
            />
          </div>
        </div>
        <div className="relative   flex w-full pt-4">
          <div className="flex-end flex flex-[0.3] items-center justify-center">
            <label className=" text-sm uppercase">Sous Catégorie</label>
          </div>
          <div className="flex flex-[0.7]">
            <input
              type="text"
              className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-2.5 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
              placeholder="hicham"
            />
          </div>
        </div>{' '}
        <div className="relative   flex w-full pt-4">
          <div className="flex-end flex flex-[0.3] items-center justify-center">
            <label className=" text-sm uppercase">Photo</label>
          </div>
          <div className="flex flex-[0.7]">
            <input
              type="file"
              className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-2.5 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
              placeholder="hicham"
            />
          </div>
        </div>
        <div className="ml-[29%]   flex w-full  py-4">
          <button className="my-1 rounded border border-green-500 bg-transparent bg-green-500 px-6 py-2  text-sm font-semibold text-white hover:border-transparent  md:ml-3">
            Ajouter
          </button>
          <button className="my-1 ml-1 rounded border border-red-500 bg-gray-400 px-4 py-2 text-sm font-semibold  text-white hover:border-transparent md:ml-3  md:px-6">
            Vider le formulaire
          </button>
        </div>
      </div>
    </div>
  )
}
