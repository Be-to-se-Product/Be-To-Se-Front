import React from 'react'

const ContentCardLoja = ({children,className}) => {
  return (
    <div className={`flex flex-col gap-y-4  w-[394px]  p-4 rounded-lg justify-between bg-white-principal border ${className}`}>
        {children}
    </div>
  )
}

export default ContentCardLoja