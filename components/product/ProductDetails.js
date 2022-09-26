import Image from 'next/image'
import React, { useState } from 'react'
import b from '../../public/images/b.jpg'
import { useParams } from 'react-router-dom'
import WhatsappIcon from '../../public/images/whatsapp.png'
import FormData from 'form-data'
import { useRouter } from 'next/router'
import  { useEffect } from 'react'
import USerService from '../../services/USer_Service'

import axios from 'axios'
const ProductDetails = ({ data }) => {
  const [productInfo, setProductInfo] = useState([])
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const productId = useParams()
  const [pro, setPro] = React.useState([])
  const [count, setCount] = useState(1)
  const [profile, setProfile] = useState([])


   const router = useRouter()

  const formData = new FormData()
  function GraphCMSImageLoader({ src }) {
    return `http://localhost:128/download/${src}`
  }
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
  function but(){
    formData.append('id', data.id_pro)
    formData.append('quantity', count)
    formData.append('owner', profile.username)
    axios
            .post('http://localhost:128/addToCart', formData)
            .then(function (response) {
              router.push('/accueil')
            })
            .catch(function (error) {
              console.log(error)
            })

  }

  return (
    <div className="mx-2 mt-20  items-start justify-center rounded-md bg-white py-20 px-4  shadow-2xl md:flex md:px-6 2xl:px-20">
      <div className=" my-10 w-80 rounded-xl text-center lg:w-2/5 xl:w-2/6">
        <Image
          loader={GraphCMSImageLoader}
          src={`${data.image}`}
          width={400}
          height={360}
        />
      </div>
      <div className="mt-6 md:ml-6 md:mt-0 md:w-1/2 lg:ml-8 xl:w-2/5">
        <div className="flex justify-between border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">{data.owner}</p>
          <h1
            className="
							
							text-xl
							font-semibold
							leading-7
							text-gray-800
							lg:text-2xl
							lg:leading-6
						"
          >
            {data.titre}
          </h1>
        </div>
        <div>
          <div className="border-b border-gray-200 py-4">
            <div
              onClick={() => setShow2(!show2)}
              className="flex cursor-pointer items-center justify-between"
            >
              <p className="font-teko text-base text-[24px] leading-4 text-gray-800">
                Description
              </p>
              <button
                className="
									cursor-pointer
									rounded focus:outline-none focus:ring-2 focus:ring-gray-400
									focus:ring-offset-2
								"
                aria-label="show or hide"
              >
                <svg
                  className={'transform ' + (show2 ? 'rotate-180' : 'rotate-0')}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                'mt-4 pt-4 pr-12 text-base leading-normal text-gray-600 ' +
                (show2 ? 'block' : 'hidden')
              }
              id="sect"
            >
              {data.descpription}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-b border-gray-200 py-4">
          <p className="font-teko text-base text-[24px] leading-4 text-gray-800">
            Quantity
          </p>
          <div className="flex items-center justify-center">
            <p className="mr-3 text-sm font-medium leading-none text-gray-600">
              38 items
            </p>
          </div>
        </div>

        <div>
          <div className="mt-7 border-t border-b border-gray-200 py-4">
            <div
              onClick={() => setShow(!show)}
              className="flex cursor-pointer items-center justify-between"
            >
              <p className="font-teko text-[24px] text-base leading-4 text-gray-800">
                Datails
              </p>
              <button
                className="
									cursor-pointer
									rounded focus:outline-none focus:ring-2 focus:ring-gray-400
									focus:ring-offset-2
								"
                aria-label="show or hide"
              >
                <svg
                  className={'transform ' + (show ? 'rotate-180' : 'rotate-0')}
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 1L5 5L1 1"
                    stroke="#4B5563"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div
              className={
                'mt-4 pt-4 pr-12 text-base leading-normal text-gray-600 ' +
                (show ? 'block' : 'hidden')
              }
              id="sect"
            >
              {data.descpription}
            </div>
          </div>
        

        <div>
          <p className="flex justify-between py-4">
            <span className="text-start font-teko text-[24px] uppercase">
              à partit de :
            </span>
            <span className="text-right text-2xl font-bold text-green-500">
              {data.prix} MAD
            </span>
          </p>
        </div>
        <div className="flex justify-between border-b border-gray-200 pb-6">

        
         <p className="font-teko text-[24px] text-base leading-4 text-gray-800">
         QUANTITÉ
              </p>

        <div className="mt-4 flex items-center  justify-center">
              <p
                onClick={() => {
                  count > 0 ? setCount(count - 1) : setCount(count)
                }}
                className="cursor-pointer rounded-[7px] border-[2px] border-gray-500 px-[10px] text-[20px] font-bold"
              >
                -
              </p>
              <p className="-mx-[2px] rounded-[7px]  border-[2.5px] border-gray-500 px-20 py-[6px] font-bold">
                {count}
              </p>
              <p
                onClick={() => setCount(count + 1)}
                className="cursor-pointer rounded-[7px] border-[2px] border-gray-500 px-[10px] text-[20px] font-bold"
              >
                +
              </p>
            </div>
          </div>
          </div>
       <button
          className="
						flex w-full items-center justify-center
						bg-gray-800
						py-4
						text-base
						leading-none
						text-white
						hover:bg-gray-700
						focus:outline-none
						focus:ring-2
						focus:ring-gray-800
						focus:ring-offset-2
					"
          onClick={but}
        >
            <div className="mr-2 mt-[1px] ">
            {' '}
          </div>
         add to cart 
        </button>
      </div>
    </div>
  )
}

export default ProductDetails
