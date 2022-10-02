import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import Title from '../../components/payment_step/Title'
import PaymentTypeTitle from '../../components/payment_step/PaymentTypeTitle'
import BankTransfer from '../../components/payment_step/BankTransfer'
import DebitCard from '../../components/payment_step/DebitCard'
import PayByPoints from '../../components/payment_step/PayByPoints'

export default function Checkout() {
  const router = useRouter()
  const [isLoginSelected, setIsLoginSelected] = useState(true)
  const [paymentType, setPaymentType] = useState('D')
  const a = isLoginSelected

  const handleChange = (event) => {
    setPaymentType(event.target.value)
  }

  useEffect(() => {
    a === isLoginSelected
  }, [isLoginSelected])
  return (
    <div className=" mx-[15%] mt-24 mb-20  flex w-[70%] flex-col ">
      <div>
        {' '}
        <Title />
        <PaymentTypeTitle
          handleChange={handleChange}
          checked={paymentType === 'D'}
          label="Cash on Delivery"
          name="D"
          value="D"
        />
        <PaymentTypeTitle
          handleChange={handleChange}
          checked={paymentType === 'T'}
          label="Bank Transfer"
          name="T"
          value="T"
        />
        {paymentType === 'T' ? <BankTransfer /> : <div></div>}
        <PaymentTypeTitle
          handleChange={handleChange}
          checked={paymentType === 'I'}
          label="Pay using Visa or Master Card"
          name="I"
          value="I"
        />
        {paymentType === 'I' ? <DebitCard /> : <div></div>}
        <div className="mx-[20%] mt-6 w-[60%]">
          <button
            onClick={() => router.push('/payment/orderSent')}
            className=" flex w-full transform items-center  justify-center  rounded-full bg-green-500 px-4 py-2 tracking-wide text-white transition-colors duration-200  hover:bg-green-600 "
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}
