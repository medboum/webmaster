import React from 'react'

export default function CheckBoxItem({ label, name, value }) {
  return (
    <div className="flex flex-row">
      {' '}
      <input
        name={name}
        type="checkbox"
        value={value}
        className="w-4 rounded-full border border-slate-200 py-3 px-3 hover:shadow focus:border-slate-500 focus:outline-none"
      />
      <p className="mb:pb-2 ml-3 text-sm font-medium text-slate-700 md:pb-0">
        {label}
      </p>
    </div>
  )
}
