import React, { useEffect, useState } from "react";
import Navbar from "../../componentes/Navbar/NavbarRoot";

import StepperRoot from "../../componentes/Stepper/StepperRoot";
import Button from "../../componentes/Button/Button";
import api from "../../services/api";

import Step1 from "./componentes/Step1";
import Step2 from "./componentes/Step2";
import { removerMascaraCpf, removerMascaraTelefone } from "../../utils/formatadores";
import { criptografar } from "../../utils/Autheticated";

const CadastroUsuario = () => {
  const [stateAtual, setStateAtual] = useState(1);
  const [data, setData] = useState({});

  const avancar = (data) => {
    setData(prevState => ({ ...prevState, ...data }));
    if(stateAtual<steps.length-2){
      setStateAtual(stateAtual + 1)
    return
    };
    saveUser(data);
  };

  const saveUser = (dataFunction) => {
  

    const dataMerge = { ...data, ...dataFunction };


    const dataRequest = {
      nome: dataMerge.nome,
      cpf: removerMascaraCpf(dataMerge.cpf),
      celular:  removerMascaraTelefone(dataMerge.telefone),
      dataNascimento: dataMerge.dtNascimento,
      genero: dataMerge.genero,
      usuario:{
        email: dataMerge.email,
        senha: dataMerge.senha,
      }
     
    };

    api.post("/consumidores", dataRequest)
    .then((response) => {
    if(response.status==201){
      sessionStorage.setItem("userDetails",criptografar(response.data))
      setStateAtual(stateAtual + 1)
    };

    }
    ).catch((error) => {
      console.log(error);
    })
  }

  const retroceder = () => {
    setStateAtual(stateAtual - 1);
  };

 

  const steps = [
    <Step1 getDataForm={avancar} data={data}>
      <div className="flex w-10/12 mx-auto justify-center mt-8 gap-x-5">
        
        
        <Button>Avançar</Button>
      </div>
    </Step1>,
    <Step2 getDataForm={avancar}  data={data}>
      <div className="flex w-10/12 mx-auto justify-center mt-8 gap-x-5">
        <Button type="button" onClick={retroceder}>
          Retroceder
        </Button>
        <Button>Cadastrar</Button>
      </div>
    </Step2>
    ,
    <div className="flex w-10/12 mx-auto justify-center mt-8 gap-x-5">
      Agendamento concluido
      Redirecionando para a tela incial
    </div>
    ,
  ];


  return (
    <>
      <Navbar.Content>
        <Navbar.Menu>
          <Navbar.Item />
        </Navbar.Menu>
      </Navbar.Content>

      <main className="w-full h-[89vh] bg-black-200 flex justify-center ">
        <div className={`w-2/5  px-10 py-10 `}>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-center text-2xl">Informações do usuário</h2>

            <div className={`w-5/12 mx-auto `}>
              <StepperRoot.Content>
                <StepperRoot.Step number={1} stateAtual={stateAtual}>
                  <div className="text-center">
                    Info.
                    <br />
                    Pessoais
                  </div>
                </StepperRoot.Step>
                <StepperRoot.Step number={2} stateAtual={stateAtual}>
                  <div className="text-center">
                    Info.
                    <br />
                    Acesso
                  </div>
                </StepperRoot.Step>
              </StepperRoot.Content>
            </div>
            {steps[stateAtual]}
          </div>
        </div>
      </main>
    </>
  );
};

export default CadastroUsuario;
