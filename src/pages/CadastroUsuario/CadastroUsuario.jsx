import React, { useState } from "react";
import Navbar from "../../componentes/Navbar/NavbarRoot";
import InputRoot from "../../componentes/Input/InputRoot";
import StepperRoot from "../../componentes/Stepper/StepperRoot";
import Button from "../../componentes/Button/Button";
import { useForm } from "react-hook-form";
import moment from "moment";
import { inputSomenteNumero } from "../../utils/formatadores";

const CadastroUsuario = () => {
  const { register, formState, handleSubmit } = useForm();
  const [stateAtual, setStateAtual] = useState(0);

  const avancar = (data) => {
    console.log(data);
    setStateAtual(stateAtual + 1);
  };

  const retroceder = () => {
    setStateAtual(stateAtual - 1);
  };

  const message = {
    "caractereEspecial":"Esse campo aceita somente letras",
    "tamanho":"O nome precisa ter no mínimo 3 caracteres",
    "required":"Esse campo não pode ser nulo",
    "dtNascimento":"Você precisa ter mais de 18 anos"
  }

  const schemaValidation = {
    nome: {
      required: true,
      validate: {
        tamanho(value){
          return value.length>2
        },

        caractereEspecial(value){
          const regex = new RegExp("[^a-zA-Z\\s]");
          return !value.match(regex);
        }
      } ,
    },
    cpf:{
      required:true,
      validarCpf:()=>validarCpf()
    },
    genero:{
      required:true,
      tamanho(value){
        value == "Masculino" || value == "Feminino" || value == "Outro" 
      }
    },
    dtNascimento:{
      required:true,
      validarDataNascimento(value){
        console.log(value);
          return moment().year - moment(value,"YYYY-MM-DD").year >= 18  
      }
    },
    telefone:{
      required:true,
      validarTelefone(value){
        const regex = new RegExp("^[2-9][0-9]{3,4}-[0-9]{4}$");
        return value.match(regex);
      }
    }

  };

  return (
    <>
      <Navbar.Content>
        <Navbar.Menu>
          <Navbar.Item />
        </Navbar.Menu>
      </Navbar.Content>

      <main className="w-full h-[89vh] bg-black-200 flex justify-center ">
        <form
          action=""
          className={`w-2/5  px-10 py-10 `}
          onSubmit={handleSubmit(avancar)}
          autocomplete={"off"}
        >
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

            <div
              className={`flex flex-col gap-y-4 bg-white-principal p-10 rounded-sm ${
                stateAtual != 0 && "hidden"
              }`}
            >

              <div className="flex flex-col gap-y-3">
                <InputRoot.Input
                  type="text"
                  placeholder="Informe o seu nome completo"
                  register={register("nome",schemaValidation.nome)}
                >
                  <InputRoot.Label>Nome </InputRoot.Label>
                </InputRoot.Input>
                <span className="text-xs font-medium text-red-600">{formState?.errors?.nome?.type && message[formState?.errors?.nome?.type]}</span>
              </div>
              {}

              <div className="grid grid-cols-[2fr,1.5fr] gap-x-4">
                <div>
                  <InputRoot.Input
                    type="text"
                    placeholder="Informe o seu CPF"
                    register={register("cpf",schemaValidation.cpf)}
                    onInput={inputSomenteNumero}

                  >
                    <InputRoot.Label>CPF</InputRoot.Label>
                  </InputRoot.Input >
                  <span className="text-xs font-medium text-red-600">{formState?.errors?.cpf?.type && message[formState?.errors?.nome?.type]}</span>

                </div>
                <div>
                  <InputRoot.Input
                    type="text"
                    placeholder="Informe o seu gênero"
                    register={register("genero",schemaValidation.genero)}
                    
                  >
                    <InputRoot.Label>Gênero</InputRoot.Label>
                  </InputRoot.Input>

                </div>
              </div>

              <div className="flex gap-x-4  ">
                <div>
                  <InputRoot.Input
                    type="date"
                    placeholder="Informe sua data de nascimento"
                    register={register("dtNascimento",schemaValidation.genero)}
                  >
                    <InputRoot.Label>Data Nascimento</InputRoot.Label>
                  </InputRoot.Input>
                </div>
                <div>
                  <InputRoot.Input
                    type="tel"
                    placeholder="Informe seu telefone"
                    register={register("telefone",schemaValidation.telefone)}
                  >
                    <InputRoot.Label>Telefone</InputRoot.Label>
                  </InputRoot.Input>
                </div>
              </div>
            </div>

            <div
              className={`flex flex-col gap-y-4 bg-white-principal p-10 rounded-sm ${
                stateAtual != 1 && "hidden"
              }`}
            >
              <div>
                <InputRoot.Input type="text" placeholder="Nome">
                  <InputRoot.Label>Email</InputRoot.Label>
                </InputRoot.Input>
              </div>

              <div className="flex flex-col gap-y-4  ">
                <InputRoot.Input
                  type="password"
                  placeholder="Nome"
                  register={register("senha")}
                >
                  <InputRoot.Label>Senha</InputRoot.Label>
                </InputRoot.Input>

                <ul>
                  <li className="before:w-2 before:h-2 before:block before:bg-black-900 before:rounded-full flex items-center gap-x-2">
                    Precisar ter no minimo 5 caracteres
                  </li>
                  <li className="before:w-2 before:h-2 before:block before:bg-black-900 before:rounded-full flex items-center gap-x-2">
                    Precisar ter no minimo 5 caracteres
                  </li>
                  <li className="before:w-2 before:h-2 before:block before:bg-black-900 before:rounded-full flex items-center gap-x-2">
                    Precisar ter no minimo 5 caracteres
                  </li>
                  <li className="before:w-2 before:h-2 before:block before:bg-black-900 before:rounded-full flex items-center gap-x-2">
                    Precisar ter no minimo 5 caracteres
                  </li>
                </ul>
              </div>

              <div className="flex gap-x-4  ">
                <InputRoot.Input
                  type="password"
                  placeholder="Nome"
                  register={register("confSenha", {
                    required: stateAtual == 1,
                  })}
                >
                  <InputRoot.Label>Confirme sua senha</InputRoot.Label>
                </InputRoot.Input>
              </div>
            </div>
          </div>

          <div className="flex w-10/12 mx-auto justify-center mt-8 gap-x-5">
            <Button type="button" onClick={retroceder}>
              Retroceder
            </Button>
            {stateAtual < 1 && <Button>Avançar</Button>}
            <Button>Avançar</Button>
          </div>
        </form>
      </main>
    </>
  );
};

export default CadastroUsuario;
