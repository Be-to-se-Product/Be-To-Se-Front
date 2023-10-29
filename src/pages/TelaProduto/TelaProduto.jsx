import NavbarRoot from "../../componentes/Navbar/NavbarRoot"
import React, { useEffect } from 'react';
import star from "../../assets/star.svg"
import car from "../../assets/car-black.svg";
import bike from "../../assets/bike-black.svg";
import men from "../../assets/men-black.svg";
import jbl from "../../assets/JBL.png"
import jbl1 from "../../assets/JBL1.png"
import jbl2 from "../../assets/JBL2.png"
import jbl3 from "../../assets/JBL3.png"
import fast from "../../assets/fastshop.png"
import pix from "../../assets/pix.png"
import dinheiro from "../../assets/dinheiro.png"
import cartao from "../../assets/cartao.png"

function TelaProduto(){

    return(
        <div>
            <NavbarRoot.Content>
                <NavbarRoot.Menu>
                    <NavbarRoot.Item></NavbarRoot.Item>
                </NavbarRoot.Menu>
            </NavbarRoot.Content>
            <main className="flex pt-[85px] flex-col" style={{backgroundColor:"#EAEAEA" }}>
                <div className="flex flex-row justify-between mx-auto gap-x-40">
                    <div className="flex flex-col">
                        <div>
                            <img src={jbl} alt="" />
                        </div>
                        <div className="flex flex-row gap-x-2">
                            <img src={jbl} alt="" className="h-24" />
                            <img src={jbl1} alt="" className="h-24" />
                            <img src={jbl2} alt="" className="h-24" />
                            <img src={jbl3} alt="" className="h-24" />
                        </div>
                        <div className="flex flex-col pt-[80px] max-w-md gap-y-6">
                            <h2 className="text-2xl">Descrição</h2>
                            <p className="text-justify">
                            Produto de ótima qualidade pensando sempre no seu
                            conforto e bem estar meus amigos esse produto é para você acredite. Qualquer dúvida entra em contato comigo
                            </p>
                        </div>
                    </div>
                    
                    <div>
                        <div className="flex flex-col gap-y-6">
                            <h2 className="text-2xl font-medium">Fone de Ouvido JBL Tune 720BT</h2>
                            <p className="text-5xl	">RS299,00</p>
                            <div className="flex flex-row gap-x-1">
                                <img src={star} alt="" className="w-4 h-4" />
                                <p>(4,6)</p>
                            </div>
                            <p className="text-2xl">Tempo do percurso</p>
                            <div className="flex flex-row gap-x-12">
                                <div className="flex flex-col gap-x-2">
                                    <img src={men} alt="" className="h-5"/>
                                    <p className="text-base">30m</p>
                                </div>
                                <div className="flex flex-col gap-x-2">
                                    <img src={car} alt="" className="h-5"/>
                                    <p className="text-base">30m</p>
                                </div>
                                <div className="flex flex-col gap-x-2">
                                    <img src={bike} alt="" className="h-5"/>
                                    <p className="text-base">30m</p>
                                </div>
                            </div>
                            <div className="flex flex-row gap-x-2 items-center">
                                <p className="text-base">Quantidade</p>
                                <input className="px-4 py-2 w-32 rounded-lg" type="text" value="0 Unidades" />
                                <button>+</button>
                            </div>
                        </div>
                        <div className="flex pt-[40px] flex-col gap-y-4">
                            <button className="bg-orange-400 py-2 text-2xl font-medium rounded-lg">Reservar na loja</button>
                            <button className="bg-orange-400 py-2 text-2xl font-medium rounded-lg">Guardar no carrinho</button>
                        </div>
                        <div className="flex flex-col gap-y-9">
                            <div className="flex flex-col pt-[52px] gap-y-4">
                                <div className="flex flex-row gap-x-12 items-center">
                                    <img src={fast} alt="" className="rounded-full" />
                                    <p className="text-4xl font-medium">FastShop</p>
                                </div>
                                <div className="flex flex-row gap-x-2">
                                    <div className=" flex flex-row gap-x-1">
                                        <img src={star} alt="" className="w-4 h-4"/>
                                        <img src={star} alt="" className="w-4 h-4"/>
                                        <img src={star} alt="" className="w-4 h-4"/>
                                        <img src={star} alt="" className="w-4 h-4"/>
                                        <img src={star} alt="" className="w-4 h-4"/>
                                    </div>
                                    <p>(4,6)</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-4">
                                <p className="text-base">Meios de pagamento na loja</p>
                                <div className="flex flex-row gap-x-12">
                                    <div className="bg-black-100 px-8 py-2 drop-shadow-lg rounded-lg">
                                        <img src={dinheiro} alt="" className="h-8" />
                                    </div>
                                    <div className="bg-black-100 px-8 py-2 drop-shadow-lg rounded-lg">
                                        <img src={cartao} alt="" className="h-8" />
                                    </div>
                                    <div className="bg-black-100 px-8 py-2 drop-shadow-lg rounded-lg">
                                        <img src={pix} alt="" className="h-8"/>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-black-100 px-8 py-2 drop-shadow-lg rounded-lg text-blue-900">Ver catálogo completo de produtos</button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-between mx-auto pt-[44px]  gap-y-10">
                    <div className="flex flex-row gap-x-64">
                        <div className="flex flex-col gap-y-8">
                            <h2 className="text-base">Adicione uma nota</h2>
                            <div className="flex flex-row gap-x-2">
                                <img src={star} alt="" className="w-6 h-6"/>
                                <img src={star} alt="" className="w-6 h-6"/>
                                <img src={star} alt="" className="w-6 h-6"/>
                                <img src={star} alt="" className="w-6 h-6"/>
                                <img src={star} alt="" className="w-6 h-6"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-10">
                            <div className="flex flex-col gap-y-2">
                                <p>Adicione um comentário</p>
                                <textarea name="" id="" placeholder="Digite aqui" cols="65" rows="3" className="rounded-lg px-4 py-2"></textarea>
                            </div>
                                <button className="bg-orange-400 px-4 py-2 ml-auto font-medium rounded-lg">Publicar</button>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className=" flex flex-col">
                            <p>Notas dos clientes</p>
                            <div className="flex flex-row">
                                <div className="flex flex-row items-end	gap-x-2">
                                    <p className="text-4xl">4,2</p>
                                    <img src={star} alt="" className="h-2.5 mb-2"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-start gap-y-8">
                            <select className="bg-orange-400 px-2 py-2  font-medium rounded-full w-32" name="" id="">
                                <option value="">Ordernar</option>
                                <option value="">Maior nota</option>
                                <option value="">Menor nota</option>
                            </select>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-x-1">
                                    <img src={star} alt="" className="h-2.5 mb-2"/>
                                    <img src={star} alt="" className="h-2.5 mb-2"/>
                                    <img src={star} alt="" className="h-2.5 mb-2"/>
                                    <img src={star} alt="" className="h-2.5 mb-2"/>
                                    <img src={star} alt="" className="h-2.5 mb-2"/>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-x-1">
                                    <img src={star} alt="" className="h-2.5 mb-2"/>
                                    <img src={star} alt="" className="h-2.5 mb-2"/>
                                    <img src={star} alt="" className="h-2.5 mb-2"/>
                                    <img src={star} alt="" className="h-2.5 mb-2"/>
                                    <img src={star} alt="" className="h-2.5 mb-2"/>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-row gap-x-1">
                                    <img src={star} alt="" className="h-2.5 mb-2"/>
                                    <img src={star} alt="" className="h-2.5 mb-2"/>
                                    <img src={star} alt="" className="h-2.5 mb-2"/>
                                    <img src={star} alt="" className="h-2.5 mb-2"/>
                                    <img src={star} alt="" className="h-2.5 mb-2"/>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default TelaProduto;