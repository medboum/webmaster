import React, { useEffect, useState } from 'react'
import Image from 'next/image.js'
import DropDown from '../DropDown.js'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  UserIcon,
  LoginIcon,
  HomeIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline'
import Button from '../buttons/ButtonOutline'
import logo from '../../public/logo.png'
import ButtonOutline from '../buttons/ButtonOutline'
import HeaderOption from '../HeaderOption.js'
import Link from 'next/link'
import UserOptions from '../UserSettings.js'
import USerService from '../../services/User_Service.js'
import { useSelector } from 'react-redux'

export default function Header({ isAdmin }) {
  const { userRole } = useSelector((state) => state.user)

  // React.useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem('user'))
  //   if (user) {
  //     setCurrentUser(user)
  //   }
  // }, [])
  // useEffect(() => {
  //   console.log('user role ' + userRole.role)
  // })

  const [role, setRole] = useState([])

  // Get the authenticated user role
  useEffect(() => {
    setRole(userRole?.role)
  }, [userRole])

  return (
    <>
      <header className=" start-0  fixed   top-0 z-10 w-full   bg-gray-800 pb-2 shadow-md transition-all">
        <div className=" flex max-w-6xl justify-between lg:mx-auto">
          {/* LEFT */}
          <div className="mt-2 flex flex-row">
            {' '}
            <div className="visible mr-32 mt-2  sm:hidden">
              <DropDown />
            </div>
            <div className="relative ml-5 h-12 w-12 md:ml-0 md:h-16 md:w-32">
              <Image src={logo} layout="fill" objectFit="contain" />
            </div>
          </div>
          {role === '[ADMIN]' ? (
            <></>
          ) : (
            <>
              {/* MIDDLE - SEARCH INPUT FIELD */}
              <div className="max-x-xs mt-5 hidden flex-row  md:ml-10 md:block ">
                <div className="flex w-auto flex-row">
                  <div className="relative mt-1  cursor-pointer rounded-full  hover:text-green-600">
                    {' '}
                    <HeaderOption
                      href="/accueil"
                      text="Accueil"
                      Icon={HomeIcon}
                    />
                  </div>

                  {role === '[USER]' ? (
                    <>
                      <div className="relative mx-4  mt-1 cursor-pointer hover:text-green-600">
                        <HeaderOption
                          href="/account/profil"
                          text="profile"
                          Icon={UserIcon}
                        />
                      </div>{' '}
                      <UserOptions />
                      <div className="relative mx-4  mt-1 cursor-pointer hover:text-green-600">
                        <HeaderOption
                          href="/cart"
                          text="panier"
                          Icon={ShoppingCartIcon}
                        />
                      </div>{' '}
                      <div className="relative   mt-1 cursor-pointer hover:text-green-600">
                        <HeaderOption
                          href="/addproduct"
                          text=" addProduit "
                          Icon={ShoppingCartIcon}
                        />
                      </div>
                      {/* <div className="relative mx-8  mt-1 cursor-pointer hover:text-green-600">
                    <UserOptions />
                  </div> */}
                    </>
                  ) : (
                    <>
                      <div className="relative mx-8 mt-1 cursor-pointer hover:text-green-600">
                        <HeaderOption
                          href="/signup"
                          text="S'inscrire"
                          Icon={UserIcon}
                        />
                      </div>
                      <div className="relative mt-1  cursor-pointer hover:text-green-600">
                        {' '}
                        <HeaderOption
                          href="/login"
                          text="Se Connecter"
                          Icon={LoginIcon}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
              {/* RIGHT */}
              <div className="mt-2 mr-3 flex items-center justify-end md:mr-1  ">
                {/* <div className="relative mx-8  mt-1 cursor-pointer hover:text-green-600"> */}
                {/* </div> */}
                {role === '[USER]' ? (
                  <ButtonOutline>
                    <Link
                      href={role === '[USER]' ? '/publishAnnonce' : '/login'}
                    >
                      Publier une annonce
                    </Link>
                  </ButtonOutline>
                ) : (
                  <></>
                )}

                <></>
              </div>
            </>
          )}
        </div>
      </header>
      {/* <Sidebar /> */}
    </>
  )
}
