import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../../../utils/utils'
import { ArrowDropDown, ArrowDropDownCircle, DownhillSkiing } from '@mui/icons-material'
import { descriptografar } from '../../../utils/Autheticated'
import {useNavigate} from 'react-router-dom'
const AuthenticatedNavbar = () => {
    const navigate = useNavigate();
    const dadosUsuario = JSON.parse(descriptografar(sessionStorage.getItem('USERDETAILS')));
    useEffect(()=>{
        console.log(dadosUsuario);
    },[])

    const [isShow, setIsShow] = useState(false);
  return (
    <div className=' flex flex-col items-center justify-center '>
        <div className='flex relative gap-x-3'>
        <h3 className='text-base'>{dadosUsuario?.nome?.split(" ")[0]}</h3>
       <ArrowDropDownCircle onClick={()=>setIsShow(!isShow)}/>
        <div className={`text-base absolute left-[-20px] top-10 w-max z-10 bg-white-principal text-black-900 rounded px-3 py-3 border ${!isShow && "hidden"} `}>
            <ul className='flex flex-col gap-y-2 '>
                <li><Link to={"/usuario/pedidos"} className='cursor-pointer'>Compras</Link></li>
                <li><Link to={"/usuario/pedidos"} className='cursor-pointer'>Dados Cadastrais </Link></li>
                <li onClick={()=>logout(navigate)} className='cursor-pointer'>Sair</li>
            </ul>
        </div>
        </div>
        
    </div>
  )
}

export default AuthenticatedNavbar