import Image from 'next/image'
import React from 'react'
import ProductOptions from './UserOptions'

export default function User({ username, email, telephone, options, onClick }) {
  return (
    <>
      <tr>
        <td className="2/5 border-b  border-gray-200 bg-gray-50 px-5 py-5 text-center text-sm">
          {email}
        </td>
        <td className="w-2/5 border-b border-gray-200  px-5 py-5 text-sm">
          <p className="whitespace-no-wrap text-center text-gray-900">
            {username}
          </p>
        </td>
        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap text-center font-medium text-gray-900">
            {telephone}
          </p>
        </td>
        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap text-center text-gray-900">
            <ProductOptions onClick={onClick} />
          </p>
        </td>
      </tr>
    </>
  )
}
