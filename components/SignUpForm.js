import React, { useState } from 'react'
import logo from './../public/logo.png'
import Image from 'next/image.js'
import FormRow from './FormRow'
import CheckBoxItem from './CheckBoxItem'
import { Formik, Field, Form } from 'formik'
import { villeOptions } from '../constants/villeOptions'
import FormRowSelect from './FormRowSelect'

export default function SignUpForm() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="mt-8 flex h-auto w-[90%] flex-col items-center justify-center rounded-xl border-b-4 border-t-4  border-green-400 bg-gray-50 shadow-xl shadow-slate-300 md:mb-10 md:ml-10 md:w-[70%]">
      <div className="relative flex h-12 w-12   md:h-16 md:w-32">
        <Image src={logo} layout="fill" objectFit="contain" />
      </div>

      <p className="text-slate-500">CRÉEZ VOTRE COMPTE 👋</p>

      <Formik
        initialValues={{
          accountType: '',
          login: '',
          email: '',
          telephone: '',
          password: '',
          confirmPassword: '',
          ville: '',
          enterprise: '',
        }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          console.log(values.accountType)
          if (!values.login) {
            errors.login = 'Required'
          } else if (values.login.length < 3) {
            errors.login = 'Login is too short'
          }
          if (!values.password) {
            errors.password = 'Required'
          } else if (values.password.length < 3) {
            errors.password = 'Short password'
          }
          if (!values.confirmPassword) {
            errors.confirmPassword = 'Required'
          } else if (values.confirmPassword.length < 3) {
            errors.confirmPassword = 'Login is too short'
          }

          if (!values.telephone) {
            errors.telephone = 'Required'
          } else if (values.telephone.toString().length < 9) {
            errors.telephone = 'Telephone should be >= 10'
          }

          if (!values.accountType) {
            errors.accountType = 'Required'
          } else if (values.accountType.length !== 1) {
            errors.accountType = 'Please check only one box'
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
        onSubmit={(values) => {
          const { email, password, confirmPassword, ville, telephone, login } =
            values
          axios
            .post('http://localhost:122/create', {
              username: login,
              email: email,
              password: password,
              ville: ville,
              telephone: telephone,
              confirmPasssword: confirmPassword,
            })
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
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit} className="my-10 w-[90%] rounded-xl">
            <div className="flex flex-col space-y-5">
              <div
                id="checkbox"
                className="mr-4 py-2 text-sm font-medium text-slate-700 "
              >
                Account type
              </div>
              <div className="flex  flex-row items-center justify-center  space-x-28 rounded-lg bg-gray-100 px-20 py-2 md:space-x-52 ">
                <div className="mb:pb-2 ml-3 flex flex-row text-sm font-medium text-slate-700 md:pb-0">
                  <Field
                    type="checkbox"
                    name="accountType"
                    value="Particulier"
                    className="w-4 rounded-full border border-slate-200 py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
                  />
                  <span className="ml-2"> Particulier</span>
                </div>
                <div className="mb:pb-2 ml-3 flex flex-row text-sm font-medium text-slate-700 md:pb-0">
                  <Field
                    // onChange={() => setChecked(!checked)}
                    type="checkbox"
                    name="accountType"
                    value="Professionnel"
                    className="w-4 rounded-full border border-slate-200 py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
                  />
                  <span className="ml-2">Professionnel</span>
                </div>
              </div>
              <p className="text-sm text-red-500">
                {errors.accountType &&
                  touched.accountType &&
                  errors.accountType}
              </p>

              <label>
                <FormRow
                  type="text"
                  name="login"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.login}
                  label="Login"
                  placeholder="Enter your name"
                />
                <p className="text-sm text-red-500">
                  {errors.login && touched.login && errors.login}
                </p>
              </label>
              <label>
                <FormRow
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  label="Email"
                  placeholder="Enter your email"
                />
                <p className="text-sm text-red-500">
                  {errors.email && touched.email && errors.email}
                </p>
              </label>
              <label>
                <FormRow
                  type="number"
                  name="telephone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.telephone}
                  label="Téléphone"
                  placeholder="Enter your tele number"
                />
                <p className="text-sm text-red-500">
                  {errors.telephone && touched.telephone && errors.telephone}
                </p>
              </label>
              <label>
                <FormRow
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  label="Password"
                  placeholder="Enter your password"
                />
                <p className="text-sm text-red-500">
                  {errors.password && touched.password && errors.password}
                </p>
              </label>
              <label>
                <FormRow
                  type="password"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirmPassword}
                  label="Confirm Password"
                  placeholder="Confirm your password"
                />
                <p className="text-sm text-red-500">
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword}
                </p>
              </label>

              {values.accountType[0] === 'Professionnel' ? (
                <>
                  {/* <label>
                    <FormRow
                      type="text"
                      name="ville"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.ville}
                      label="Ville"
                      placeholder="Enter votre ville"
                    />
                    <p className="text-sm text-red-500">
                      {errors.ville && touched.ville && errors.ville}
                    </p>
                  </label> */}
                  <label>
                    <FormRow
                      type="text"
                      name="enterprise"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.enterprise}
                      label="Entreprise"
                      placeholder="Enter le nom de l'entreprise"
                    />
                    <p className="text-sm text-red-500">
                      {errors.enterprise &&
                        touched.enterprise &&
                        errors.enterprise}
                    </p>
                  </label>
                  {/* <label
                    for="countries"
                    className="mb-2 block text-sm font-medium text-gray-800 "
                  >
                    Sélectionner la rubrique associée à votre activité
                    professionnelle*
                  </label> */}
                  <FormRowSelect
                    labelText="Ville"
                    name="ville"
                    value={values.ville}
                    handleChange={handleChange}
                    list={villeOptions}
                  />
                </>
              ) : (
                <div></div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border-green-500 bg-green-600 py-3 font-medium text-white hover:bg-green-500 hover:shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>S'inscrire</span>
              </button>
              <div className="flex flex-col">
                <p className="text-center">Vous avez déja une compte?</p>
                <a
                  href="/login"
                  className=" items-center space-x-1 text-center font-medium text-green-600"
                >
                  <span>Se Connecter !</span>
                </a>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}
