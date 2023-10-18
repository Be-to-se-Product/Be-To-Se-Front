import React from 'react'

const BoxComerciante = (props) => {
  return (
    <section className={`w-full  text-2xl mx-[33px] ${props.className}`}>
        {props.children}
    </section>
  )
}

export default BoxComerciante