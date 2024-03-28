import React from 'react'


const Icon = ({children,...props}) => {
  return (
    <div className='absolute flex items-center justify-center h-full px-3 right-2' {...props}>
        {children}
    </div>
  )
}

export default Icon