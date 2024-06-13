import { useEffect, useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Button from "@componentes/Button/Button";
import api from "@/services/api/services";
import { useParams } from "react-router-dom";
import ProgressRoot from "@/componentes/Progress/ProgressRoot";
import useProgress from "@/hooks/useProgress";

const FormAdicionar = ({ fecharModal, getProdutos }) => {
  const { idEstabelecimento } = useParams();
  const { currentStep, nextStep, prevStep, setData, data } = useProgress({
    steps: 3,
  });

  const current = currentStep();
  const [infoBanco, setInfoBanco] = useState({
    sessoes: [],
    tag: [],
  });

  const getSecao = () => {
    api.get("/secoes/estabelecimento/" + idEstabelecimento).then((response) => {
      setInfoBanco((prev) => ({ ...prev, sessoes: response.data }));
    });
  };

  const getTags = () => {
    api.get("/tags").then((response) => {
      setInfoBanco((prev) => ({ ...prev, tag: response.data }));
    });
  };

  useEffect(() => {
    getTags();
    getSecao();
    // eslint-disable-next-line
  }, []);

  const saveData = (dadosSalvar) => {
    const produto = {
      nome: dadosSalvar.nome,
      codigoSku: dadosSalvar.codigoSku,
      preco: dadosSalvar.preco,
      descricao: data.descricao,
      precoOferta: dadosSalvar.precoOferta,
      codigoBarras: dadosSalvar.codigoBarras,
      categoria: dadosSalvar.categoria,
      secao: dadosSalvar.secao,
      tags: dadosSalvar.tags ? dadosSalvar.tags : null,
    };


    const formData = new FormData();
    const imagens = dadosSalvar.imagens.map((imagem) => imagem.file);

    imagens.forEach((imagem) => {
      formData.append("imagens", imagem);
    });
    api
      .post("/produtos", produto)
      .then((response) => {
        if (response.status === 201) {
          api
            .post(`/produtos/${response.data.id}/imagens`, formData)
            .then(() => {
              getProdutos();
              fecharModal("fechar");
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const steps = [
    <Step1
      key={1}
      setData={(dataStorage) => {
        setData((prev) => ({ ...prev, ...dataStorage }));
        nextStep();
      }}
      infoBanco={infoBanco}
      dataStorage={data}
    >
      <div className="flex justify-center gap-x-4 mt-4">
        <Button type="submit">Avançar</Button>
      </div>
    </Step1>,
    <Step2
      key={2}
      setData={(dataStorage) => {
        setData((prev) => ({ ...prev, ...dataStorage }));
        nextStep();
      }}
      dataStorage={data}
    >
      <div className="flex justify-center gap-x-4 mt-4">
        <Button onClick={prevStep}>Retroceder</Button>
        <Button type="submit">Avançar</Button>
      </div>
    </Step2>,
    <Step3
      key={3}
      setData={(dataValue) => {
        saveData({ ...dataValue, ...data });
      }}
      dataStorage={data}
    >
      <div className="flex justify-center gap-x-4 mt-4">
        <Button onClick={prevStep}>Retroceder</Button>
        <Button type="submit">Cadastrar</Button>
      </div>
    </Step3>,
  ];

  return (
    <div className=" w-[1000px] h-[90vh] overflow-auto p-8 bg-white-principal relative rounded-md flex items-center flex-col gap-y-2 justify-around">
      <div
        className="absolute top-5  right-8 cursor-pointer"
        onClick={() => fecharModal("fechar")}
      >
        X
      </div>
      <ProgressRoot.Content currentStep={currentStep}>
        <ProgressRoot.Step className="text-white">
          Dados <br />
          do Produto{" "}
        </ProgressRoot.Step>
        <ProgressRoot.Step className="text-white">Imagens</ProgressRoot.Step>
        <ProgressRoot.Step className="text-white">Descrição</ProgressRoot.Step>
      </ProgressRoot.Content>

      {steps[current]}
    </div>
  );
};

export default FormAdicionar;
