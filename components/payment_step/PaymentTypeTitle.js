import React from 'react'

export default function PaymentTypeTitle({
  name,
  value,
  label,
  checked,
  handleChange,
}) {
  return (
    <div className="mx-5 flex flex-col">
      <div className="mx-[10%] flex w-[80%]  py-4">
        <input
          name={name}
          onChange={handleChange}
          type="radio"
          checked={checked}
          value={value}
          className=" w-4 rounded-full border border-slate-200 py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
        />
        <p className="mb:pb-2 font-arabicMedium mr-3  pl-3 text-sm text-slate-700 md:pb-0">
          {label}
        </p>
      </div>
      <span className=" mx-[10%] mb-2 flex w-[80%] items-center justify-center bg-gray-300 p-[1px] "></span>
    </div>
  )
}
