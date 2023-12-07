import React from "react";
import NavbarRoot from "../../componentes/Navbar/NavbarRoot";
import Button from "../../componentes/Button/Button";
import { useNavigate } from "react-router-dom";
const SwitchCadastro = () => {
  const navigate = useNavigate();
  return (
    <>
      <NavbarRoot.Content>
        <NavbarRoot.ContentTop>
          <NavbarRoot.Logo />
          <NavbarRoot.Pesquisa />
          {sessionStorage.USERDETAILS ? (
            <NavbarRoot.Authenticated />
          ) : (
            <NavbarRoot.Sign />
          )}
        </NavbarRoot.ContentTop>
        <NavbarRoot.Menu>
          <NavbarRoot.Item></NavbarRoot.Item>
        </NavbarRoot.Menu>
      </NavbarRoot.Content>

      <div className="flex flex-col items-center justify-center h-[86vh] bg-black-300 ">
        <div className="flex flex-col gap-y-8 bg-white-principal  px-6 py-6 w-3/12  rounded-md">
          <h2 className="text-xl font-medium text-center ">
            Cadastro de usuário
          </h2>
          <div className="flex flex-col gap-y-4">
            <Button onClick={() => navigate("/cadastro/usuario")}>
              Sou usuário
            </Button>
            <Button onClick={() => navigate("/cadastro/comerciante")}>
            Sou comerciante
            </Button>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default SwitchCadastro;
