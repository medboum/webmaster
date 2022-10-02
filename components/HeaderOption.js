import React from 'react'
import Link from 'next/link'

export default function HeaderOption({ text, Icon, href }) {
  return (
    <>
      <Link href={href}>
        <div className="flex flex-row items-center justify-center rounded-full md:flex-col lg:flex-col">
          <Icon className="h-5 w-5 text-center text-gray-900 opacity-60 hover:animate-bounce " />
          <p className="opacity-800 text-sm text-gray-900">{text}</p>
        </div>
      </Link>
    </>
  )
}
