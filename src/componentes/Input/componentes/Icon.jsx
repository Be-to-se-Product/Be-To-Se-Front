import React from 'react'


const Icon = ({children}) => {
  return (
    <div className='absolute flex items-center justify-center h-full px-3 right-2'>
        {children}
    </div>
  )
}

export default Icon