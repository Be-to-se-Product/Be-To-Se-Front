import React, { useEffect, useState } from "react";
import StepperRoot from "../../../componentes/Stepper/StepperRoot";
import FormContext from "../../../context/Form/FormContext";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import api from "../../../services/api";
import Step6 from "./Step6";

const ModalLoja = ({ closeModal,getLista }) => {
  const [stateAtual, setStateAtual] = useState(0);
  const [storage, setStorage] = useState({});
  const [teste,setTeste] = useState(0);

  const nextStep = () => {
      setStateAtual((prev) => prev + 1);
  };
  const prevStep = () => {
    if (stateAtual - 1 >= 0) {
      setStateAtual((prev) => prev - 1);
    }
  };

  const steps=[
    
  ]

  useEffect(() => {
    if (stateAtual>5) {
      saveEstabelecimento(storage);
      closeModal();
      
    }
  }, [stateAtual]);

const saveEstabelecimento = (storage) => {

  const agenda = [];
  for (const [key, value] of Object.entries(storage.diaSemana)) {
    if(value.isOpen){
      agenda.push({
        dia:key,
        horarioInicio:value.horarioInicio,
        horarioFim:value.horarioFim,
      })
    }
    
  }
  const secao=storage.sessoes.map((sessao)=>sessao.texto)
 

  const estabelecimento = {
    nome:storage.nome,
    endereco:{
      cep:storage.cep,
      numero:storage.numero,
      bairro:storage.bairro,
      cidade:storage.cidade,
      estado:storage.estado,
      rua:storage.logradouro,
    },
    agenda,
    segmento:storage.segmento,
    telefoneContato:storage.telefoneContato,
    emailContato:storage.emailContato,
    referenciaFacebook:storage.referenciaFacebook,
    referenciaInstagram:storage.referenciaInstagram,
    secao,
    metodoPagamento:storage.metodosPagamento,
  }


  api.post("/estabelecimentos",estabelecimento).then((response)=>{
    
    if(response.status==201 && storage.imagem.length>0){
      const formData = new FormData();
      formData.append("imagem", storage.imagem[0]);
      api.post(`/estabelecimentos/${response.data.id}/imagem`,formData).then((response)=>{
        
      }).catch((error)=>{
        console.log(error);
      })
      closeModal(false)
      getLista();
      
    }
  }).catch((error)=>{
    console.log(error);
  })
}
  return (
    <section className="flex flex-col w-[900px]  bg-white-principal gap-y-10 h-[750px] py-20 px-16 ">
      <div
        className="absolute top-8 right-12 font-semibold cursor-pointer"
        onClick={() => closeModal()}
      >
        X
      </div>
      <div className="flex flex-col items-center  justify-center w-full gap-y-10">
        <h2 className="text-2xl font-medium">Cadastro de Loja</h2>
        <StepperRoot.Content percentage={100}>
          <StepperRoot.Step number={1} stateAtual={stateAtual}>
            Dados da loja
          </StepperRoot.Step>
          <StepperRoot.Step number={2} stateAtual={stateAtual}>
            Endereço
          </StepperRoot.Step>
          <StepperRoot.Step number={3} stateAtual={stateAtual}>
            Agenda
          </StepperRoot.Step>
          <StepperRoot.Step number={4} stateAtual={stateAtual}>
            Seções
          </StepperRoot.Step>
          <StepperRoot.Step number={5} stateAtual={stateAtual}>
            Met. de pagamento
          </StepperRoot.Step>
          <StepperRoot.Step number={6} stateAtual={stateAtual}>
            Foto
          </StepperRoot.Step>
        </StepperRoot.Content>

        
      </div>

      <FormContext.Provider
        value={{ storage, setStorage, nextStep, prevStep, stateAtual }}
      >
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 teste={teste} setTeste={setTeste}/>
        <Step5 />
        <Step6 />
      </FormContext.Provider>
    </section>
  );
};

export default ModalLoja;
