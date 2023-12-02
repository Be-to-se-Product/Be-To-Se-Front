import React, { useState } from "react";
import StepperRoot from "../../../componentes/Stepper/StepperRoot";
import InputRoot from "../../../componentes/Input/InputRoot";
import Button from "../../../componentes/Button/Button";
import { orange } from "@mui/material/colors";

import RowSessao from "./RowSessao";
import { useForm } from 'react-hook-form';
import FormContext from "../../../context/Form/FormContext";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";


const ModalLoja = ({closeModal}) => {
 

  const [stateAtual, setStateAtual] = useState(0);
  const [storage,setStorage] = useState({});
  const steps = [<Step1/>,<Step2/>,<Step3/>,<Step4/>,<Step5/>]
  
const nextStep = () => {
  if(stateAtual+1 <steps.length){
  setStateAtual((prev) => prev + 1);
  return;
  }
  handleSubmit(storage);
}
const prevStep = () => {
  if(stateAtual-1 >= 0){
  setStateAtual((prev) => prev - 1);
  return;
  }
}
const handleSubmit = (data) => {
  console.log(entrou);
  console.log(data);
  closeModal();
}

  return (
    <section className="flex flex-col w-[850px]  bg-white-principal gap-y-10 h-[700px] py-20 px-16 ">
      <div className="absolute top-8 right-12 font-semibold cursor-pointer" onClick={()=>closeModal()}>
        X
      </div>
      <div className="flex flex-col items-center  justify-center w-full gap-y-10">
        <h2 className="text-2xl font-medium">Cadastro de Loja</h2>
        <StepperRoot.Content percentage={90}>
          <StepperRoot.Step number={1} stateAtual={stateAtual}>Dados da loja</StepperRoot.Step>
          <StepperRoot.Step number={2} stateAtual={stateAtual}>Endereço</StepperRoot.Step>
          <StepperRoot.Step number={3} stateAtual={stateAtual}>Horário de atendimento</StepperRoot.Step>
          <StepperRoot.Step number={4} stateAtual={stateAtual}>Seções</StepperRoot.Step>
          <StepperRoot.Step number={5} stateAtual={stateAtual}>Métodos de pagamento</StepperRoot.Step>
        </StepperRoot.Content>
      </div>

      <FormContext.Provider value={{storage,setStorage,nextStep,prevStep}}>
      {steps[stateAtual]}
    
      </FormContext.Provider  >
    </section>
  );
};

export default ModalLoja;
