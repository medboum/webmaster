import Image from 'next/image'
import React from 'react'
import slide3 from '../../public/images/slide_C.png'
import annonce from '../../public/megaphone.png'

export default function Annonce() {
  return (
    <div className="flex w-full rounded-md p-1">
      <div className="flex-[50%] rounded-tl-xl rounded-bl-xl">
        <Image src={slide3} />
      </div>
      <div
        className="flex flex-[50%] flex-col
      items-center justify-center space-y-2 rounded-tr-xl rounded-br-xl
      bg-gradient-to-r from-gray-50 via-green-100 to-green-400"
      >
        <Image width={50} height={50} src={annonce} />{' '}
        <h2 className="text-[24px] font-medium">Titre de l'annoce</h2>
        <h2>Rabat</h2>
        <h2>Type d'annoce</h2>
      </div>{' '}
      {/* <div className="rotate-10 flex-[5%]"> */}
      {/* </div> */}
    </div>
  )
}
