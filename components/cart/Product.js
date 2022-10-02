import Image from 'next/image'
import React, { useState } from 'react'
import image from '../../public/images/a.jpg'
import { XCircleIcon } from '@heroicons/react/outline'

export default function Product ({ produit, quantity, image ,prix}) {
  function GraphCMSImageLoader({ src }) {
    return `http://localhost:128/download/${src}`
  }
  const [count, setCount] = useState(0)
  const [show, setShow] = useState(true)
  return (
    
    <div>
     
      <div className="mx-[5%] mb-2 h-0 w-[90%] border-[1px] border-black bg-black text-black opacity-10 " />
      <div
        // onClick={() => setShow(!show)}
        className="ml-[5%] mb-4 h-6 w-6 opacity-50"
      >
        <XCircleIcon color="red" />
      </div>
      <div className="mx-[5%] flex w-[90%]">
        <div className="flex[55%] mx-6 flex w-full  px-3 ">
          <div className="flex flex-[0.20] flex-col text-[12px] font-semibold">
            <p className="font-arabicMedium text-center opacity-50">
            prix total

            </p>
            <p className="mt-6 text-center  text-[14px] font-bold text-green-700  opacity-90 ">
            {prix}
            </p>
          </div>
          <div className="flex flex-[0.30] flex-col text-[12px] font-semibold opacity-50">
            <p className="font-arabicMedium text-center">Quantité</p>
            <div className="mt-4 flex items-center  justify-center">
              <p
                onClick={() => {
                  count > 0 ? setCount(count - 1) : setCount(count)
                }}
                className="cursor-pointer rounded-[7px] border-[2px] border-gray-500 px-[5px] text-[20px] font-bold"
              >
                -
              </p>
              <p className="-mx-[2px] rounded-[7px]  border-[2.5px] border-gray-500 px-3 py-[6px] font-bold">
              {quantity}
              </p>
              <p
                onClick={() => setCount(count + 1)}
                className="cursor-pointer rounded-[7px] border-[2px] border-gray-500 px-[2px] text-[20px] font-bold"
              >
                +
              </p>
            </div>
          </div>
          <div className="flex flex-[0.25] flex-col text-[12px] font-semibold opacity-50">
            <p className="font-arabicMedium text-center">prix par pièce</p>
            <p className="mt-6 text-center text-[13px] font-bold  text-gray-800">
            {prix}
            </p>
          </div>
        </div>
        <div className="flex[45%] flex w-full justify-end ">
          <p className=" font-arabicMedium flex items-center justify-center opacity-70 md:mx-10">
            {produit}
          </p>
          <div className="w-40 duration-75 hover:scale-110 md:mx-10 ">
            {' '}
            <Image
        loader={GraphCMSImageLoader}
        src={image}
        width={50}
        height={50}
      />
          </div>
        </div>
      </div>
    
    </div>
    
  )
}
