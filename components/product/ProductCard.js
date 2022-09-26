import { data } from 'autoprefixer'
import axios from 'axios'
import Image from 'next/image'
import a from '../../public/images/a.jpg'
import Link from 'next/link'

import React, { useState } from 'react'

export default function ProductCard({ titre, prix, image, id }) {
  const [favorite, setFavorite] = useState("false");

  function GraphCMSImageLoader({ src }) {
    return `http://localhost:128/download/${src}`
  }

  return (
    <div className=" my-3  w-[280px] px-2 shadow-md">
      <Image
        loader={GraphCMSImageLoader}
        src={image}
        width={500}
        height={500}
      />
      <div className="border-[1px]  border-gray-100 bg-gray-200" />
      <div className="pt-3 ">
        <h5 className="px-4 font-teko text-[19px] uppercase tracking-tight text-gray-900 ">
          {titre}
        </h5>
        <p className="px-4 text-sm font-normal font-bold uppercase text-green-600 ">
          {prix} MAD
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="flex">
            <h2 className="tracking-thin py-2 pr-1 pl-4 text-sm  font-semibold">
              SAFRAN DE TALIOUINE 5G
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link href={`/products/productDetails/${id}`}>
          <button className=" my-2 mx-4 flex justify-center rounded border border-green-500 bg-green-400 p-2 px-3 py-2 text-sm font-semibold text-white hover:bg-green-600   ">
            Voir le produit
          </button> 
        </Link>

        <button materialIcon="favorite" iconBefore={true} >Favorite</button>

      </div>

    </div>
  )
}
