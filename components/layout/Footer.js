import React from 'react'
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="relative bottom-0 mx-16 border-[1px]  border-x-white border-t-green-400 bg-white ">
      <div className=" grid w-full gap-8  py-12 px-4 text-gray-300 md:px-24 lg:grid-cols-3">
        <div className="">
          <h1 className="mb-1 w-full  font-rubik  text-3xl uppercase text-[#09f3a9]">
            Mantooj Shop
          </h1>
          <p className="py-4 text-gray-900">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="ml-[15%] mt-2 flex w-[70%] items-center justify-between md:my-6">
            <div className="duration-200 hover:scale-150">
              <FaFacebookSquare size={30} />
            </div>
            <div className="duration-200 hover:scale-150">
              <FaInstagram size={30} />
            </div>
            <div className="duration-200 hover:scale-150">
              <FaTwitterSquare size={30} />
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-between lg:col-span-2">
          <div className="md:ml-8">
            <h6 className="mb-2 font-medium  text-gray-800 duration-200 hover:scale-105">
              SITES RECOMMANDÉS
            </h6>
            <ul className="text-gray-700">
              <li className="cursor-pointer py-2 text-sm">Amazon</li>
              <li className="cursor-pointer py-2 text-sm">Ebay</li>
              <li className="cursor-pointer py-2 text-sm">AliExpress</li>
            </ul>
          </div>
          <div>
            <h6 className="mb-2 font-medium text-gray-900  duration-200  hover:scale-105">
              COMPTE
            </h6>
            <ul className="text-gray-700">
              <li className="cursor-pointer py-2 text-sm">Profile</li>
              <li className="cursor-pointer py-2 text-sm">S'identifier</li>
              <li className="cursor-pointer py-2 text-sm">S'inscrire</li>
              <li className="cursor-pointer py-2 text-sm">Mes annonces</li>
            </ul>
          </div>
          <div>
            <h6 className="mb-2 font-medium text-gray-800 duration-200 hover:scale-105">
              RÉGLEMENT
            </h6>
            <ul>
              <li className="cursor-pointer py-2 text-sm text-gray-700">
                termes et conditions
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="shadow-t-xl mx-4 border-[1px]  border-t-gray-200 bg-gray-200 md:mx-24" />
      <p className="flex items-center justify-center py-3 font-medium text-gray-700">
        © 2022 Mantooj Shop. TOUS LES DROITS SONT RÉSERVÉS.
      </p>
    </div>
  )
}

export default Footer
