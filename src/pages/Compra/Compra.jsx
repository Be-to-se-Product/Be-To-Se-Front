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
import ModalRoot from "@/componentes/ModalCompostion/ModalRoot";
import ModalHorario from "@/componentes/ModalHorario/ModalHorario";
import { Modal } from "@mui/base";
import CardItemVenda from "../PedidosUsuario/componentes/CardItemVenda";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "@/services/api/services";
import { toast } from "react-toastify";

function Compra() {
  const { nextStep, prevStep, currentStep, setData, data } = useProgress(3, {});
  const steps = [Step1, Step2, Step3FluxoEstabelecimento];
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();

  const postPedido = async () => {
    console.log(location.state);

    const dataLocation = [...location.state][0];
    console.log(data);
    const mapper = {
      idEstabelecimento: dataLocation.idEstabelecimento,
      itens: [
        {
          idProduto: dataLocation.idProduto,
          quantidade: dataLocation.quantidade,
        },
      ],
      metodo: {
        idMetodoPagamento: data.metodoPagamento,
        isPagamentoOnline: false,
      },
      origem: "PAGAMENTO NO ESTABELECIMENTO",
    };

    toast.info("Enviando pedido...", { autoClose: 2000 });

    await api
      .post("/pedidos", mapper)
      .then((response) => {
        if (response.status === 201) {
          nextStep();
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
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
              <div className="mx-auto w-min mt-3">
                <Button
                  onClick={() => setOpenModal(!openModal)}
                  variants={{
                    sizes: "max",
                  }}
                >
                  Ver itens do pedido
                </Button>
              </div>
            </ProgressProvider>
            {currentStep() != 2 && (
              <div className="flex gap-x-4 mt-4 w-5/12 mx-auto">
                <Button disabled={currentStep() === 0} onClick={prevStep}>
                  Retroceder
                </Button>
                <Button
                  disabled={Object.keys(data).length <= currentStep()}
                  onClick={currentStep() === 1 ? postPedido : nextStep}
                >
                  {currentStep() === 1 ? "Finalizar" : "Avançar"}
                </Button>
              </div>
            )}
          </form>
        </div>
      </section>

      <ModalRoot.Content show={openModal}>
        <ModalRoot.Header>
          <h2 className="text-white-principal">Itens do pedido</h2>
          <ModalRoot.Close onClick={() => setOpenModal(!openModal)} />
        </ModalRoot.Header>
        <div className="bg-white-principal w-[400px] max-h-[350px] overflow-auto  flex flex-col gap-y-4 ">
          <div>
            <CardItemVenda
              produto={{
                produto: {
                  nome: "Produto 1",
                  preco: 10,
                  quantidade: 1,
                },
              }}
            />
            <CardItemVenda
              produto={{
                produto: {
                  nome: "Produto 1",
                  preco: 10,
                  quantidade: 1,
                },
              }}
            />
            <CardItemVenda
              produto={{
                produto: {
                  nome: "Produto 1",
                  preco: 10,
                  quantidade: 1,
                },
              }}
            />
            <CardItemVenda
              produto={{
                produto: {
                  nome: "Produto 1",
                  preco: 10,
                  quantidade: 1,
                },
              }}
            />
            <CardItemVenda
              produto={{
                produto: {
                  nome: "Produto 1",
                  preco: 10,
                  quantidade: 1,
                },
              }}
            />
          </div>

          <div className="px-6 py-4 flex justify-end absolute bottom-0 bg-black-100 w-full border-t-orange-principal border-4 ">
            <h2>Total: R$ 12,00</h2>
          </div>
        </div>
      </ModalRoot.Content>
    </>
  );
}

export default Compra;
