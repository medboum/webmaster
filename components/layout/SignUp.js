import React from 'react'
import ActionItem from '../ActionItem'
import SignUpForm from '../SignUpForm'
import { HeartIcon, HomeIcon } from '@heroicons/react/outline'
import ActionsSide from '../ActionsSide'

export default function SignUp() {
  return (
    <div className="mt-16 flex w-full flex-col  bg-gray-100 md:flex-row">
      <div className="flex w-full flex-[0.65]  items-center justify-center ">
        <SignUpForm />
      </div>
      <div className="flex  w-full flex-[0.35] ">
        <ActionsSide />
      </div>
    </div>
  )
}
