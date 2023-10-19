import React, { useState } from "react";
import StepperRoot from "../../../componentes/Stepper/StepperRoot";
import InputRoot from "../../../componentes/Input/InputRoot";
import Button from "../../../componentes/Button/Button";
import { Checkbox, Select, Switch } from "@mui/material";
import { orange } from "@mui/material/colors";
import BotaoSwitch from "../../../componentes/Switch/BotaoSwitch";
import SwitchBase from "@mui/material/internal/SwitchBase";
import RowSessao from "./RowSessao";

const ModalLoja = ({closeModal,handleSubmit}) => {
  const [rowSessao, setRowSessao] = useState([]);
  const [stateAtual, setStateAtual] = useState(0);

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
      <div className={ ` flex flex-col gap-y-8 ${
            stateAtual != 0 && "hidden"
          }`}>
        <div
          className={` w-full  mx-auto grid grid-cols-2  gap-x-8 rounded-lg h-[300px] `}
        >
          <div className=" flex flex-col gap-y-6 ">
            <div className="flex flex-col gap-y-1">
              <InputRoot.Label>Nome da loja</InputRoot.Label>
              <InputRoot.Input></InputRoot.Input>
            </div>

            <div className="flex flex-col gap-y-1">
              <InputRoot.Label>Segmento da loja</InputRoot.Label>
              <InputRoot.Input></InputRoot.Input>
            </div>

            <div className="flex flex-col gap-y-1">
              <InputRoot.Label>Numero de contato</InputRoot.Label>
              <InputRoot.Input></InputRoot.Input>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-y-1">
              <InputRoot.Label>E-mail de contato</InputRoot.Label>
              <InputRoot.Input></InputRoot.Input>
            </div>

            <div className="flex flex-col gap-y-1">
              <InputRoot.Label>Perfil do Instagram</InputRoot.Label>
              <InputRoot.Input></InputRoot.Input>
            </div>

            <div className="flex flex-col gap-y-1">
              <InputRoot.Label>Perfil do facebook</InputRoot.Label>
              <InputRoot.Input></InputRoot.Input>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-2/4 mx-auto">
          <Button onClick={() => setStateAtual((prev) => prev + 1)}>
            Avançar
          </Button>
        </div>
      </div>
      <div className={`flex flex-col gap-y-6  ${stateAtual != 1 && "hidden"}`}>
        <div className="flex flex-col w-10/12  mx-auto h-[300px]  gap-y-4 rounded-lg">
          <div className=" flex  ">
            <div className="flex flex-col gap-y-1 w-2/6 ">
              <InputRoot.Label>CEP</InputRoot.Label>
              <InputRoot.Input></InputRoot.Input>
            </div>
          </div>

          <div className="flex  gap-x-8">
            <div className="flex flex-col gap-y-1">
              <InputRoot.Label>Logradouro</InputRoot.Label>
              <InputRoot.Input></InputRoot.Input>
            </div>

            <div className="flex flex-col gap-y-1 w-1/6">
              <InputRoot.Label>Numero</InputRoot.Label>
              <InputRoot.Input></InputRoot.Input>
            </div>
          </div>

          <div className="flex  gap-x-8 ">
            <div className="flex flex-col gap-y-1">
              <InputRoot.Label>Bairro</InputRoot.Label>
              <InputRoot.Input></InputRoot.Input>
            </div>

            <div className="flex flex-col gap-y-1">
              <InputRoot.Label>Cidade</InputRoot.Label>
              <InputRoot.Input></InputRoot.Input>
            </div>

            <div className="flex flex-col gap-y-1">
              <InputRoot.Label>Estado</InputRoot.Label>
              <Select className="h-11 w-20"></Select>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-2/4 mx-auto gap-x-3">
          <Button onClick={() => setStateAtual((prev) => prev - 1)}>
            Retroceder
          </Button>
          <Button onClick={() => setStateAtual((prev) => prev + 1)}>
            Avançar
          </Button>
        </div>
      </div>


      
      <div
        className={`relative mx-auto flex flex-col gap-y-8  ${
          stateAtual != 2 && "hidden"
        }`}
      >
        <div className="grid grid-rows-[repeat(8,60px)]   h-[300px] overflow-scroll py-10 px-4  ">
          <div className=" grid grid-cols-[repeat(4,120px)] items-center  gap-x-4 absolute  py-2 top-0  z-10  bg-white-principal">
            <span>Abre</span>
            <span>Dia</span>
            <span>Abertura</span>
            <span>Fechamento</span>
          </div>

          <div className=" grid grid-cols-[repeat(4,120px)] items-center   gap-x-4">
            <span>
              <Checkbox
                sx={{
                  color: orange[800],
                  "&.Mui-checked": {
                    color: orange[600],
                  },
                }}
              />
            </span>
            <span>Domingo</span>
            <span>
              <InputRoot.Input />
            </span>
            <span>
              <InputRoot.Input />
            </span>
          </div>

          <div className=" grid grid-cols-[repeat(4,120px)] items-center  gap-x-4">
            <span>
              <Checkbox
                sx={{
                  color: orange[800],
                  "&.Mui-checked": {
                    color: orange[600],
                  },
                }}
              />
            </span>
            <span>Segunda</span>
            <span>
              <InputRoot.Input />
            </span>
            <span>
              <InputRoot.Input />
            </span>
          </div>

          <div className=" grid grid-cols-[repeat(4,120px)] items-center  gap-x-4">
            <span>
              <Checkbox
                sx={{
                  color: orange[800],
                  "&.Mui-checked": {
                    color: orange[600],
                  },
                }}
              />
            </span>
            <span>Terça</span>
            <span>
              <InputRoot.Input />
            </span>
            <span>
              <InputRoot.Input />
            </span>
          </div>

          <div className=" grid grid-cols-[repeat(4,120px)] items-center  gap-x-4">
            <span>
              <Checkbox
                sx={{
                  color: orange[800],
                  "&.Mui-checked": {
                    color: orange[600],
                  },
                }}
              />
            </span>
            <span>Quarta</span>
            <span>
              <InputRoot.Input />
            </span>
            <span>
              <InputRoot.Input />
            </span>
          </div>

          <div className=" grid grid-cols-[repeat(4,120px)] items-center  gap-x-4">
            <span>
              <Checkbox
                sx={{
                  color: orange[800],
                  "&.Mui-checked": {
                    color: orange[600],
                  },
                }}
              />
            </span>
            <span>Quinta</span>
            <span>
              <InputRoot.Input />
            </span>
            <span>
              <InputRoot.Input />
            </span>
          </div>

          <div className=" grid grid-cols-[repeat(4,120px)] items-center  gap-x-4">
            <span>
              <Checkbox
                sx={{
                  color: orange[800],
                  "&.Mui-checked": {
                    color: orange[600],
                  },
                }}
              />
            </span>
            <span>Sexta</span>
            <span>
              <InputRoot.Input />
            </span>
            <span>
              <InputRoot.Input />
            </span>
          </div>

          <div className=" grid grid-cols-[repeat(4,120px)] items-center  gap-x-4">
            <span>
              <Checkbox
                sx={{
                  color: orange[800],
                  "&.Mui-checked": {
                    color: orange[600],
                  },
                }}
              />
            </span>
            <span>Sábado</span>
            <span>
              <InputRoot.Input />
            </span>
            <span>
              <InputRoot.Input />
            </span>
          </div>
          <div className="grid grid-cols-[repeat(4,120px)] items-center  gap-x-4">
            <span>
              <Checkbox
                sx={{
                  color: orange[800],
                  "&.Mui-checked": {
                    color: orange[600],
                  },
                }}
              />
            </span>
            <span>Feriados</span>
            <span>
              <InputRoot.Input />
            </span>
            <span>
              <InputRoot.Input />
            </span>
          </div>
        </div>
        <div className="flex justify-center gap-x-4 w-2/4 mx-auto">
          <Button onClick={() => setStateAtual((prev) => prev - 1)}>
            Retroceder
          </Button>
          <Button onClick={() => setStateAtual((prev) => prev + 1)}>
            Avançar
          </Button>
        </div>
      </div>

      <div className={`${stateAtual != 3 && "hidden"} flex flex-col gap-y-8 `}>
      <div
        className={`flex flex-col w-10/12 justify-center  mx-auto h-[300px]   gap-y-4 rounded-lg  `}
      >
        <div className="grid grid-cols-2  gap-4  mx-auto ">
          <div className=" flex items-center   ">
            <Checkbox
              sx={{
                color: orange[800],
                "&.Mui-checked": {
                  color: orange[600],
                },
              }}
            />
            <span>Cartão de crédito</span>
          </div>

          <div className="  flex  items-center">
            <Checkbox
              sx={{
                color: orange[800],
                "&.Mui-checked": {
                  color: orange[600],
                },
              }}
            />
            <span>Cartão de Débito</span>
          </div>

          <div className="  flex  items-center">
            <Checkbox
              sx={{
                color: orange[800],
                "&.Mui-checked": {
                  color: orange[600],
                },
              }}
            />
            <span>Vale alimentação</span>
          </div>

          <div className="  flex  items-center">
            <Checkbox
              sx={{
                color: orange[800],
                "&.Mui-checked": {
                  color: orange[600],
                },
              }}
            />
            <span>Dinheiro</span>
          </div>

          <div className="  flex  items-center">
            <Checkbox
              sx={{
                color: orange[800],
                "&.Mui-checked": {
                  color: orange[600],
                },
              }}
            />
            <span>Vale refeição</span>
          </div>

          <div className="  flex  items-center">
            <Checkbox
              sx={{
                color: orange[800],
                "&.Mui-checked": {
                  color: orange[600],
                },
              }}
            />
            <span>Vale alimentação</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-2/4 mx-auto gap-x-3">
        <Button onClick={() => setStateAtual((prev) => prev - 1)}>
          Retroceder
        </Button>
        <Button onClick={() => setStateAtual((prev) => prev + 1)}>
          Avançar
        </Button>
      </div>
      </div>
      <div className={`relative ${stateAtual != 4 && "hidden"} flex-col gap-y-8  `}>
        <div className="w-full px-14 flex justify-between  border-b-orange-200 border-b-[1px] py-2 absolute  top-0 z-10 bg-white-principal ">
          <span>Nome da sessão</span>
          <span>Excluir</span>
        </div>
        <div className="  w-full flex flex-col items-center      gap-y-8 rounded-lg overflow-scroll h-[300px] relative pt-20">
          {rowSessao.map((item) => (
            <RowSessao
              key={item.id}
              indice={item.id}
              setRowSessao={setRowSessao}
              item={item}
            />
          ))}
        </div>
        <div
          className="cursor-pointer w-full flex justify-center mb-8"
          onClick={() =>
            setRowSessao([
              ...rowSessao,
              { id: 1 + Math.random() * 20 + 5, texto: "" },
            ])
          }
        >
          {" "}
          + Adicionar sessão
        </div>
        <div className="flex justify-center w-2/4 mx-auto gap-x-4">
         

          <Button onClick={() =>setStateAtual(prev=>prev-1  )}>
            Retroceder
          </Button>
          <Button onClick={() =>console.log("Finalizou")}>
            Finalizar Cadastro
          </Button>
        </div>
      </div>

    </section>
  );
};

export default ModalLoja;
