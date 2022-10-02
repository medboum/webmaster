import React, { useState } from 'react'
import Image from 'next/image.js'
import FormRow from '../FormRow.js'
import FormData from 'form-data'
import axios from 'axios'
import CheckBoxItem from '../CheckBoxItem'
import { Formik, Field, Form } from 'formik'
import FormRowSelect from '../FormRowSelect.js'
import { villeOptions } from '../../constants/villeOptions.js'
import { categoryOptions } from '../../constants/categoryOptions.js'
import { useEffect } from 'react'

export default function AnnonceForm() {
  const formData = new FormData()

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

  const [checked, setChecked] = useState(false)
  const imgFilehandler = (e) => {
    console.log('Image FIles', e.target.files[0])
    if (e.target.files.length !== 0) {
      formData.append('file', e.target.files[0])
    }
  }
  return (
    <div className="mt-10 mb-10 flex h-auto w-full flex-col items-center  justify-center rounded-xl bg-gray-50 shadow-xl shadow-slate-300 md:ml-10 md:w-[70%]">
      {/* <div className="relative flex h-12 w-12   md:h-16 md:w-32"> */}
      {/* <Image src="" layout="fill" objectFit="contain" /> */}
      {/* </div> */}

      <p className="mt-4 text-xl font-medium text-slate-500">
        PUBLIER UNE ANNONCE GRATUITE
      </p>
      <div className="mt-5 w-full border border-green-500 bg-gray-500" />
      <Formik
        initialValues={{
          type: '',
          titre: '',
          owner: '',
          ville: '',
          sousCategorie: 'hh',
          category: '',
          // photo: '',
        }}
        validate={(values) => {
          const errors = {}

          if (!values.titre) {
            errors.titre = 'Required'
          } else if (values.titre.length < 10) {
            errors.titre = 'titre is too short'
          }

          // if (!values.ville) {
          //   errors.ville = 'Required'
          // } else if (values.ville.length < 3) {
          //   errors.ville = 'Ville is too short'
          // }
          if (!values.category) {
            errors.category = 'Required'
          } else if (values.category.length < 3) {
            errors.category = 'Entreprise is too short'
          }

          return errors
        }}
        onSubmit={(values) => {
          const { type, titre, owner, ville, sousCategorie, category } = values

          formData.append('type', type)
          formData.append('titre  ', titre)
          formData.append('ville', ville)
          formData.append('categorie', category)
          formData.append('sousCategorie', sousCategorie)
          formData.append('owner', 'med ')
          console.log(values)
          axios
            .post('http://localhost:124/annance/add', formData)
            .then(function (response) {
              router.push('/accueil')
            })
            .catch(function (error) {
              console.log(error)
            })
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="my-10 w-[90%] rounded-xl">
            <div className="flex flex-col space-y-5">
              <label>
                <FormRowSelect
                  labelText="Offre"
                  name="type"
                  value={values.type}
                  handleChange={handleChange}
                  list={['Offre', 'Demande']}
                />
                <p className="text-sm text-red-500">
                  {errors.type && touched.type && errors.type}
                </p>
              </label>

              <label>
                <FormRow
                  type="text"
                  name="titre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.titre}
                  label="Titre d'annonce"
                  placeholder="Titre "
                />
                <p className="text-sm text-red-500">
                  {errors.titre && touched.titre && errors.titre}
                </p>
              </label>

              <div>
                <FormRowSelect
                  labelText="Ville"
                  name="ville"
                  value={values.ville}
                  handleChange={handleChange}
                  list={villeOptions}
                />
                <p className="text-sm text-red-500">
                  {errors.ville && touched.ville && errors.ville}
                </p>
              </div>
              <div>
                <FormRowSelect
                  labelText="sousCategorie"
                  name="sousCategorie"
                  value={values.sousCategorie}
                  handleChange={handleChange}
                  list={villeOptions}
                />
              </div>

              <div>
                <div>
                  <label className="mb-4">Catégorie</label>
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
                </div>
              </div>
              <label>
                <FormRow
                  type="file"
                  name="photo"
                  onChange={imgFilehandler}
                  onBlur={handleBlur}
                  //value={values.photo}
                  label="Photo"
                />
                <p className="text-sm text-red-500">
                  {errors.photo && touched.photo && errors.photo}
                </p>
              </label>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border-green-500 bg-green-600 py-3 font-medium text-white hover:bg-green-500 hover:shadow"
              >
                Publier
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}
