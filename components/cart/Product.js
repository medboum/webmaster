import Image from 'next/image'
import { useState } from 'react'
import image from '../../public/images/a.jpg'
import { XCircleIcon } from '@heroicons/react/outline'
import React, { useEffect } from 'react'
import FormData from 'form-data'
import axios from 'axios'
import USerService from '../../services/USer_Service'

export default function Product() {
  const [count, setCount] = useState(0)
  const [profile, setProfile] = useState([])

  const [cart, setcart] = useState(true)

  useEffect(() => {
    USerService.getAllPrivatePosts().then(
      (response) => {
        setProfile(response.data)
      },
      (error) => {
        console.log(error)
      }
    )
  }, [])
  
  useEffect(() => {
  axios.get(`http://localhost:128/shoppingCart/${profile.username}`)
   .then((response) => {
    setcart(response.data)
  })
}, [])



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
              السعر الكلي
            </p>
            <p className="mt-6 text-center  text-[14px] font-bold text-green-700  opacity-90 ">
              3000
            </p>
          </div>
          <div className="flex flex-[0.30] flex-col text-[12px] font-semibold opacity-50">
            <p className="font-arabicMedium text-center">الكمية</p>
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
                {count}
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
            <p className="font-arabicMedium text-center">سعر القطعة الواحدة</p>
            <p className="mt-6 text-center text-[13px] font-bold  text-gray-800">
              1 ps
            </p>
          </div>
        </div>
        <div className="flex[45%] flex w-full justify-end ">
          <p className=" font-arabicMedium flex items-center justify-center opacity-70 md:mx-10">
            اسم المنتج
          </p>
          <div className="w-40 duration-75 hover:scale-110 md:mx-10 ">
            {' '}
            <Image src={image} />
          </div>
        </div>
      </div>
    </div>
  )
}
