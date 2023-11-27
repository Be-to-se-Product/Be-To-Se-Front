import React, { useState } from 'react';
import arrow from "../../assets/arrow.svg";

const Menu = ({ isOpen, onClose, onToggle }) => {
  const menuStyle = {
    position: 'fixed',
    bottom: isOpen ? '0' : '-57%',
    left: 0,
    width: '100%',
    height: '80%',
    background: 'white',
    transition: 'bottom 0.3s',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    borderTop: '1px solid #ccc',
  };

  const innerContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
  };

  return (
    <div style={menuStyle} className='flex flex-col justify-center'>
      <div className='flex flex-row py-8' style={innerContainerStyle}>
        <button className='bg-orange-principal py-2 px-4 h-max text-base font-medium rounded-lg'>Cancelar compra</button>
        <div className='flex flex-col items-center'>
          <button id='up_down'className='h-16 w-16 bg-orange-principal rounded-full flex items-center justify-center ' onClick={onToggle}>
            <img src={arrow} alt="" />
          </button>
          <p>Ver itens da compra</p>
        </div>
        <p>total a pagar: R$1529,95</p>
      </div>
      <div className='flex flex-col gap-y-4 overflow-auto '>
        <div className='flex flex-row items-center gap-x-16 px-14 py-4'>
            <div className='h-20 w-20 bg-orange-principal'></div>
            <div className='flex flex-col items-start'>
            <p>Meia Crew Tie Dyed Sunwaves White Yclamen 36/9</p>
            <button>Excluir</button>
            </div>
            <div className='flex flex-row justify-center items-center gap-x-8'>
            <button className='h-6 w-6 bg-orange-principal flex items-center justify-center rounded-lg'>-</button>
            <p>1</p>
            <button className='h-6 w-6 bg-orange-principal flex items-center justify-center rounded-lg'>+</button>
            </div>
            <p>R$ 99,99</p>
        </div>
        
        <div className='flex flex-row items-center gap-x-16 px-14 py-4'>
            <div className='h-20 w-20 bg-orange-principal'></div>
            <div className='flex flex-col items-start'>
            <p>Meia Crew Tie Dyed Sunwaves White Yclamen 36/9</p>
            <button>Excluir</button>
            </div>
            <div className='flex flex-row justify-center items-center gap-x-8'>
            <button className='h-6 w-6 bg-orange-principal flex items-center justify-center rounded-lg'>-</button>
            <p>1</p>
            <button className='h-6 w-6 bg-orange-principal flex items-center justify-center rounded-lg'>+</button>
            </div>
            <p>R$ 99,99</p>
        </div>

        <div className='flex flex-row items-center gap-x-16 px-14 py-4'>
            <div className='h-20 w-20 bg-orange-principal'></div>
            <div className='flex flex-col items-start'>
            <p>Meia Crew Tie Dyed Sunwaves White Yclamen 36/9</p>
            <button>Excluir</button>
            </div>
            <div className='flex flex-row justify-center items-center gap-x-8'>
            <button className='h-6 w-6 bg-orange-principal flex items-center justify-center rounded-lg'>-</button>
            <p>1</p>
            <button className='h-6 w-6 bg-orange-principal flex items-center justify-center rounded-lg'>+</button>
            </div>
            <p>R$ 99,99</p>
        </div><div className='flex flex-row items-center gap-x-16 px-14 py-4'>
            <div className='h-20 w-20 bg-orange-principal'></div>
            <div className='flex flex-col items-start'>
            <p>Meia Crew Tie Dyed Sunwaves White Yclamen 36/9</p>
            <button>Excluir</button>
            </div>
            <div className='flex flex-row justify-center items-center gap-x-8'>
            <button className='h-6 w-6 bg-orange-principal flex items-center justify-center rounded-lg'>-</button>
            <p>1</p>
            <button className='h-6 w-6 bg-orange-principal flex items-center justify-center rounded-lg'>+</button>
            </div>
            <p>R$ 99,99</p>
        </div>        
      </div>
    </div>
  );
};

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div>
      <div className='flex flex-row'>
        <div className='flex flex-col h-screen w-36 bg-black-900'>
        </div>
        <div className='flex flex-col'>
          <button onClick={toggleMenu}>Abrir Menu</button>
          <Menu isOpen={menuIsOpen} onClose={toggleMenu} onToggle={toggleMenu} />
        </div>
      </div>
    </div>
  );
}

export default App;
