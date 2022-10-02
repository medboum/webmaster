import { Breadcrumb } from 'flowbite-react'
import CategoryCard from './product/CategoryCard'
import { HomeIcon } from '@heroicons/react/outline'
import Header from './layout/Header'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import ProductCard from './product/ProductCard'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Selected() {
  const [selected, setSelected] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:128/getProduitSelected`)
      .then((response) => {
        setSelected(response.data)
      })
  }, [])

  return (
    <div className="">
      <div className="flex flex-col justify-start px-4 sm:px-6 lg:px-8">
        {/* CATÉGORIES DE PRODUITS */}
        <section className="">
          <h2 className=" mb-4  text-2xl font-bold justify-center text-gray-400 md:ml-2">
           NOS MEILLEURS  PRODUITS
          </h2>
          {/* </header> */}
        
        </section>
        <div className=" mt-10 mb-10 flex flex-col items-center justify-center md:flex-row ">
          <div className="flex flex-wrap">
            {selected.map((product, index) => (
             
                <div className="inline">
                <ProductCard
                          id={product.id_pro}
                          titre={product.titre}
                          prix={product.prix}
                          image={product.image}
                          descpription={product.descpription}
                        />
                </div>
            
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


