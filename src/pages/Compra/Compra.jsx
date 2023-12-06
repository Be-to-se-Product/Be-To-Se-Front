import React, { useEffect, useState } from 'react';
import arrow from "../../assets/arrow.svg";
import carrinho from "../../assets/pedido_feito.png"
import {descriptografar} from "../../utils/Autheticated"
import api from "../../services/api";
import CardProduto from './componentes/CardProduto';
import CardMetodo from './componentes/CardMetodo';
import {  useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Compra() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [rotate, setRotate] = useState(false);
    const [selectedOption, setSelectedOption] = useState('retireNaLoja');
    const [showPaymentMoment, setShowPaymentMoment] = useState(true);
    const [showMetodosAceito, setShowMetodosAceito] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showDivOverlay, setDivOverlay] = useState(true);
    const [userId, setUserId] = useState(null);
    const [produtos, setProdutos] = useState([]);
    const [estabelecimentoId, setEstabelecimentoId] = useState(null);
    const [metodos, setMetodos] = useState([]);
    const navigate = useNavigate();
    const [selectedMetodo, setSelectedMetodo] = useState(null);
    const location = useLocation();
    const itens = location.state;
    console.log(itens);

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

    const getProdutos = async () => {
        try {
            const res = await api.post(`/produtos/venda`, itens);
            console.log(res.data[0].idEstabelecimento);
            setEstabelecimentoId(res.data[0].idEstabelecimento);
            setProdutos(res.data.length === 0 ? [] : res.data);
            console.log(res.data);
    
            getMetodos(res.data[0].idEstabelecimento);
        } catch (err) {
        }
    };

      const getMetodos = (estabelecimentoId) => {
       // toast.loading("Carregando...");
        api
          .get(`/estabelecimentos/metodos/${estabelecimentoId}`)
          .then((res) => {
         //   toast.dismiss();
            setMetodos(res.data.length == 0 ? [] : res.data);
            console.log(res.data);
          })
          .catch((err) => {});
      };

    const finalizarCompra = () => {
        let idEstabelecimento = userId;
        let idMetodoPagamento=selectedMetodo;
        let isPagamentoOnline=false;
        let idConsumidor = userId;
        let metodo={
            idMetodoPagamento: idMetodoPagamento,
            isPagamentoOnline: false
        }
        const data = {
            idConsumidor,
            idEstabelecimento,
            itens,
            metodo
        };

        console.log("Payload:", JSON.stringify(data));
        //const loading = toast.loading("Carregando...");
        api
          .post("/pedidos", data)
          .then((response) => {
            //toast.dismiss(loading);
            //toast.success("Produto adicionado ao carrinho!", { autoClose: 2000 });
          })
          .catch((error) => {
           // toast.dismiss(loading);
          });
      };  

    useEffect(() => {
        const userDetailsCrypt = descriptografar(sessionStorage?.USERDETAILS);
        console.log(userDetailsCrypt);
        const { id } = JSON.parse(userDetailsCrypt);
        setUserId(id);
        getProdutos();
    }, []);

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
                            {metodos.map((metodo) => (
                                <CardMetodo 
                                    key={metodo.id}
                                    metodo={metodo.id}
                                    isSelected={selectedMetodo === metodo.id}
                                    onSelect={() => setSelectedMetodo(metodo.id)}
                                />
                            ))}
                        </div>
                        <div className='flex flex-row gap-x-8'>
                            <button className='bg-orange_opacity-principal py-2 px-4 h-max text-base font-medium rounded-lg w-52' onClick={handleBack}>
                                Voltar
                            </button>
                            <button className='bg-orange-principal py-2 px-4 h-max text-base font-medium rounded-lg w-52'onClick={()=>{
                                handleFinalize();
                                finalizarCompra();
                            }}>
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
                            <button className="py-2 text-xs font-medium text-blue-900" onClick={()=>navigate(`/index`)}>
                                Voltar para página inicial
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div id='overlay' style={{...overlayStyle, display: showDivOverlay ? 'flex' : 'none'}}className='flex flex-col items-center'>
                <div className='flex flex-row py-8' style={innerContainerStyle}>
                    <button className='bg-orange-principal py-2 px-4 h-max text-base font-medium rounded-lg'onClick={()=>navigate(`/index`)}>
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
                <div className='flex flex-col gap-y-4 overflow-auto w-10/12'>
                    {produtos.map((produto) => (
                        <CardProduto
                            key={produto.id}
                            nome={produto.nome}
                            quantidade={produto.qtd}
                            preco={produto.preco}
                        />
                    ))}
                </div>
                    
            </div>
        </div>
    );
}

export default Compra;
