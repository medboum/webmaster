import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ProductCard from '../../components/product/ProductCard'

export default function Index() {
  const router = useRouter()
  const { id } = router.query
  const [products, setProducts] = useState([])

  axios.get(`http://localhost:128/findProduits/${id}`).then((response) => {
    setProducts(response.data)
  })

  return (
    <div className="mx-[10%] mt-24 flex w-[80%] flex-col">
      <h1 className="mb-5 font-teko text-[28px] tracking-wide opacity-70">
        Produits de Category :
      </h1>
      <div className="  border-separate rounded-lg border-4 border-gray-200 px-5 lg:h-full">
        <div className=" flex flex-wrap ">
          {products.map((product, index) => (
            <div className="inline flex-[33.33%]" key={index}>
              <ProductCard
                id={product.id_pro}
                titre={product.titre}
                prix={product.prix}
                image={product.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
