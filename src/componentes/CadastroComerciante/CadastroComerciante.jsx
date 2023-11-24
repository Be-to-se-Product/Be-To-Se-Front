import React from "react";
import PrimeiroPasso from "./PasosDoCadastro/PrimeiroPasso";
import NavbarRoot from "../../componentes/Navbar/NavbarRoot";
import BreadCrumbCadastroCliente from "./BreadCrumbCadastroCliente";

function CadastroComerciante() {
    return (
        <>
        <div className=" flex flex-col items-center justify-center">
        <NavbarRoot.Content>
            <NavbarRoot.Menu>
                <NavbarRoot.Item></NavbarRoot.Item>
            </NavbarRoot.Menu>
        </NavbarRoot.Content>
        
            <div className="m-10 bg-white p-10 rounded shadow-md w-100 mx-auto">
                <BreadCrumbCadastroCliente />
                <h2 className="text-2xl font-semibold mb-4">Cadastro</h2>
                {/* Formulário de Cadastro */}
                <PrimeiroPasso />
        </div>
    </div>

        </>
    )
}
export default CadastroComerciante;