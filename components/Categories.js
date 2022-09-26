import { Breadcrumb } from 'flowbite-react'
import CategoryCard from './product/CategoryCard'
import { HomeIcon } from '@heroicons/react/outline'
import Header from './layout/Header'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Categories() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:128/admin/getAllCategories`)
      .then((response) => {
        setCategories(response.data)
      })
  }, [])

  return (
    <div className="mx-8 mt-16">
      <div className="mx-auto   max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* CATÉGORIES DE PRODUITS */}
        <section className="">
          <h2 className="mt-20 mb-4  text-2xl font-bold text-gray-400 md:ml-2">
            CATÉGORIES DE PRODUITS
          </h2>
          {/* </header> */}
          <BreadcrumbExample />
        </section>
        <div className=" mt-10 mb-10 flex flex-col items-center justify-center md:flex-row ">
          <div className="flex flex-wrap">
            {categories.map((category, index) => (
              <Link href={`/category/${category.id}`}>
                <div className="inline" key={index}>
                  <CategoryCard nome={category.nome} photo={category.photo} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function BreadcrumbExample() {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="/" icon={HomeIcon}>
        Home
      </Breadcrumb.Item>
      {/* <Breadcrumb.Item href="#">Catégorie X</Breadcrumb.Item> */}
      {/* <Breadcrumb.Item>Flowbite React</Breadcrumb.Item> */}
    </Breadcrumb>
  )
}
