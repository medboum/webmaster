//import  USerService from '../../services/USer_Service'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import USerService from '../../services/USer_Service'

export default function Profile() {
  const [profile, setProfile] = useState([])

  useEffect(() => {
    USerService.getAllPrivatePosts().then(
      (response) => {
        setProfile(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])
  console.log(profile)

  function button() {
    axios.pul('http://localhost:128/user/update')
  }

  return (
    <>
      <div className="bg-blueGray-100 relative mx-2 mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 bg-white py-8 shadow-lg">
        <h1 className="ml-4  font-semibold leading-tight md:ml-10 md:text-2xl">
          Bonjour username, bienvenue dans votre espace
        </h1>{' '}
        <div className="flex-auto px-4 pt-0 lg:px-10">
          <form>
            <h6 className="text-blueGray-400 mt-3 mb-6 rounded-md bg-gray-200 px-[17px] py-2 text-sm font-bold uppercase">
              Mes details
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Nom identificateur:
                  </label>
                  <input
                    type="text"
                    value={profile.username}
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    placeholder="hicham"
                  />
                </div>
              </div>

              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Numero de téléphone:
                  </label>
                  <input
                    value={profile.telephone}
                    type="text"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    placeholder="0619785761"
                  />
                </div>
              </div>
              <button
                className="ml-4 rounded border border-green-500 bg-transparent py-2 px-4 font-semibold text-green-700 hover:border-transparent hover:bg-green-500 hover:text-white"
                onClick={button}
              >
                Modifier
              </button>
            </div>

            <hr className="border-b-1 border-blueGray-300 mt-6" />

            <h6 className="text-blueGray-400 mt-3 mb-6 rounded-md bg-gray-200 px-[17px] py-2 text-sm font-bold uppercase">
              Paramètres
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    placeholder="******"
                  />
                </div>
              </div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="relative mb-3 w-full">
                  <label
                    className="text-blueGray-600 mb-2 block text-xs font-bold uppercase"
                    htmlFor="grid-password"
                  >
                    Confirmer le mot de passe
                  </label>
                  <input
                    type="password"
                    className="placeholder-blueGray-300 text-blueGray-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring"
                    placeholder="****"
                  />
                </div>
              </div>
              <button className="ml-4 rounded border border-green-500 bg-transparent py-2 px-4 font-semibold text-green-700 hover:border-transparent hover:bg-green-500 hover:text-white">
                Modifier
              </button>
            </div>

            <hr className="border-b-1 border-blueGray-300 mt-6" />
          </form>
        </div>
      </div>
    </>
  )
}
