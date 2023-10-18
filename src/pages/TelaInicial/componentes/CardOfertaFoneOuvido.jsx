import React from "react";
import Button from "../../../componentes/Button/Button";
import imgProduto from "../../../assets/FoneDeOuvido.png"


const CardOfertaFoneOuvido = (props) => {
    return (
        <div className="flex w-auto h-auto items-center">
            <div className="flex w-[560px] h-[342px] flex-col justify-center items-center border-2">
                <div className="flex w-[1252px] justify-between items-center">
                    <div className="flex w-[61px] items-start gap-16 bg-orange-principal">
                    </div>
                </div>
                <div className="flex items-center gap-[36px]">
                    <div className="flex w-auto h-[190px]">
                        <img src={imgProduto} alt="" />
                    </div>

                    <div className="flex w-[281px] flex-col items-start">
                        <div className="flex flex-col items-start gap-4">
                            <h2 className="text-3xl">
                                Fone de Ouvido
                                <p className="text-lg">
                                JBL Tune 720BT
                                </p>
                            </h2>
                            <div className="flex flex-col w-auto h-auto gap-3 ">
                                <p className="text-lg line-through">
                                    R$ 329,40
                                </p>
                                <h2 className="text-5xl">
                                    R$ 255,99
                                </h2>
                                <Button>Comprar</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CardOfertaFoneOuvido;