import React, { useState } from 'react';
import arrow from "../../assets/arrow.svg";
import pix from "../../assets/pix.png"
import carrinho from "../../assets/pedido_feito.png"

function Compra() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [rotate, setRotate] = useState(false);
    const [selectedOption, setSelectedOption] = useState('retireNaLoja');
    const [showPaymentMoment, setShowPaymentMoment] = useState(true);
    const [showMetodosAceito, setShowMetodosAceito] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showDivOverlay, setDivOverlay] = useState(true);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };
    const handleBack = () => {
        setShowPaymentMoment(true);
        setShowMetodosAceito(false);
    };

    const handleFinalize = () => {
        setShowPaymentMoment(false);
        setShowMetodosAceito(false);
        setShowOverlay(false);
        setShowSuccess(true);
        setDivOverlay(false)
    };

    const handleContinue = () => {
        if (selectedOption === 'retireNaLoja') {
        } else if (selectedOption === 'pagamentoNoEstabelecimento') {
            setShowPaymentMoment(false);
            setShowMetodosAceito(true);
        }
    };

    const overlayStyle = {
        position: 'fixed',
        bottom: showOverlay ? '0' : '-57%',
        right: 0,
        width: 'calc(100% - 144px)',
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
        <div className="flex flex-row">
            <div className="flex flex-col h-screen w-40 bg-black-900 items-center justify-center">
                <div className='flex flex-col gap-y-10'>
                    <div className='flex h-8 w-8 rounded-full bg-orange-principal'></div>
                    <div className='flex h-8 w-8 rounded-full bg-black-500'></div>
                    <div className='flex h-8 w-8 rounded-full bg-black-500'></div>
                </div>
            </div>
            <div className='flex flex-col w-screen items-center 'style={{ backgroundColor: "#EAEAEA" }}>
                <div style={{ display: showPaymentMoment ? 'block' : 'none' }}>
                    <div id='momento_pagamento' className='flex flex-col mt-20 w-full items-center gap-y-14'>
                        <h2 className='text-2xl'>Em que momento você quer pagar pelo pedido?</h2>
                        <div className='flex flex-col gap-y-6 w-full items-center '>
                            <div className='flex flex-row px-8 py-2 gap-x-6 bg-black-100 w-full rounded-lg'>
                                <input 
                                    type="checkbox"
                                    checked={selectedOption === 'retireNaLoja'}
                                    onChange={() => handleOptionChange('retireNaLoja')}
                                />
                                <p>Pague aqui e retire na loja</p>
                            </div>
                            <div className='flex flex-row px-8 py-2 gap-x-6 bg-black-100 w-full rounded-lg'>
                                <input 
                                    type="checkbox" className='flex rounded-full' 
                                    checked={selectedOption === 'pagamentoNoEstabelecimento'}
                                    onChange={() => handleOptionChange('pagamentoNoEstabelecimento')}
                                />
                                <p>Realizar o pagamento no estabelecimento</p>
                            </div>
                        </div>
                        <button className='bg-orange-principal py-2 px-4 h-max text-base font-medium rounded-lg w-52' onClick={handleContinue}>Continuar</button>
                    </div>
                </div>

                <div style={{ display: showMetodosAceito ? 'block' : 'none' }}>
                    <div id='metodos_aceito' className=' flex flex-col mt-20 w-full items-center gap-y-14'>
                        <h2 className='text-2xl'>Métodos de pagamento acieto no estabelecimento</h2>
                        <div className='flex flex-row gap-y-6 w-full items-center justify-center gap-3 flex-wrap'style={{maxWidth: '800px', maxHeight: '200px', overflow: 'auto'}}>
                            <div className='flex flex-row drop-shadow-lg'>
                                <div className='flex flex-row bg-black-100 w-20 h-20 border-solid border-2 border-stroke-principal items-center justify-center'>
                                <img src={pix} alt="" className="h-14" />
                                </div>
                                <div className='flex flex-row px-8 py-6 bg-black-100 w-72 rounded-e-lg border-solid border-2 border-stroke-principal border-l-0'>
                                    <p>PIX</p>
                                </div>
                            </div>
                            <div className='flex flex-row drop-shadow-lg'>
                                <div className='flex flex-row bg-black-100 w-20 h-20 border-solid border-2 border-stroke-principal items-center justify-center'>
                                <img src={pix} alt="" className="h-14" />
                                </div>
                                <div className='flex flex-row px-8 py-6 bg-black-100 w-72 rounded-e-lg border-solid border-2 border-stroke-principal border-l-0'>
                                    <p>PIX</p>
                                </div>
                            </div>
                            <div className='flex flex-row drop-shadow-lg'>
                                <div className='flex flex-row bg-black-100 w-20 h-20 border-solid border-2 border-stroke-principal items-center justify-center'>
                                <img src={pix} alt="" className="h-14" />
                                </div>
                                <div className='flex flex-row px-8 py-6 bg-black-100 w-72 rounded-e-lg border-solid border-2 border-stroke-principal border-l-0'>
                                    <p>PIX</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row gap-x-8'>
                            <button className='bg-orange_opacity-principal py-2 px-4 h-max text-base font-medium rounded-lg w-52' onClick={handleBack}>
                                Voltar
                            </button>
                            <button className='bg-orange-principal py-2 px-4 h-max text-base font-medium rounded-lg w-52'onClick={handleFinalize}>
                            Finalizar
                            </button>
                        </div>
                    </div>
                </div>

                <div id='finalizado' style={{display: showSuccess ? 'block' : 'none'}}>
                    <div className=' flex flex-col mt-20 w-full items-center gap-y-14'>
                        <div className='flex flex-col gap-y-8'>
                            <div className='flex flex-col gap-y-6 items-center'>
                                <img src={carrinho} alt="" className='h-36 w-36'/>
                                <p>Pedido feito com suceso!</p>
                            </div>
                            <p className='w-96 text-center'>Seu pedido será enviado para aprovação do comerciante. Para acompanhar o pedido clique no botão abaixo.</p>
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            <button className='bg-orange-principal py-2 px-8 h-max text-base font-medium rounded-lg'>
                                Acompanhar o pedido
                            </button>
                            <button className="py-2 text-xs font-medium text-blue-900">
                                Voltar para página inicial
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id='overlay' style={{...overlayStyle, display: showDivOverlay ? 'flex' : 'none'}}className='flex flex-col items-center'>
                <div className='flex flex-row py-8' style={innerContainerStyle}>
                    <button className='bg-orange-principal py-2 px-4 h-max text-base font-medium rounded-lg'>
                        Cancelar compra
                    </button>
                    <div className='flex flex-col items-center transform -translate-y-2/3'>
                        <button id='up_down'className='h-16 w-16 bg-orange-principal rounded-full flex items-center justify-center border-2 border-slate-950' onClick={() => {setShowOverlay(!showOverlay); setRotate(!rotate);}}>
                            <img src={arrow} alt="" style={{ transform: rotate ? 'rotate(180deg)' : 'none', transition: 'transform 0.5s' }} />
                        </button>
                        <p>Ver itens da compra</p>
                    </div>
                    <p className='font-medium'>Total a pagar: R$1529,95</p>
                </div>
            </div>
        </div>
    );
}

export default Compra;
