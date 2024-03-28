import  "./style/animation-time.css"
import "./style/animation-popup.css"

const Aviso = () => {
  return (
    <div className='max-w-[350px] fixed flex flex-col h-max bg-white-principal rounded-md pop-up'>
        <div className='flex p-4'>
        <div className='px-2  text-lg font-medium text-gray-400 flex items-center'>ERRO</div>
        <div className='px-2 text-base text-black w-full text-center text-gray-900'>Houve um erro ao cadastrar o usuário</div>
        </div>
        <div className='time bg-green-600 rounded-full'></div>
    </div>
  )
}

export default Aviso