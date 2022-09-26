import React from 'react'
import ActionItem from './ActionItem'
import {
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  HomeIcon,
} from '@heroicons/react/outline'

export default function ActionsSide() {
  return (
    <div className="mt-10 mb-6 md:mr-10">
      <ActionItem
        Icon={HeartIcon}
        title="Créez votre liste d'annonces préférées!"
        description="Avec LHAMZA vous pouvez ainsi sélectionner vos annonces favoris et les bien 
          gérer dans une liste bien organisé dans votre profile"
      />
    </div>
  )
}
