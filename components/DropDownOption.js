import React from 'react'

export default function DropDownOption({ text, Icon }) {
  return (
    <div className="flex flex-row ">
      <Icon className="mr-2 h-5 w-5" />
      <p className="">{text}</p>
    </div>
  )
}
