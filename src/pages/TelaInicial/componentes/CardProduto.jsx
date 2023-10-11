import react from "react";
import imgProduto from "..//../../assets/cocacola.svg"
import Button from "../../../componentes/Button/Button.jsx";



const CardProduto = (props) => {
    return (
        <div className="w-[180px] h-[300px] bg-white-principal p-4 flex flex-col gap-4 rounded-md ">
            <div className=" border border-gray-300 h-[150px] rounded-md ">
                <div className=" flex flex-col gap-2  ">
                    <img src={imgProduto} alt="imagem" className="w-screen rounded " />
                    <div className=" px-4 py-5 gap-3 flex justify-content align-center">
                        <p className="">
                            BEBIDAS
                        </p>
                        <p className="">
                            4,8
                        </p>
                    </div>
                    <div className="">
                        <p className="">
                            R$ 40,90
                        </p>


                        <p>
                            R$ 43,97
                        </p>
                    </div>
                    <div className="flex justify-center relative rounded-md">
                        <Button>COMPRAR</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProduto;