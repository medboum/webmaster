import { useRouter } from 'next/router'
import React from 'react'
import Button from './Button'
export default function TotalPriceCard() {
  const router = useRouter()

  return (
    <div className={``}>
      <div className="fixed bottom-5 left-0 right-0 z-50 mx-32 flex h-24 rounded-full border-2 border-green-600 bg-white">
        <div
          onClick={() => router.push('/products')}
          className="flex
      
      flex-[20%] items-center justify-center"
        >
          <div className="font-arabicMedium flex h-6 cursor-pointer items-center justify-center rounded-full bg-[#D8AA6B] py-5 px-5 tracking-wide text-white opacity-80  hover:opacity-100 ">
            العودة للمنتجات
          </div>
        </div>
        <div className="flex flex-[60%] items-center justify-center">
          <p className="mr-5 text-xl opacity-80">
            <strong>
              <span className="text-3xl">280</span> AED
            </strong>
          </p>
          <p className="font-arabicMedium cursor-pointer  tracking-tight opacity-70 ">
            المجموع الكلي
          </p>
        </div>
        <div className="flex flex-[20%] items-center justify-center">
          <div
            onClick={() => router.push('/payment')}
            className="flex
      
      flex-[20%] items-center justify-center"
          >
            <div className="font-arabicMedium flex  h-6  cursor-pointer items-center justify-center rounded-full bg-[#007530] py-5 px-5 tracking-wide text-white opacity-80  hover:opacity-100 ">
              اتمام عملية الشراء
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
