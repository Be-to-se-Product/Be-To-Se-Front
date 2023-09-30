import React from 'react'

const Label = ({children}) => {
  return (
    <label htmlFor="" className="mb-2 text-black-900  ">
    {children}
    </label>
  )
}

export default Label