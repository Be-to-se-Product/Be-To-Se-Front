import { useEffect, useState } from "react";
import FormContext from "@/context/Form/FormContext";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import api from "@/services/api/services";
import Step6 from "./Step6";
import moment from "moment";
import { toast } from "react-toastify";
import ProgressRoot from "@/componentes/Progress/ProgressRoot";
import useProgress from "@/hooks/useProgress";
import { converterImageToFile } from "@/utils/conversores";

const ModalLojaUpdate = ({ closeModal, getLista, id }) => {
  const [storage, setStorage] = useState({});
  const [teste, setTeste] = useState(0);
  const { currentStep, nextStep, prevStep } = useProgress(6, {});

  useEffect(() => {
    (async () => {
      if (id) {
        await api
          .get(`/estabelecimentos/${id}`)
          .then(async (response) => {
            const diaSemana = {};
            const sessoes = response.data.secao.map(({ nome, id }) => {
              return {
                texto: nome,
                id,
              };
            });

            const dias = response.data.agenda.map((agenda) =>
              agenda.dia
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
            );

            for (const dia of dias) {
              diaSemana[dia] = {
                isOpen: true,
                horarioInicio: moment(
                  response.data.agenda.find(
                    (agenda) =>
                      agenda.dia
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .toLowerCase() == dia
                  ).horarioInicio || "00:00:00",
                  "HH:mm:ss"
                ).format("HH:mm"),
                horarioFim: moment(
                  response.data.agenda.find(
                    (agenda) =>
                      agenda.dia
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "")
                        .toLowerCase() == dia
                  ).horarioFim || "00:00:00",
                  "HH:mm:ss"
                ).format("HH:mm"),
              };
            }

            const request = response.data.imagens.map((imagem) =>
              converterImageToFile(imagem, imagem)
            );

            const images = await Promise.all(request);

            const model = {
              sessoes,
              metodosPagamento: response.data.metodoPagamento.map((element) => {
                return { [element.id]: true };
              }),
              images,
              diaSemana: diaSemana,
              nome: response.data.nome,
              segmento: response.data.segmento,
              telefoneContato: response.data.telefoneContato,
              emailContato: response.data.emailContato,
              referenciaInstagram: response.data.referenciaInstagram,
              referenciaFacebook: response.data.referenciaFacebook,
              cep: response.data.endereco.cep,
              rua: response.data.endereco.rua,
              bairro: response.data?.endereco?.bairro,
              cidade: response.data?.endereco?.cidade,
              estado: response.data?.endereco?.estado,
              numero: response.data?.endereco?.numero,
            };
            setStorage(model);
            console.log(model);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    })();
    // eslint-disable-next-line
  }, []);

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
        logradouro: json.logradouro,
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

  const saveEstabelecimento = async (storage) => {
    const estabelecimento = mapearJsonEstabelecimento(storage);

    try {
      const response = await api.put(
        "/estabelecimentos/" + id,
        estabelecimento
      );

      if (response.status === 200 && storage.imagem.length > 0) {
        const formData = new FormData();
        formData.append("imagem", storage.imagem[0]);
        const responseImage = await api.post(
          `/estabelecimentos/${response.data.id}/imagem`,
          formData
        );

        if (responseImage.status === 204) {
          closeModal(false);
          getLista();
          toast.success("Loja atualizada com sucesso", {
            autoClose: 2000,
          });
        }
        return;
      }
      closeModal(false);
      getLista();
      toast.success("Loja atualizada com sucesso", {
        autoClose: 2000,
      });
    } catch (e) {
      console.log(e);
    }
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
        <h2 className="texStoraget-2xl font-medium">Cadastro de Loja</h2>
        <ProgressRoot.Content currentStep={currentStep}>
          <ProgressRoot.Step className="text-white">
            Dados da loja
          </ProgressRoot.Step>
          <ProgressRoot.Step className="text-white">Endereço</ProgressRoot.Step>
          <ProgressRoot.Step className="text-white">Agenda</ProgressRoot.Step>
          <ProgressRoot.Step className="text-white">Seções</ProgressRoot.Step>
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
        <Step4 setTeste={setTeste} teste={teste} />
        <Step5 />
        <Step6 />
      </FormContext.Provider>
    </section>
  );
};

export default ModalLojaUpdate;
