import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useReducer, useState } from 'react'
import Header from '../../../components/layout/Header'
import ProductDetails from '../../../components/product/ProductDetails'

export default function product() {
  const router = useRouter()
  const { id } = router.query

  // useEffect(() => {
  //   if (!id) {
  //     return // NOTE: router.query might be empty during initial render
  //   }
  // }, [])

  const [productInfo, setProductInfo] = useState('')

  // useEffect(() => {
  //   console.log('productInfo ' + productInfo)
  // }, [productInfo])

  axios.get(`http://localhost:128/getProduit/${id}`).then((response) => {
    setProductInfo(response.data)
    console.log('productInfo ' + JSON.stringify(productInfo))
  })

  return (
    <div>
      <Header />
      <ProductDetails data={productInfo} />
    </div>
  )
}
