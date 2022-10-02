import React from 'react'

export default function InfoRow({ title, value }) {
  return (
    <div className="my-[6px] ml-[20%] flex w-[60%] flex-col  justify-end opacity-70">
      <p className="text-start font-arabicMedium text-[13px]">
        {' '}
        {title} : <span className="font-medium opacity-80">{value}</span>
      </p>
    </div>
  )
}
