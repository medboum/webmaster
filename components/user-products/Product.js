import Image from 'next/image'
import React from 'react'
import ProductOptions from './ProductOptions'

export default function Product({ photo, details, prix, options }) {
  function GraphCMSImageLoader({ src }) {
    return `http://localhost:128/download/${src}`
  }

  return (
    <>
      <tr>
        <td className="2/5 flex justify-center  border-b border-gray-200 bg-gray-50 px-5 py-5 text-sm">
          <div className="flex h-24 w-24 flex-shrink-0 sm:table-cell  ">
            <Image
              loader={GraphCMSImageLoader}
              src={photo}
              width={200}
              
              height={200}
            />
          </div>
          {/* </div> */}
        </td>
        <td className="w-2/5 border-b border-gray-200  px-5 py-5 text-sm">
          <p className="whitespace-no-wrap text-center text-gray-900">
            {details}
          </p>
        </td>
        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap text-center font-medium text-gray-900">
            {prix}
          </p>
        </td>
        <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
          <p className="whitespace-no-wrap text-center text-gray-900">
            <ProductOptions />
          </p>
        </td>
      </tr>
    </>
  )
}
