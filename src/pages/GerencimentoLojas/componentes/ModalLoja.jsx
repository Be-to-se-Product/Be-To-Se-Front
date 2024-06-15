import { useState } from "react";
import FormContext from "@/context/Form/FormContext";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import api from "@/services/api/services";
import Step6 from "./Step6";
import { toast } from "react-toastify";
import ProgressRoot from "@/componentes/Progress/ProgressRoot";
import useProgress from "@/hooks/useProgress";

const ModalLoja = ({ closeModal, getLista }) => {
  const [storage, setStorage] = useState({});
  const [teste, setTeste] = useState(0);
  const { currentStep, nextStep, prevStep } = useProgress(6, {});

  const saveEstabelecimento = async (storage) => {
    const agenda = [];
    for (const [key, value] of Object.entries(storage.diaSemana)) {
      if (value.isOpen) {
        agenda.push({
          dia: key,
          horarioInicio: value.horarioInicio,
          horarioFim: value.horarioFim,
        });
      }
    }
    const secao = storage.sessoes.map((sessao) => sessao.texto);

    const estabelecimento = {
      nome: storage.nome,
      endereco: {
        cep: storage.cep,
        numero: storage.numero,
        bairro: storage.bairro,
        cidade: storage.cidade,
        estado: storage.estado,
        rua: storage.logradouro,
      },
      agenda,
      segmento: storage.segmento,
      telefoneContato: storage.telefoneContato,
      emailContato: storage.emailContato,
      referenciaFacebook: storage.referenciaFacebook,
      referenciaInstagram: storage.referenciaInstagram,
      secao,
      metodoPagamento: storage.metodosPagamento,
    };

    try {
      const response = await api.post("/estabelecimentos", estabelecimento);

      if (response.status == 201 && storage.imagem.length > 0) {
        const formData = new FormData();
        formData.append("imagem", storage.imagem[0]);
        const responseImage = await api.post(
          `/estabelecimentos/${response.data.id}/imagem`,
          formData
        );

        if (responseImage.status == 204) {
          toast.success("Loja cadastrada com sucesso", {
            autoClose: 2000,
          });
        }
        closeModal(false);
        getLista();
      }
    } catch (error) {
      toast.error("Erro ao cadastrar loja", {
        autoClose: 2000,
      });
    }
  };
  return (
    <section className="flex flex-col w-[900px]  bg-white-principal gap-y-10 h-[750px] py-20 px-16  ">
      <div
        className="absolute top-8 right-12 font-semibold cursor-pointer"
        onClick={() => closeModal()}
      >
        X
      </div>
      <div className="flex flex-col items-center  justify-center w-full gap-y-10">
        <h2 className="text-2xl font-medium">Cadastro de Loja</h2>
        <ProgressRoot.Content currentStep={currentStep}>
          <ProgressRoot.Step className="text-white">
            Dados da loja
          </ProgressRoot.Step>
          <ProgressRoot.Step className="text-white">Endereço</ProgressRoot.Step>
          <ProgressRoot.Step className="text-white">Agenda</ProgressRoot.Step>
          <ProgressRoot.Step className="text-white">
            Método Pag.
          </ProgressRoot.Step>
          <ProgressRoot.Step className="text-white">Seções</ProgressRoot.Step>
          <ProgressRoot.Step className="text-white">Foto</ProgressRoot.Step>
        </ProgressRoot.Content>
      </div>

      <FormContext.Provider
        value={{
          storage,
          setStorage,
          nextStep,
          prevStep,
          currentStep,
          saveEstabelecimento,
        }}
      >
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 teste={teste} setTeste={setTeste} />
        <Step5 />
        <Step6 />
      </FormContext.Provider>
    </section>
  );
};

export default ModalLoja;
