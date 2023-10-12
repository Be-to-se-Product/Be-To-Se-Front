import React from 'react'

const Label = ({children,...props}) => {
  return (
    <label className="mb-2 text-base text-black-900 " {...props}>
    {children}
    </label>
  )
}

export default Label