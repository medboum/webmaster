import React, { useState } from 'react'
import Image from 'next/image.js'
import FormRow from '../FormRow.js'

import CheckBoxItem from '../CheckBoxItem'
import { Formik, Field, Form } from 'formik'

export default function AnnonceForm() {
  const [checked, setChecked] = useState(false)
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
          accountType: '',
          login: '',
          email: '',
          telephone: '',
          password: '',
          Titre: '',
          ville: '',
          enterprise: '',
        }}
        validate={(values) => {
          const errors = {}

          if (!values.login) {
            errors.login = 'Required'
          } else if (values.login.length < 3) {
            errors.login = 'Login is too short'
          }

          if (!values.ville) {
            errors.ville = 'Required'
          } else if (values.ville.length < 3) {
            errors.login = 'Ville is too short'
          }
          if (!values.enterprise) {
            errors.enterprise = 'Required'
          } else if (values.enterprise.length < 3) {
            errors.enterprise = 'Entreprise is too short'
          }

          return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 5))
            setSubmitting(false)
          }, 400)
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="my-10 w-[90%] rounded-xl">
            <div className="flex flex-col space-y-5">
              <div>
                <p className="mr-4 mb-2  pb-2 text-sm font-medium text-slate-700 md:pb-0">
                  Offre/Demande
                </p>{' '}
                <Field
                  as="select"
                  name="offre"
                  className="w-full rounded-lg border border-slate-200 py-[11px] px-3 hover:shadow focus:border-slate-500 focus:outline-none"
                >
                  <option value="red">Demande</option>
                  <option value="green">Offre</option>
                </Field>
              </div>

              <label>
                <FormRow
                  type="password"
                  name="Titre"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.Titre}
                  label="Titre d'annonce"
                  placeholder="Titre "
                />
                <p className="text-sm text-red-500">
                  {errors.Titre && touched.Titre && errors.Titre}
                </p>
              </label>

              <div>
                <p className="mr-4 mb-2  pb-2 text-sm font-medium text-slate-700 md:pb-0">
                  Ville
                </p>{' '}
                <Field
                  as="select"
                  name="color"
                  className="w-full rounded-lg border border-slate-200 py-[11px] px-3 hover:shadow focus:border-slate-500 focus:outline-none"
                >
                  <option value="red">Rabat</option>
                  <option value="green">Casablanca</option>
                </Field>
              </div>
              <div>
                <p className="mr-4 mb-2  pb-2 text-sm font-medium text-slate-700 md:pb-0">
                  Sous catégorie
                </p>{' '}
                <Field
                  as="select"
                  name="sousCategorie"
                  className="w-full rounded-lg border border-slate-200 py-[11px] px-3 hover:shadow focus:border-slate-500 focus:outline-none"
                >
                  <option value="red">Sous Catégorie 1</option>
                  <option value="green">Sous sCatégorie 2</option>
                </Field>
              </div>

              <div>
                <p className="mr-4 mb-2  pb-2 text-sm font-medium text-slate-700 md:pb-0">
                  Catégories
                </p>{' '}
                <Field
                  as="select"
                  name="categories"
                  className="w-full rounded-lg border border-slate-200 py-[11px] px-3 hover:shadow focus:border-slate-500 focus:outline-none"
                >
                  <option value="red">Catégorie 1</option>
                  <option value="green">Catégorie 2</option>
                </Field>
              </div>
              <div>
                <p className="mr-4 mb-2  pb-2 text-sm font-medium text-slate-700 md:pb-0">
                  Photo
                </p>{' '}
                <input type="file" />
              </div>
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
