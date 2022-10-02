import Image from 'next/image'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Carousel from 'react-elastic-carousel'
import slide1 from '../../public/images/slide_A.png'
import slide2 from '../../public/images/slide_B.png'
import slide3 from '../../public/images/slide_C.png'
import Annonce from './Annonce'

const items = [
  { id: 1, image: slide1 },
  { id: 2, image: slide2 },
  { id: 3, image: slide3 },
]

export default function AnnonceSlider() {
  //   const [items, setItems] = useState(items)

  return (
    <>
      <div className="mx-[5%] mb-10 mt-28 w-[90%] ">
        {' '}
        <Carousel enableAutoPlay autoPlaySpeed={3000} itemsToShow={1}>
          {items.map((item) => (
            <div key={item.id} className="flex rounded-xl">
              <Annonce />
            </div>
          ))}
        </Carousel>
        {/* <Carousel className="text-red-600 ">
            {items.map((item) => (
              <div key={item.id} className="flex rounded-xl">
                <Image
                  width={1000}
                  height={500}
                   className="rounded-xl"
                  src={item.image}
                />
              </div>
            ))}
          </Carousel> */}
      </div>
    </>
  )
}
