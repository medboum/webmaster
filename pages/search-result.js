import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/product/ProductCard'

export default function Index() {
  const [titre, setTitre] = useState('')
  const [category, setCategory] = useState('')

  const [products, setProducts] = useState([])

  useEffect(() => {
    // if (typeof window !== 'undefined') {
    setTitre(localStorage.getItem('titre').trim())
    setCategory(localStorage.getItem('category').trim())
    // }
  }, [])

  // useEffect(() => {
  axios
    .get(`http://localhost:128/findProduit/${titre}/${category}`)
    .then((response) => {
      setProducts(response.data)
    })
  // }, [])

  return (
    <div className="mt-24">
      {/* Product grid */}
      <div className="flex  bg-red-400">
        {/* Replace with your content */}
        <div className="col w-full border-separate  rounded-lg border-4 border-gray-200 lg:h-full">
          <div className="mt-10 flex flex-wrap ">
            {products !== null ? (
              products.map((product, index) => (
                <div className="inline" key={index}>
                  <ProductCard
                    id={product.id_pro}
                    titre={product.titre}
                    prix={product.titre}
                    image={product.image}
                  />
                </div>
              ))
            ) : (
              <h1 className="mt-24">Loading</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
