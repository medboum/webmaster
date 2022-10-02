import React, { useEffect, useState } from 'react'
import { titles } from '../constants/Titles'
import { items } from '../constants/DatalistItems'
import FormRowSelect from './FormRowSelect1'
import { villeOptions } from '../constants/villeOptions'
import { categoryOptions } from '../constants/categoryOptions'
import Link from 'next/link'
import axios from 'axios'

const initialState = {
  titre: '',
  city: '',
  category: '',
}

export default function ProductSearch() {
  const [values, setValues] = useState(initialState)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:128/admin/getAllCategories')
      .then(function (response) {
        setCategories(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:128/admin/getAllCategories')
      .then(function (response) {
        setCategories(response.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const addToLocalStorage = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('titre', values.titre)
      localStorage.setItem('category', values.category)
      localStorage.setItem('city', values.city)
    }
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  return (
    <div
      className="mt-28 flex  w-[65%] flex-col border-x-4  border-x-green-300 bg-gray-100 p-8
    px-10 shadow-xl md:-mb-20"
    >
      <p className="pb-3 font-medium tracking-wide text-gray-700">
        {titles.PRODUCT_SEARCH_SECTION_TITLE}
      </p>
      <div className="flex items-center  justify-center">
        <div className="flex flex-[0.40]">
          <input
            type="text"
            name="titre"
            value={values.titre}
            onChange={handleChange}
            list="products"
            className="mt-2 mr-6 w-full rounded-lg border border-slate-200 py-3 px-2 hover:shadow focus:border-slate-500 focus:outline-none"
            placeholder="Entrer ke nom  de produit"
          />
          <datalist id="products" type="text">
            {/* <option key="1">Huile</option>
            <option key="2">Thé</option>
            <option key="2">Fruit</option> */}
            {items.map((item, key) => (
              <option key={key} value={item.value} />
            ))}
          </datalist>
        </div>
        <div className="ml-8 flex flex-[0.3]">
          {' '}
          <FormRowSelect
            labelText="Ville"
            name="city"
            value={values.city}
            handleChange={handleChange}
            list={[values.city, ...villeOptions]}
          />
        </div>
        <div className="flex flex-[0.30]">
          <select
            name="category"
            value={values.category}
            onChange={handleChange}
            className=" mt-2 block w-full rounded-lg border border-gray-300 bg-white  py-3 px-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
          >
            {categories.map((itemValue, index) => {
              return (
                <option
                  key={index}
                  value={itemValue.nome}
                  className="font-medium"
                >
                  {itemValue.nome}
                </option>
              )
            })}
          </select>
          {/* <FormRowSelect
            labelText="Catégorie"
            name="category"
            value={values.category}
            handleChange={handleChange}
            list={[values.category, ...categoryOptions]}
          /> */}
        </div>
      </div>
      <Link href="/accueil">
        <button
          onClick={addToLocalStorage()}
          className=" mx-40 my-4  rounded border-y border-black bg-green-400 py-2  text-center  font-semibold text-white  "
        >
          Lancer la recherche
        </button>
      </Link>
    </div>
  )
}
