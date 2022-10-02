import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function FilterByDate() {
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div className=" ">
      <div className=" relative w-72 cursor-default  rounded-lg bg-gray-50 py-4   pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm md:py-4">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          placeholderText={'dd/mm/yyyy'}
          // minDate={new Date()}
          // maxDate={new Date()}
          filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
          showYearDropdown
          scrollableYearDropdown
        />
      </div>
    </div>
  )
}

export default FilterByDate
