import React from 'react'
import { HeartIcon, HomeIcon } from '@heroicons/react/outline'
import ActionsSide from '../components/ActionsSide'
import AnnonceForm from '../components/pulishannonce/AnnonceForm'
import AnnonceGuide from '../components/pulishannonce/AnnonceGuide'

export default function publishAnnonce() {
  return (
    <div className="mt-16 flex w-full flex-col  bg-gray-100 md:flex-row">
      <div className="flex w-full flex-[0.70]  items-center justify-center ">
        <AnnonceForm />
      </div>
      <div className="flex  w-full flex-[0.3] ">
        <AnnonceGuide />
      </div>
    </div>
  )
}
