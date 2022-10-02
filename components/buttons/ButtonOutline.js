import React from 'react'

const ButtonOutline = ({ children }) => {
  return (
    <button
      className="text-white-500 shadow-orange rounded-lg border border-green-500
     bg-green-500 py-2 px-1 text-xs font-medium capitalize
     text-white  outline-none
     transition-all hover:bg-white hover:text-green-500 md:px-2 md:text-sm
       md:tracking-wide "
    >
      {' '}
      {children}
    </button>
  )
}

export default ButtonOutline
