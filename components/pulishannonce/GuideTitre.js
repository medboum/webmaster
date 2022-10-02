import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'

export default function GuideTitre({ titre }) {
  return (
    <div className="flex flex-row px-4 py-1">
      <div className="mr-2 md:mt-1">
        {' '}
        <CheckIcon width={16} height={16} />
      </div>
      <p className=" text-[15px]">{titre}</p>
    </div>
  )
}
