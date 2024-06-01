import ProgressRoot from "@/componentes/Progress/ProgressRoot";
import useProgress from "@/hooks/useProgress";
import NavbarRoot from "@/componentes/Navbar/NavbarRoot";
import CardMetodo from "./componentes/CardMetodo";
import Button from "@/componentes/Button/Button";
import Step1 from "./componentes/Step1";
import ProgressProvider from "@/context/Progress/ProgressContext";
import Step2 from "./componentes/Step2";
import Step3FluxoEstabelecimento from "./componentes/Step3FluxoEstabelecimento";
import axios from "axios";

function Compra() {
  const { nextStep, prevStep, currentStep, setData, data } = useProgress(3, {});
  console.log(data);
  const steps = [Step1, Step2, Step3FluxoEstabelecimento];
  const submit = () => {
    // axios.post("/compra", data).then((response) => {})
  };
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
      <section className="w-10/12 mx-auto pt-12 ">
        <div className="w-1/2 mx-auto">
          <ProgressRoot.Content currentStep={currentStep}>
            <ProgressRoot.Step className="text-white">
              Primeira Fase
            </ProgressRoot.Step>
            <ProgressRoot.Step className="text-white">
              Segunda Fase
            </ProgressRoot.Step>
            <ProgressRoot.Step className="text-white">
              Terceira Fase
            </ProgressRoot.Step>
          </ProgressRoot.Content>
          <form action="">
            <ProgressProvider values={{ setData }}>
              {steps.map((Step, index) =>
                index === currentStep() ? <Step key={index} /> : null
              )}
            </ProgressProvider>
            {currentStep() != 2 && (
              <div className="flex gap-x-4 mt-4 w-5/12 mx-auto">
                <Button disabled={currentStep() === 0} onClick={prevStep}>
                  Retroceder
                </Button>
                <Button
                  disabled={Object.keys(data).length <= currentStep()}
                  onClick={nextStep}
                >
                  Avançar
                </Button>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

export default Compra;
