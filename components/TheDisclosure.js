import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'

export default function TheDisclosure({ title, content }) {
  return (
    <div className="w-full px-4 ">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-1 ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-600 px-4 py-2 text-left text-sm font-medium text-white  hover:bg-green-600 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>{title}</span>
                <ChevronUpIcon
                  className={`${
                    open ? ' transform' : 'rotate-180'
                  } h-5 w-5 text-white `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-3  pb-2 text-sm text-gray-500">
                {content}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  )
}
