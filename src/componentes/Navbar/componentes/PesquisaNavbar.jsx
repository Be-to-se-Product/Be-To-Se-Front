import React from 'react'
import InputRoot from '../../Input/InputRoot';

const PesquisaNavbar = () => {
  return (
    
    <div className="flex w-1/2">
      <InputRoot.Input className="text-black-900 pl-4 pr-10  py-1 text-base w-full mb-0 rounded outline-none h-10 ">
        <InputRoot.Icon>
          <img src={""} alt="" className="w-5 " />
        </InputRoot.Icon>
      </InputRoot.Input>
    </div>
    
 
  )
}

export default PesquisaNavbar;
