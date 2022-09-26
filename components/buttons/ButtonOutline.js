import React from 'react'

const ButtonOutline = ({ children }) => {
  return (
    <button
      className="bg-white-500 hover:text-white-500 hover:shadow-orange rounded-lg border
     border-green-500 py-2 px-1 text-xs font-medium capitalize
     text-green-500  outline-none
     transition-all hover:bg-green-500 hover:text-white md:px-2 md:text-sm
       md:tracking-wide "
    >
      {' '}
      {children}
    </button>
  )
}

export default ButtonOutline
