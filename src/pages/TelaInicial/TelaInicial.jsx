import { Input } from "postcss";
import NavbarRoot from "../../componentes/Navbar/NavbarRoot";
import Button from "../../componentes/Button/Button";
import CardProduto from "./componentes/CardProduto";
import BotaoSwitch from "../../componentes/Switch/BotaoSwitch";
import CardLoja from "./componentes/CardLoja";
import CardCategoria from "./componentes/CardCategoria";
import CardOferta from "./componentes/CardOferta";

function TelaInicial(props) {
    return (
        <div >
            <NavbarRoot.Content>
                <NavbarRoot.Menu>
                    <NavbarRoot.Item></NavbarRoot.Item>
                </NavbarRoot.Menu>
            </NavbarRoot.Content>

            <main className="flex pt-[48px] flex-col items-center gap-[48px]">
                <main className="flex w-auto flex-col items-center gap-[48px]">
                    <div className="flex flex-col items-center gap-[48px]">
                        <h2 className="flex gap-[8px] text-4xl font-medium leading-[60px] text-center">
                            Mais vendidos da Região
                            <p className="flex gap-[50px] justify-content items-center text-sm">
                                Ver mais produtos
                                <div className="flex w-auto gap-[50px] h-[48px] justify-end items-center">
                                    <p className="flex gap-[3px] items-center text-sm ">
                                        Ver no mapa
                                        <BotaoSwitch></BotaoSwitch>
                                    </p>
                                </div>
                            </p>

                        </h2>

                        <div className="w-auto mx-auto pl-3 pr-3 py-4 gap-3 flex justify-content align-center">
                            <CardProduto></CardProduto>
                            <CardProduto></CardProduto>
                            <CardProduto></CardProduto>
                            <CardProduto></CardProduto>
                            <CardProduto></CardProduto>
                            <CardProduto></CardProduto>
                        </div>

                    </div>

                    <div className="flex flex-col items-center gap-[48px]">
                        <h2 className="flex gap-[8px] text-4xl font-medium leading-[60px] text-center">
                            Conhecer novas lojas
                            <p className="flex justify-content items-center text-sm text-sky-500 underline ">
                                Ver mais lojas
                            </p>
                        </h2>

                        <div className="w-auto mx-auto pl-3 pr-3 py-4 gap-12 flex justify-content align-center">
                            <CardLoja></CardLoja>
                            <CardLoja></CardLoja>
                            <CardLoja></CardLoja>
                            <CardLoja></CardLoja>
                            <CardLoja></CardLoja>
                        </div>

                    </div>

                    <div className="flex flex-col items-center gap-[48px]">
                        <h2 className="flex gap-[8px] text-4xl font-medium leading-[60px] text-center">
                            Explore as principais categorias
                        </h2>

                        <div className="w-auto mx-auto pl-3 pr-3 py-4 gap-3 flex justify-content align-center">
                            <CardCategoria></CardCategoria>
                        </div>
                    </div>

                    <div className="flex flex-col items-center gap-[48px]">
                        <h2 className="flex gap-[8px] text-4xl font-medium leading-[60px] text-center">
                            Oferta do dia
                            <p className="flex justify-content items-center text-sm text-sky-500 underline ">
                                Ver mais produtos em oferta
                            </p>
                        </h2>

                        <div className="w-auto mx-auto pl-3 pr-3 py-4 gap-12 flex justify-content align-center">
                            <CardOferta></CardOferta>
                            <CardOferta></CardOferta>
                            <CardOferta></CardOferta>
                        </div>

                    </div>
                </main>
            </main>
        </div>
    )
}

export default TelaInicial;