import React from 'react'

export default function AlertDetails({
  categorie,
  sousCategorie,
  pays,
  ville,
}) {
  return (
    <div className="flex items-center justify-center">
      {' '}
      <div className="text-start flex flex-col items-center justify-start  text-[16px] font-medium">
        <p className=" pb-1 text-sm text-green-500 md:text-[16px]">
          {categorie}
        </p>
        <p className="flex py-1 text-sm md:text-[16px]">
          Catégorie:{' '}
          <span className="ml-[2px] text-gray-500 md:text-[16px]">
            {sousCategorie}
          </span>
        </p>
        <p className="py-1 text-sm md:text-[16px]">
          Sous Catégorie : <span className="  text-gray-500">{pays}</span>{' '}
        </p>
        <p className="pt-1 text-sm md:text-[16px]">
          Publié le: <span className="  text-gray-500">{ville}</span>{' '}
        </p>
      </div>
    </div>
  )
}
