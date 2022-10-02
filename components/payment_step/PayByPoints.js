import React from 'react'
import { HomeIcon } from '@heroicons/react/outline'

export default function PayByPoints() {
  return (
    <div className=" mx-[26%] my-3 flex justify-end space-x-6 ">
      <div className="flex items-center space-x-2">
        <HomeIcon width={40} height={40} />
        <div className="flex flex-col ">
          <p className="text-[24px] font-bold">2500</p>
          <p className="font-arabicMedium text-sm text-green-600">
            اجمالي النقط
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {' '}
        <p className="font-arabicMedium text-sm tracking-tight opacity-80">
          {' '}
          لديك في حسابك
        </p>
      </div>
    </div>
  )
}
