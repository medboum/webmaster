import React from 'react'

export default function FormRow({
  type,
  name,
  onChange,
  onBlur,
  value,
  label,
  placeholder,
}) {
  return (
    <div className="flex flex-col  ">
      <p className="mr-4  mb-1.5 pb-2 text-sm font-medium text-slate-700 md:pb-0">
        {label}{' '}
      </p>
      {/* add name props */}
      <input
        type={type}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className="w-full rounded-lg border border-slate-200 py-[11px] px-3 hover:shadow focus:border-slate-500 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
  )
}
