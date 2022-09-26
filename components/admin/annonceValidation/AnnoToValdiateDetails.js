import React from 'react'

export default function AnnoToValdiateDetails({
  title,
  prix,
  categorie,
  sousCategorie,
  dateDePub,
}) {
  return (
    <div className="flex items-center justify-center">
      {' '}
      <div className="text-start flex flex-col items-start  text-[16px] font-medium">
        <p className=" pb-1 text-green-500">{title}</p>
        <p className="py-1 ">
          Prix : <span className="  text-gray-500">{prix}</span>
        </p>
        <p className="py-1 ">
          Catégorie : <span className="  text-gray-500">{categorie}</span>
        </p>
        <p className="py-1">
          Sous Catégorie :{' '}
          <span className="  text-gray-500">{sousCategorie}</span>{' '}
        </p>
        <p className="pt-1">
          Postée le: <span className="  text-gray-500">{dateDePub}</span>{' '}
        </p>
      </div>
    </div>
  )
}
