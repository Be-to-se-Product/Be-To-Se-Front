import { Input } from "postcss";
import NavbarRoot from "../../componentes/Navbar/NavbarRoot";
import Button from "../../componentes/Button/Button";
import CardProduto from "./componentes/CardProduto";
import { Switch } from "@mui/material";


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
                            <p className="flex justify-content items-center text-sm text-sky-500 underline ">
                                Ver mais produtos
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

                    <div className="flex w-auto flex-col items-center gap-[48px]">
                        <h2 className="text-4xl font-medium leading-[60px] text-center">
                            Conhecer novas lojas
                            <p className="text-sm text-sky-500 underline ">
                                Ver mais lojas
                            </p>
                            {/* <Switch
                                checked={checked}
                                onChange={handleChange}
                                inputProps={{ 'aria-label': 'controlled' }}
                            /> */}
                        </h2>
                    </div>

                    {/* <div className="w-10/12 mx-auto">
                    <h2 className="text-4xl font-medium leading-[60px] text-center">
                        Explore as principais categorias
                    </h2>
                </div>

                <div className="w-10/12 mx-auto">
                    <h2 className="text-4xl font-medium leading-[60px] text-center">
                        Oferta do dia
                        <p className="text-sm text-sky-500 underline ">
                            Ver mais produtos em oferta
                        </p>
                    </h2>
                </div> */}
                </main>
            </main>
        </div>
    )
}

export default TelaInicial;