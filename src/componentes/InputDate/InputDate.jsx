import React, { useState } from 'react'
import { inputDataFormatoInterface } from '../../utils/formatadores';

const InputDate = ({register,defaultValue,...props}) => {
    const [valorAtual,setValorAtual] = useState(defaultValue || "");
  return (
    <div className='relative border border-black-400 px-4 py-2 rounded  flex items-center '>
        <div className='absolute bg-white-principal w-4/6  ' >{inputDataFormatoInterface(valorAtual)}</div>
        <input type="date" className='outline-none   w-full text- '  onInput={(e)=>setValorAtual(e.target.value)} {...register} {...props} defaultValue={defaultValue} />
    </div>
  )
}

export default InputDate