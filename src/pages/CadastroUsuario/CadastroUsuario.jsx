import { useState } from "react";
import StepperRoot from "@componentes/Stepper/StepperRoot";
import Button from "@componentes/Button/Button";
import Step1 from "./componentes/Step1";
import Step2 from "./componentes/Step2";
import CircularProgress from "@mui/material/CircularProgress";
import { removerMascaraCpf, removerMascaraTelefone } from "@utils/formatadores";
import { criptografar } from "@utils/Autheticated";
import IconSelect from "@assets/selection.png";
import { useNavigate } from "react-router-dom";
import NavbarRoot from "@componentes/Navbar/NavbarRoot";
import api from "@/services/api/services";
const CadastroUsuario = () => {
  const [stateAtual, setStateAtual] = useState(0);
  const [data, setData] = useState({});
  const [isAvancar, setIsAvancar] = useState(false);
  const [isRetroceder, setIsRetroceder] = useState(false);

  const navigate = useNavigate();

  const avancar = () => {
    if (steps.length - 1 == stateAtual + 1) {
      saveUser(data);
      return;
    }
    setStateAtual(stateAtual + 1);
    setIsAvancar(false);
  };

  const saveLocalStorage = (data) => {
    setData((prevState) => ({ ...prevState, ...data }));
    if (isAvancar) avancar();
    if (isRetroceder) retroceder();
  };

  const saveUser = (dataFunction) => {
    const dataMerge = { ...data, ...dataFunction };
    const dataRequest = {
      nome: dataMerge.nome,
      cpf: removerMascaraCpf(dataMerge?.cpf),
      celular: removerMascaraTelefone(dataMerge.telefone),
      dataNascimento: dataMerge.dtNascimento,
      genero: dataMerge.genero,
      usuario: {
        email: dataMerge.email,
        senha: dataMerge.senha,
      },
    };
    sessionStorage.clear();

    api
      .post("/consumidores", dataRequest)
      .then((response) => {
        if (response.status == 201) {
          sessionStorage.setItem(
            "USERDETAILS",
            criptografar(JSON.stringify(response.data))
          );
          setStateAtual(stateAtual + 1);

          setTimeout(() => {
            navigate("/index");
          }, 3000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const retroceder = () => {
    setStateAtual(stateAtual - 1);
    setIsRetroceder(false);
  };

  const steps = [
    <Step1 key="step1" getDataForm={saveLocalStorage} data={data}>
      <div className="flex w-10/12 mx-auto justify-center mt-8 gap-x-5">
        <Button
          type="submit"
          onClick={() => {
            setIsAvancar(true);
          }}
        >
          Avançar
        </Button>
      </div>
    </Step1>,
    <Step2 key="step2" getDataForm={saveLocalStorage} data={data}>
      <div className="flex w-10/12 mx-auto justify-center mt-8 gap-x-5">
        <Button type="submit" onClick={() => setIsRetroceder(true)}>
          Retroceder
        </Button>
        <Button type="submit" onClick={() => setIsAvancar(true)}>
          Cadastrar
        </Button>
      </div>
    </Step2>,
    <div
      key="step3"
      className="flex flex-col w-9/12 mx-auto justify-center items-center mt-20 gap-y-5 bg-white-principal py-20 rounded"
    >
      <img src={IconSelect} alt="" className="w-44" />
      <div className="text-center flex flex-col gap-y-2">
        <h2 className="text-xl">Cadastrado concluído com sucesso!</h2>
        <p>Você sera redirecionado para a tela inicial</p>
        <CircularProgress className="mx-auto" />
      </div>
    </div>,
  ];

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

      <main className="w-full h-[89vh] bg-black-200 flex justify-center ">
        <div className={`w-2/5  px-10 py-10 `}>
          <div className={`flex flex-col gap-y-4 `}>
            <h2
              className={`text-center text-2xl ${stateAtual == 2 && "hidden"}`}
            >
              Informações do usuário
            </h2>

            <div className={`w-5/12 mx-auto ${stateAtual == 2 && "hidden"}`}>
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
