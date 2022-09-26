import React from 'react'
import ActionItem from '../ActionItem'
import { HeartIcon } from '@heroicons/react/outline'
import GuideTitre from './GuideTitre'

export default function AnnonceGuide() {
  return (
    <div>
      <div></div>
      <div className="mt-10 mb-6 flex h-[290px] w-[76%]  flex-col rounded-xl bg-white  shadow-xl">
        {/* Titre */}

        <div className="mb-3 w-full rounded-tl-xl rounded-tr-xl bg-gray-400 p-3 text-white">
          <p className=" text-center font-medium">
            COMMENT VENDRE RAPIDEMENT?{' '}
          </p>
        </div>

        <GuideTitre titre="Utilisez un bref titre et une description de l'article" />
        <GuideTitre titre="Vérifiez l'article avant de le publier" />
        <GuideTitre titre="Mettez un prix raisonnable" />
        <GuideTitre titre="Ajouter des belles photos à votre annonce" />
        <GuideTitre titre="Assurez-vous de poster dans la bonne catégorie" />
      </div>
    </div>
  )
}
