import React from 'react'
import InputRoot from '../../Input/InputRoot'
import icon from '../../../assets/mingcute_down-fill.svg'
import Button from '../../Button/Button'
import { useNavigate } from 'react-router-dom'
const ContentNavbar = ({children}) => {
  const navigate = useNavigate();
  return (
    <header className="w-full bg-black-900 py-[10px] text-white-principal px-[58px] text-2xl gap-y-4 flex flex-col">
    <div className="flex justify-between ">
      <div className="flex items-center font-medium">EasyFind</div>
      <div className="flex w-1/2">
        <InputRoot.Input className="text-black-900 pl-4 pr-10  py-1 text-base w-full mb-0 rounded outline-none h-10 ">
          <InputRoot.Icon>
            <img src={icon} alt="" className="w-5 " />
          </InputRoot.Icon>
        </InputRoot.Input>
      </div>
      <div className="flex gap-x-3">
        <Button onClick={()=>navigate("/login")}>
            Login
        </Button>
       <Button>
            Crie sua conta
       </Button>
      </div>
    </div>
    
      {children}
  </header>
  )
}

export default ContentNavbar