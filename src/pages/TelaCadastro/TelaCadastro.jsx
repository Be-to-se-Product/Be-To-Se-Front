import NavbarRoot from "@componentes/Navbar/NavbarRoot";
import Button from "@/componentes/Button/Button";
import { useNavigate } from "react-router-dom";

const TelaCadastro = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#EAEAEA] overflow-hidden max-h-screen">
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
      <div className="h-screen flex justify-center items-center">
        <div className="py-10 gap-12 rounded-lg mb-40 flex flex-col items-center w-1/4 bg-black-100">
          <p className="text-2xl">Cadastro de Usuário</p>
          <div className="flex flex-col gap-6 items-center w-full px-4">
            <Button onClick={() => navigate("/cadastro/comerciante")}>
              Sou comerciante
            </Button>
            <Button onClick={() => navigate("/cadastro/usuario")}>
              Sou consumidor
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelaCadastro;
