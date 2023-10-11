import React from 'react'

const StepStepper = (props) => {
  return (
    <>
    <div className='flex flex-col justify-center items-center relative'>
    <span className={`rounded-full w-10 h-10 bg-orange-principal mb-2`}>
   
      {props?.icon}
    </span>
    {props.children}    
    </div>
  </>
   
  )
}

export default StepStepper