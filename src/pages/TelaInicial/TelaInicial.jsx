import { Input } from "postcss";
import NavbarRoot from "../../componentes/Navbar/NavbarRoot";
import Button from "../../componentes/Button/Button";
import CardProduto from "./componentes/CardProduto";

function TelaInicial(props) {
    return (
        <div >
            <NavbarRoot.Content>
                <NavbarRoot.Menu>
                    <NavbarRoot.Item></NavbarRoot.Item>
                </NavbarRoot.Menu>
            </NavbarRoot.Content>

            <main className="max-w-auto mx-auto flex flex-col gap-y-32 mt-8 ">
                <div className="w-10/12 mx-auto">
                    <h2 className="text-4xl font-medium leading-[60px] text-center">
                        Mais vendidos da Região
                        <p className="text-sm text-sky-500 underline ">
                            Ver mais produtos
                        </p>
                    </h2>

                    <div className="w-auto mx-auto pl-3 pr-3 py-4 gap-7 bg-black-600 flex justify-content align-center">
                        <CardProduto></CardProduto>
                        <CardProduto></CardProduto>
                        <CardProduto></CardProduto>
                        <CardProduto></CardProduto>
                        <CardProduto></CardProduto>
                        <CardProduto></CardProduto>
                        <CardProduto></CardProduto>
                        <CardProduto></CardProduto>
                    </div>

                </div>

                <div className="w-10/12 mx-auto">
                    <h2 className="text-4xl font-medium leading-[60px] text-center">
                        Conhecer novas lojas
                        <p className="text-sm text-sky-500 underline ">
                            Ver mais lojas
                        </p>
                    </h2>
                </div>

                <div className="w-10/12 mx-auto">
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
                </div>
            </main>
        </div>
    )
}

export default TelaInicial;