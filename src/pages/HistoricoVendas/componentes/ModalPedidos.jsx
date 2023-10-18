import React from 'react'
import Button from '../../../componentes/Button/Button'

const ModalPedidos = () => {
  return (
    <div>
    <div className='w-[379px] flex items-center gap-x-2'>
        <div className='w-14 flex justify-center'>
            <img src="/src/assets/cocacola.svg" alt="" />
        </div>
        <div>
            <h3 className='text-base'>Meia Crew</h3>
            <h4 className='text-xs'>(1 Unidade)</h4>
            <span className='text-sm'>R$ 99,99 (Unidade)</span>
        </div>
        <Button className={"text-xs "}>Ver Item</Button>
    </div>
    </div>
  )
}

export default ModalPedidos