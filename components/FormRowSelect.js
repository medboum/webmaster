const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className="">
      <label htmlFor={name} className="mb-4">
        {labelText || name}
      </label>
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className=" mt-2 block w-full rounded-lg border border-gray-300 bg-white  py-3 px-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500   "
        // className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
      >
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue} className="font-medium">
              {itemValue}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default FormRowSelect
