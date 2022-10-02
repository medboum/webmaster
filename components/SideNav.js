import Link from 'next/link'
import { useRouter } from 'next/router'
import TheDisclosure from '../components/TheDisclosure'
import { ChevronUpIcon } from '@heroicons/react/solid'
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
  BellIcon,
} from '@heroicons/react/outline'
import Footer from '../components/layout/Footer'
import USerService from '../services/User_Service'
import { useEffect, useState } from 'react'

export default function SideNav() {
  const router = useRouter()
  const [user, setUser] = useState([])

  // Get the authenticated user role
  useEffect(() => {
    USerService.getRole().then((response) => {
      setUser(response.data)
    })
  }, [])
  // let role = user.map(({ role }) => role)
  // console.log('user role ' + user)

  const adminItems = [
    {
      href: '/admin/addCategory',
      title: 'CATÉGORIE',
    },
    {
      href: '/admin/addSubCategory',
      title: 'SOUS CATÉGORIE',
    },
    {
      href: '/admin/addFields',
      title: 'CHAMPS',
    },
    {
      href: '/admin/addresses',
      title: 'ADDRESSES',
    },
    {
      href: '/admin/users',
      title: 'Users',
    },
  ]
  // const menuItems = [
  //   {
  //     href: '/admin/mesannonces',
  //     title: 'ANNONCES',
  //   },
  //   {
  //     href: '/admin/valideAnnonce',
  //     title: ' VALIDATION ANNONCE',
  //   },
  //   {
  //     href: '/admin/favoris',
  //     title: 'FAVOURIS',
  //   },
  //   {
  //     href: '/admin/alert',
  //     title: 'ALERTS',
  //   },
  // ]
  const userItems = [
    {
      href: '/account/produits',
      title: 'Mes Produits',
    },
    {
      href: '/account/mesannonces',
      title: 'Mes ANNONCES',
    },
    {
      href: '/account/favoris',
      title: 'FAVOURIS',
    },
    {
      href: '/account/alert',
      title: 'ALERTS',
    },
  ]

  const deleteUserData = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user')
    }
  }

  // Headless UI
  return (
    <div className=" relative mb-3 flex flex-col bg-gray-100  md:-mt-6  md:min-h-screen">
      {/* <header className="sticky top-0 flex h-14 items-center justify-center bg-purple-200 font-semibold uppercase">
        Next.js sidebar menu
      </header> */}
      {/* <Header /> */}

      <div className="flex flex-1 flex-col  md:m-4 md:flex-row">
        <aside className="w-full rounded-lg bg-white pb-3 pt-4 shadow-xl md:w-60">
          <nav>
            {user === 'USER' ? (
              <>
                {' '}
                <TheDisclosure
                  title="Settings"
                  content={() => (
                    <ul>
                      {userItems.map(({ href, title }) => (
                        <li className="m-2 w-full" key={title}>
                          <Link href={href}>
                            <a
                              className={`flex w-full cursor-pointer rounded p-2 text-[14px] lowercase tracking-wide  text-gray-600 shadow-md  ${
                                router.asPath === href &&
                                'bg-gray-300 font-bold text-black shadow-md'
                              }`}
                            >
                              {title}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                />
                <TheDisclosure
                  title="Profil"
                  content={() => (
                    <ul>
                      <li className="m-2 w-full">
                        <Link href="/account/profil">
                          <a
                            className={`flex w-full cursor-pointer rounded p-2 text-[14px] tracking-wide  text-gray-600 shadow-md  ${
                              router.asPath === '/admin/profil' &&
                              'bg-gray-300 font-bold text-black shadow-md'
                            }`}
                          >
                            <div className="mt-[1px]">
                              <UserIcon width={16} height={16} />
                            </div>
                            <span className="ml-2">Profil</span>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  )}
                />
              </>
            ) : (
              <TheDisclosure
                title="Admin"
                content={() => (
                  <ul>
                    {adminItems.map(({ href, title }) => (
                      <li className="m-2 w-full" key={title}>
                        <Link href={href}>
                          <a
                            className={`flex w-full cursor-pointer rounded p-2 text-[14px] lowercase tracking-wide  text-gray-600 shadow-md  ${
                              router.asPath === href &&
                              'bg-gray-300 font-bold text-black shadow-md'
                            }`}
                          >
                            {title}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              />
            )}
            {/* 
            <TheDisclosure
              title="Mes annonces"
              content={() => (
                <ul>
                  {menuItems.map(({ href, title }) => (
                    <li className="m-2 w-full" key={title}>
                      <Link href={href}>
                        <a
                          className={`flex w-full cursor-pointer rounded p-2 text-[14px] lowercase tracking-wide  text-gray-600 shadow-md  ${
                            router.asPath === href &&
                            'bg-gray-300 font-bold text-black shadow-md'
                          }`}
                        >
                          {title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            /> */}

            {/* {} */}

            <TheDisclosure
              title="Se Deconnecter"
              content={() => (
                <ul>
                  <li className="m-2 w-full">
                    <Link href="/">
                      <a
                        onClick={() => deleteUserData()}
                        className={`flex w-full cursor-pointer rounded p-2 text-[14px] tracking-wide  text-gray-600 shadow-md  ${
                          router.asPath === '/' &&
                          'bg-gray-300 font-bold text-black shadow-md'
                        }`}
                      >
                        <div className="mt-[1px]">
                          <UserIcon width={16} height={16} />
                        </div>
                        <span className="ml-2">Se Déconnecter</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              )}
            />
          </nav>
        </aside>
      </div>
    </div>
  )
}
