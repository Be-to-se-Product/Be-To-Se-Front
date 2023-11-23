import React from "react";
import Navbar from "../../componentes/Navbar/NavbarRoot";
import InputRoot from "../../componentes/Input/InputRoot";
import StepperRoot from "../../componentes/Stepper/StepperRoot";
import Button from "../../componentes/Button/Button";

const CadastroUsuario = () => {
  return (
    <>
      <Navbar.Content>
        <Navbar.Menu>
          <Navbar.Item />
        </Navbar.Menu>
      </Navbar.Content>

      <main className="w-full h-[89vh] bg-black-200 flex justify-center ">
        <form action="" className="w-2/5    px-10 py-10">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-center text-2xl">Informações do usuário</h2>
            
            <div className="w-5/12 mx-auto ">
            <StepperRoot.Content>
                <StepperRoot.Step number={1}>
                    <div className="text-center">
                    Info.<br/>Pessoais
                    </div>
                  </StepperRoot.Step>  
                <StepperRoot.Step number={2}>
                <div className="text-center" >
                    Info.<br/>Acesso
                    </div>
                </StepperRoot.Step >
            </StepperRoot.Content>
            </div>
            <div className="flex flex-col gap-y-4 bg-white-principal p-10 rounded-sm">
              <div>
                <InputRoot.Input type="text" placeholder="Nome">
                  <InputRoot.Label>Nome</InputRoot.Label>
                </InputRoot.Input>
              </div>

              <div className="grid grid-cols-[2fr,1.5fr] gap-x-4">
                <div>
                  <InputRoot.Input type="text" placeholder="Nome">
                    <InputRoot.Label>Nome</InputRoot.Label>
                  </InputRoot.Input>
                </div>
                <div>
                  <InputRoot.Input type="text" placeholder="Nome">
                    <InputRoot.Label>Nome</InputRoot.Label>
                  </InputRoot.Input>
                </div>
              </div>

              <div className="flex gap-x-4  ">
                <div>
                  <InputRoot.Input type="text" placeholder="Nome">
                    <InputRoot.Label>Nome</InputRoot.Label>
                  </InputRoot.Input>
                </div>
                <div>
                  <InputRoot.Input type="text" placeholder="Nome">
                    <InputRoot.Label>Nome</InputRoot.Label>
                  </InputRoot.Input>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-10/12 mx-auto justify-center mt-8 gap-x-5">
          <Button>Retroceder</Button>

            <Button>Avançar</Button>
          </div>
        </form>
      </main>
    </>
  );
};

export default CadastroUsuario;
