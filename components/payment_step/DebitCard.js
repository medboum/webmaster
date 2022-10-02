import Image from 'next/image'
import React from 'react'
import visa from '../../public/images/visa.png'

export default function DebitCard() {
  return (
    <div>
      <div className="relative m-auto my-3 h-56 w-96 transform rounded-xl text-white shadow-2xl transition-transform hover:scale-105">
        <img
          className="relative h-full w-full rounded-xl object-cover opacity-50"
          src="https://i.imgur.com/kGkSg1v.png"
        />

        <div className="absolute top-3 w-full px-4">
          <div className="flex justify-end space-x-2">
            {' '}
            <div className="flex h-14 w-14 items-center justify-center">
              {' '}
              <Image src={visa} />
            </div>
            <img className="h-14 w-14 " src="https://i.imgur.com/bbPHJVe.png" />
          </div>
          <div className="-mt-2">
            {' '}
            <p className="py-1 text-[13px] font-medium text-black opacity-70">
              Card Number
            </p>
            <input
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              className="w-[53%] rounded-md border-2 border-gray-400 bg-slate-50 py-1 px-1 text-sm font-medium text-black focus:bg-white"
            />
          </div>
          <div className="w-full pt-3 pr-6">
            <div className="flex w-full">
              <div className=" flex-[50%]">
                <div className="w-full">
                  {' '}
                  <p className="py-1  text-[13px] font-medium text-black opacity-70">
                    Tutiliare de la carte
                  </p>
                  <input
                    type="text"
                    placeholder="Barack Obama"
                    className="rounded-md border-2 border-gray-400 bg-slate-50 py-1 px-1 text-sm  font-medium text-black focus:bg-white"
                  />
                </div>
              </div>
              <div className=" mx-3 w-full flex-[50%]">
                <p className=" py-1 text-[13px] font-medium text-black opacity-70">
                  Exprire In
                </p>
                <div className="space-x-4">
                  <input
                    type="number"
                    placeholder=" 01"
                    className="w-[40%] rounded-md border-2 border-gray-400 bg-slate-50 py-1 px-1 text-sm font-medium text-black focus:bg-white"
                  ></input>
                  <input
                    type="number"
                    placeholder="06"
                    className="w-[40%] rounded-md border-2 border-gray-400 bg-slate-50 py-1 px-1 text-sm font-medium text-black focus:bg-white"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
