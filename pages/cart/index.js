import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Product from '../../components/cart/Product'
import TotalPriceCard from '../../components/cart/TotalPriceCard'
import USerService from '../../services/USer_Service'
import axios from 'axios'

export default function index() {
  const [cart, setCart] = React.useState([])
  const [total, setTotal] = React.useState([])

  const [profile, setProfile] = useState([])

  useEffect(() => {
    USerService.getMyCart().then(
      (response) => {
        setCart(response.data.items)
        setTotal(response.data.totalPrice)
       
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])
    
  return (
    <div
      className="h-28"
      // ref={listInnerRef}
      // onScroll={onScroll}
      className="mx-32 mt-24"
    >
      {cart.map((product, index) => (
                      <div className="inline flex-[33%]" key={product.id_pro}>
                        <Product
                          //id={product.id_pro}
                          produit={product.produit.titre}
                         // quantity={product.quantity}
                         image={product.produit.image}
                         quantity={product.quantity}
                         prix={product.produit.prix}
                        //  prix={cart.prix}
                         // image={cart.image}
                        />
                      </div>
               ) )
               }    
      <TotalPriceCard 
      total={total}
      />
     
    </div>
  )
}
