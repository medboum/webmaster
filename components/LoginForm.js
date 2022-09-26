import React, { useEffect, useState } from 'react'
import logo from './../public/logo.png'
import Image from 'next/image.js'
import { Formik } from 'formik'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { useRouter } from 'next/router'
import { AuthService } from '../services/auth_service'
import UserService from '../services/User_Service'

export default function LoginForm() {
  const router = useRouter()

  const [role, setRole] = useState([])

  // Get the authenticated user role
  useEffect(() => {
    UserService.getRole().then((response) => {
      setRole(response.data)
      console.log('role ' + role)
    })
  }, [])

  return (
    <div className="mt-24 mb-10 flex h-auto  w-full flex-col items-center justify-center rounded-xl border-b-4  border-t-4 border-amber-400 bg-white shadow-xl shadow-slate-300 md:w-full">
      <div className="relative mt-4 flex h-12  w-12  md:h-16 md:w-32">
        <Image src={logo} layout="fill" objectFit="contain" />
      </div>

      <p className="text-slate-500">Salut, bienvenue 👋</p>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address'
          }
          if (!values.password) {
            errors.password = 'Required'
          } else if (values.password.length < 3) {
            errors.password = 'Short password'
          }
          return errors
        }}
        onSubmit={(values) => {
          const { email, password } = values
          axios
            .post('http://localhost:128/login', {
              username: email,
              password: password,
            })
            .then(function (response) {
              AuthService.setUserData(response.data)
              role === 'USER'
                ? router.push('/accueil')
                : router.push('/admin/users')
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
          <form onSubmit={handleSubmit} className="my-10 w-[80%]">
            <div className="flex flex-col space-y-5">
              <label for="email">
                <p className="pb-2 font-medium text-slate-700">Email </p>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="w-full rounded-lg border border-slate-200 py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
                  placeholder="Enter email address"
                />
                <p className="text-sm text-red-500">
                  {errors.email && touched.email && errors.email}
                </p>
              </label>
              <label for="password">
                <p className="pb-2 font-medium text-slate-700">Mot de passe</p>
                <input
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="w-full rounded-lg border border-slate-200 py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
                  placeholder="Enter your password"
                />
                <p className="text-sm text-red-500">
                  {' '}
                  {errors.password && touched.password && errors.password}
                </p>
              </label>
              <div className="flex flex-row justify-between ">
                <div>
                  <label for="remember" className="mb-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="h-3 w-3 border-slate-200 focus:bg-amber-600"
                    />
                    <span className="ml-1"> Rester connecté</span>
                  </label>
                </div>
                <div>
                  <a href="#" className="font-medium text-amber-600">
                    Mot de passe oublié?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border-amber-500 bg-amber-400 py-3 font-medium text-white hover:bg-amber-500 hover:shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Login</span>
              </button>
              <div className="flex flex-col">
                <p className="text-center">Vous n'avez pas de compte?</p>
                <a
                  href="/signup"
                  className=" items-center space-x-1 text-center font-medium text-amber-600"
                >
                  <span>S'inscrire !</span>
                </a>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  )
}