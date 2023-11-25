import NavbarRoot from "../../componentes/Navbar/NavbarRoot";
import Switch from "../../componentes/Switch/BotaoSwitch";
import CardProdutoCoca from "./componentes/CardProdutoCoca";



function TelaPesquisa(props) {

    return (
        <div >
  <NavbarRoot.Content>
        <NavbarRoot.ContentTop>
          <NavbarRoot.Logo/>
          <NavbarRoot.Pesquisa/>
          {sessionStorage.USERDETAILS ? (<NavbarRoot.Authenticated/>) : (<NavbarRoot.Sign/>)}
          
        </NavbarRoot.ContentTop>
        <NavbarRoot.Menu>
          <NavbarRoot.Item></NavbarRoot.Item>
        </NavbarRoot.Menu>
      </NavbarRoot.Content>

            <main className="flex pt-[48px] flex-col items-center gap-[48px]">
                <main className="flex w-auto flex-col items-center gap-[48px]">
                    <div className="flex flex-row w-full justify-between items-center ">
                        <div className="flex w-[715px] h-[39px] gap-10 pl-4">
                            <div className="flex pt-2 pr-2 pb-2 pl-2 items-center border-2 gap-4">
                                <h2>
                                    Todos os filtros
                                </h2>
                            </div>
                            <div className="flex pt-2 pr-2 pb-2 pl-2 items-center border-2 gap-4">
                                <h2>
                                    Todos os filtros
                                </h2>
                            </div>
                            <div className="flex pt-2 pr-2 pb-2 pl-2 items-center border-2 gap-4">
                                <h2>
                                    Todos os filtros
                                </h2>
                            </div>
                            <div className="flex pt-2 pr-2 pb-2 pl-2 items-center border-2 gap-4">
                                <h2>
                                    Todos os filtros
                                </h2>
                            </div>
                        </div>
                        <div className="flex w-[200px] justify-end items-center gap-3">
                            <p className="">
                                Ver no mapa
                            </p>
                            <Switch></Switch>
                        </div>
                    </div>



                    <div className="flex w-full gap-10 items-center pl-4">
                        <h2 className="text-xl">
                            Resultado da pesquisa:
                        </h2>
                        <p className="text-xl">
                            "Coca-cola"
                        </p>
                    </div>

                    <div className="w-auto mx-auto pl-3 pr-3 py-4 gap-3 flex justify-content align-center">
                        <CardProdutoCoca></CardProdutoCoca>
                        <CardProdutoCoca></CardProdutoCoca>
                        <CardProdutoCoca></CardProdutoCoca>
                        <CardProdutoCoca></CardProdutoCoca>
                        <CardProdutoCoca></CardProdutoCoca>
                        <CardProdutoCoca></CardProdutoCoca>
                    </div>

                    <div className="w-auto mx-auto pl-3 pr-3 py-4 gap-3 flex justify-content align-center">
                        <CardProdutoCoca></CardProdutoCoca>
                        <CardProdutoCoca></CardProdutoCoca>
                        <CardProdutoCoca></CardProdutoCoca>
                        <CardProdutoCoca></CardProdutoCoca>
                        <CardProdutoCoca></CardProdutoCoca>
                        <CardProdutoCoca></CardProdutoCoca>
                    </div>

                    <div className="w-auto mx-auto pl-3 pr-3 py-4 gap-3 flex justify-content align-center">
                        <CardProdutoCoca></CardProdutoCoca>
                        <CardProdutoCoca></CardProdutoCoca>
                        <CardProdutoCoca></CardProdutoCoca>
                        <CardProdutoCoca></CardProdutoCoca>
                        <CardProdutoCoca></CardProdutoCoca>
                        <CardProdutoCoca></CardProdutoCoca>
                    </div>
                </main>
            </main>
        </div>
    )
}

export default TelaPesquisa;