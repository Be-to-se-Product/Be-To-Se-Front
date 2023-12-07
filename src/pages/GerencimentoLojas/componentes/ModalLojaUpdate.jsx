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
import moment from "moment";

const ModalLojaUpdate = ({ closeModal,getLista, id }) => {
  const [stateAtual, setStateAtual] = useState(0);
  const [storage, setStorage] = useState({});
  const [teste,setTeste] = useState(0);

  useEffect(() => {
    (async () => {
      if (id) {
        await api
          .get(`/estabelecimentos/${id}`)
          .then((response) => {
            console.log("---------");
            console.log(response.data);
            const diaSemana = {};
            const sessoes = response.data.secao.map(({ nome, id }) => {
              return {
                texto: nome,
                id,
              };
            });

            const dias = response.data.agenda.map((agenda) => agenda.dia.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase());

            for (const dia of dias) {
              diaSemana[dia] = {
                isOpen: true,
                horarioInicio: moment(
                  response.data.agenda.find((agenda) => (agenda.dia.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()) == dia)
                    .horarioInicio,
                  "HH:mm:ss"
                ).format("HH:mm"),
                horarioFim: moment(
                  response.data.agenda.find((agenda) => (agenda.dia.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()) == dia)
                    .horarioFim,
                  "HH:mm:ss"
                ).format("HH:mm"),
              };
            }

            const model = {
              imagens: {
                0: {
                  url: response?.data?.imagens[0],
                  id: response?.data?.imagem?.id,
                },
              },
              sessoes,
              metodosPagamento: response.data.metodoPagamento.map((element) => {
                return { [element.id]: true };
              }),
              diaSemana: diaSemana,
              nome: response.data.nome,
              segmento: response.data.segmento,
              telefoneContato: response.data.telefoneContato,
              emailContato: response.data.emailContato,
              referenciaInstagram: response.data.referenciaInstagram,
              referenciaFacebook: response.data.referenciaFacebook,
              cep: response.data.endereco.cep,
              logradouro: response.data.endereco.rua,
              bairro: response.data?.endereco?.bairro,
              cidade: response.data?.endereco?.cidade,
              estado: response.data?.endereco?.estado,
              numero: response.data?.endereco?.numero,
            };
            setStorage(model);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    })();
  }, []);
  const nextStep = () => {
    setStateAtual((prev) => prev + 1);
  };
  const prevStep = () => {
    if (stateAtual - 1 >= 0) {
      setStateAtual((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (stateAtual > 5) {
      saveEstabelecimento(storage);
      closeModal((prev) => {
        return { ...prev, open: false };
      });
    }
  }, [stateAtual]);

  const mapearJsonEstabelecimento = (json) => {
    const agenda = [];
    for (const [key, value] of Object.entries(json.diaSemana)) {
      if (value.isOpen) {
        agenda.push({
          dia: key.normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
          horarioInicio: value.horarioInicio,
          horarioFim: value.horarioFim,
        });
      }
    }
    const secao = json.sessoes.map((sessao) => {
     
      return {
        nome: sessao.texto,
        id: sessao?.id ? sessao.id : null,
      };
      
    });
    const estabelecimento = {
      nome: json.nome,
      endereco: {
        cep: json.cep,
        numero: json.numero,
        bairro: json.bairro,
        cidade: json.cidade,
        estado: json.estado,
        rua: json.logradouro,
      },
      agenda,
      segmento: json.segmento,
      telefoneContato: json.telefoneContato,
      emailContato: json.emailContato,
      referenciaFacebook: json.referenciaFacebook,
      referenciaInstagram: json.referenciaInstagram,
      secao,
      metodoPagamento: json.metodosPagamento,
    };

    return estabelecimento;
  };

  const saveEstabelecimento = (storage) => {
    const estabelecimento = mapearJsonEstabelecimento(storage);
    api
      .put("/estabelecimentos/"+id, estabelecimento)
      .then((response) => {
        closeModal(false);
        getLista();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <section className="flex flex-col w-[900px]  bg-white-principal gap-y-10 h-[750px] py-20 px-16 ">
      <div
        className="absolute top-8 right-12 font-semibold cursor-pointer"
        onClick={() =>
          closeModal((prev) => {
            return { ...prev, open: false };
          })
        }
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
        <Step4  setTeste={setTeste} teste={teste}/>
        <Step5 />
        <Step6 />
      </FormContext.Provider>
    </section>
  );
};

export default ModalLojaUpdate;
