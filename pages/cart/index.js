import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Breadcrumb from '../../components/cart/BreadCrumb'

import Product from '../../components/cart/Product'
import TotalPriceCard from '../../components/cart/TotalPriceCard'

export default function index() {
  return (
    <div
      className="h-28"
      // ref={listInnerRef}
      // onScroll={onScroll}
      className="mx-32 mt-24"
    >
      <div className="mt-10 flex  justify-end">
        <Breadcrumb />
      </div>
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <Product />
      <TotalPriceCard />
    </div>
  )
}
