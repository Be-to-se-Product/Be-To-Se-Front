import React from 'react'

const RowTable = ({children,className}) => {
  return (
    <div className={`grid text-xs border border-gray-200  ${className} `}>
        {children}
    </div>
  )
}

export default RowTable