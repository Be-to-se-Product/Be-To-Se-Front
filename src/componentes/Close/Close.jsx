import React from 'react'

const Close = ({...props}) => {
  return (
    <button className='w-10 h-10' {...props}>
        <img src="/src/assets/close.png" alt="" />
    </button>
  )
}

export default Close