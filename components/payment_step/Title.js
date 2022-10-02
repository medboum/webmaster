import React from 'react'
import { Home, HomeIcon } from '@heroicons/react/outline'

export default function Title() {
  return (
    <div className="mx-[10%] flex justify-start rounded-xl bg-gray-100 px-2 py-2.5">
      <p className="font-arabicBold font-semibold tracking-wide text-red-600">
        Please choose the payment method
      </p>{' '}
      <div className="mx-3 text-amber-300 ">
        {' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      </div>
    </div>
  )
}
