import React, { useState } from 'react'
import logo from './../public/logo.png'
import Image from 'next/image.js'
import FormRow from './FormRow'
import CheckBoxItem from './CheckBoxItem'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import FormRowSelect from './FormRowSelect'
import { categoryOptions } from '../constants/categoryOptions'
import FormData from 'form-data'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function AddProduct() {
  const formData = new FormData()
  const router = useRouter()

  const [imgfile, uploadimg] = useState([])
  //console.log("Image FIles",imgfile);

  const imgFilehandler = (e) => {
    console.log('Image FIles', e.target.files[0])
    if (e.target.files.length !== 0) {
      formData.append('file', e.target.files[0])
    }
  }
  return (
    <div className="mt-24 mb-10 flex h-auto w-full flex-col  items-center justify-center bg-white shadow-xl shadow-slate-300 md:ml-10 md:w-[50%]">
      <div className="relative flex h-12 w-12   md:h-16 md:w-32">
        <Image src={logo} layout="fill" objectFit="contain" />
      </div>

      <p className="text-slate-500">AJOUTER UN PRODUIT 👋</p>

      <Formik
        initialValues={{
          //photo: '',
          nom: '',
          Prix: '',
          Description: '',
          category: '',
        }}
        validate={(values) => {
          const errors = {}

          console.log(values.accountType)
          if (!values.nom) {
            errors.nom = 'Required'
          } else if (values.nom.length < 3) {
            errors.nom = 'nom is too short'
          }

          if (!values.Prix) {
            errors.Prix = 'Required'
          } else if (values.Prix.toString().length < 2) {
            errors.Prix = 'Prix should be >= 10'
          }

          if (!values.Description) {
            errors.Description = 'Required'
          } else if (values.Description.length < 3) {
            errors.Description = 'Description is too short'
          }
          return errors
        }}
        onSubmit={(values) => {
          const { nom, Prix, Description, category } = values

          formData.append('titre', nom)
          formData.append('prix', Prix)
          formData.append('description', Description)
          formData.append('category', category)
          formData.append('owner', 'med ')
          axios
            .post('http://localhost:124/regist', formData)
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
          setSelectedImage,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="my-10 w-[90%]">
            <div className="flex flex-col space-y-5">
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
              <label>
                <FormRow
                  type="text"
                  name="category"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.category}
                  label="category"
                  placeholder="Enter your name"
                />
                <p className="text-sm text-red-500">
                  {errors.category && touched.category && errors.category}
                </p>
              </label>
              <label>
                <FormRow
                  type="text"
                  name="nom"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nom}
                  label="nom"
                  placeholder="Enter your name"
                />
                <p className="text-sm text-red-500">
                  {errors.nom && touched.nom && errors.nom}
                </p>
              </label>

              <label>
                <FormRow
                  type="text"
                  name="Prix"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Prix}
                  label="Prix"
                  placeholder="Enter your tele number"
                />
                <p className="text-sm text-red-500">
                  {errors.Prix && touched.Prix && errors.Prix}
                </p>
              </label>

              <label>
                <FormRow
                  type="text"
                  name="Description"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Description}
                  label="Description"
                  placeholder="Décrire votre produit"
                />
                <p className="text-sm text-red-500">
                  {errors.Description &&
                    touched.Description &&
                    errors.Description}
                </p>
              </label>

              {/*<Field name="image">
                {(form, meta, value) => {
                  const { setFieldValue } = form
                  return (
                    <input
                    type="file"
                    name="myImage"
                    onChange={imgFilehandler}
                  />
                  )
                }}
              </Field> 
              */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border-green-500 bg-green-600 py-3 font-medium text-white hover:bg-green-500 hover:shadow"
              >
                <span>Ajouter</span>
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}
