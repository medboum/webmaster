/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { MenuIcon } from '@heroicons/react/outline'
import HeaderOption from './HeaderOption'
import DropDownOption from './DropDownOption'
import { UserIcon, LoginIcon, HomeIcon } from '@heroicons/react/outline'
import ProductSearch from '../components/ProductSearch.js'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Menu as="div" className="relative ml-3  ">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md  border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-100 active:bg-green-600 active:text-white">
          <MenuIcon className=" h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="elevation-15 absolute  mt-10 w-50 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p">
            <Menu.Item>
              {({ active }) => (
                <ProductSearch/>
              )}
            </Menu.Item>
           
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
