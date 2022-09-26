import React from 'react'

export default function ActionItem({ Icon, title, description }) {
  return (
    <div className="flex flex-col items-center py-4">
      <Icon className="h-16 w-16 text-green-500" />
      <p className="text:lg px-10 text-center font-bold text-black md:px-10 md:text-xl">
        {title}
      </p>
      <p className="p-2 px-20 text-center text-sm tracking-wide text-gray-700 md:px-16">
        {description}
      </p>
    </div>
  )
}
