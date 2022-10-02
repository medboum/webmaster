import React from 'react'
import CategoryFilter from '../components/accueil/CategoryFilter'
import Example from '../components/accueil/Example'
import FilterByDate from '../components/accueil/FilterByDate'
import Header from '../components/layout/Header'
import CardExample from '../components/product/ProductCard'
import { Breadcrumb } from 'flowbite-react'
import { HomeIcon } from '@heroicons/react/outline'
import CategoryCard from '../components/product/CategoryCard'
import ProductDetails from '../components/product/ProductDetails'
import Typed from 'react-typed'

export default function accueil() {
  return (
    <div className="z-50 flex flex-col">
      {/* <Header /> */}
      <CategoryFilter />
    </div>
  )
}
