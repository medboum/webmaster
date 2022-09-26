import Link from 'next/link'
import { useRouter } from 'next/router'
import Header from './Header'
import TheDisclosure from '../TheDisclosure'
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
import Footer from './Footer'
import SideNav from '../SideNav'

export default function Layout({ children }) {
  return (
    <div>
      <div className="mt-20 flex min-h-screen flex-col bg-gray-100  shadow-xl">
        <div className="flex flex-1 flex-col  md:m-6 md:flex-row">
          <SideNav />
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  )
}
