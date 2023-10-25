import React from "react";
import Button from "../../../componentes/Button/Button";
import imgProduto from "../../../assets/cocacolaCardProduto.jpg"


const CardOfertaCocaCola = (props) => {
    return (
        <div className="flex w-auto h-auto items-center">
            <div className="flex w-auto h-auto flex-col justify-center items-center border-2">
                <div className="flex w-auto justify-between items-center">
                    <div className="flex w-auto items-start gap-16 bg-orange-principal">

                    </div>
                </div>
                <div className="flex items-center gap-[36px]">
                    <div className="flex w-auto h-auto">
                        <img src={imgProduto} alt="" className="flex w-auto h-auto"/>
                    </div>

                    <div className="flex w-auto flex-col items-start">
                        <div className="flex flex-col items-start gap-4">
                            <h2 className="text-3xl">
                                Coca-cola
                            </h2>
                            <div className="flex flex-col w-full gap-3 ">
                                <p className="text-lg line-through">
                                    R$ 10,00
                                </p>
                                <h2 className="text-5xl">
                                    R$ 5,00
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
export default CardOfertaCocaCola;