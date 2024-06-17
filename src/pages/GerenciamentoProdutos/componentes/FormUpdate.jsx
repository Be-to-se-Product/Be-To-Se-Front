import { useCallback, useEffect, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Button from "@componentes/Button/Button";
import api from "@/services/api/services";
import { useParams } from "react-router-dom";
import useProgress from "@/hooks/useProgress";
import ProgressRoot from "@/componentes/Progress/ProgressRoot";
import { converterImageToFile } from "@/utils/conversores";
import { toast } from "react-toastify";

const FormUpdate = ({ fecharModal, getProdutos, produto }) => {
  const { idEstabelecimento } = useParams();

  const { currentStep, nextStep, prevStep, data, setData, resetData } =
    useProgress(4, {
      nome: produto.nome,
      codigoSku: produto.codigoSku,
      preco: produto.preco,
      descricao: produto.descricao,
      precoOferta: produto.precoOferta,
      codigoBarras: produto.codigoBarras,
      categoria: produto.categoria,
      secao: produto.secao.id,
      promocao: produto.isPromocaoAtiva,
      tags: produto.tags,
      imagens: [],
    });

  console.log(produto);

  const current = currentStep() < 4 ? currentStep() : 3;
  const [infoBanco, setInfoBanco] = useState({
    sessoes: [],
    tag: [],
  });

  useEffect(() => {
    (async () => {
      const request = produto.imagens.map((imagem) =>
        converterImageToFile(imagem, imagem)
      );

      const images = await Promise.all(request);

      const formatImagens = images.map((imagem) => ({
        preview: URL.createObjectURL(imagem),
        file: imagem,
      }));

      setData((prev) => ({ ...prev, imagens: formatImagens }));
    })();
  }, [produto.imagens, setData]);

  console.log(data);

  const steps = [
    <Step1
      key={1}
      setData={(data) => {
        setData((prev) => ({ ...prev, ...data }));
        nextStep();
      }}
      infoBanco={infoBanco}
      dataStorage={data}
    >
      <div className="flex justify-center gap-x-4 mt-4">
        <Button type="submit" onClick={() => setTimeout(nextStep, 50)}>
          Avançar
        </Button>
      </div>
    </Step1>,
    <Step2
      key={2}
      dataStorage={data}
      setData={(data) => setData((prev) => ({ ...prev, ...data }))}
      imagens={data.imagens}
    >
      <div className="flex justify-center gap-x-4 mt-4">
        <Button type="submit" onClick={() => setTimeout(prevStep, 50)}>
          Retroceder
        </Button>
        <Button type="submit" onClick={() => setTimeout(nextStep, 50)}>
          Avançar
        </Button>
      </div>
    </Step2>,
    <Step3
      key={3}
      dataStorage={data}
      setData={(dataStore) => {
        setData((prev) => ({ ...prev, ...data }));

        saveData({ ...data, ...dataStore });
      }}
    >
      <div className="flex justify-center gap-x-4 mt-4">
        <Button type="submit" onClick={() => setTimeout(prevStep, 200)}>
          Retroceder
        </Button>
        <Button type="submit" onClick={() => nextStep}>
          Atualizar
        </Button>
      </div>
    </Step3>,
  ];

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
  }, []);

  const saveData = useCallback(
    async (data) => {
      const produtoSave = {
        nome: data.nome,
        codigoSku: data.codigoSku,
        preco: data.preco,
        descricao: data.descricao,
        precoOferta: data.precoOferta,
        codigoBarras: data.codigoBarras,
        categoria: data.categoria,
        secao: data.secao,
        tags: data.tags ? data.tags : [],
        promocao: !!data?.promocao,
      };
      const formData = new FormData();
      const imagens = data.imagens.map((imagem) => imagem.file);
      imagens.forEach((imagem) => formData.append("imagens", imagem));
      toast.loading("Atualizando produto", { autoClose: false });
      try {
        const response = await api.put("/produtos/" + produto.id, produtoSave);
        if (response.status === 200) {
          await api.post(`/produtos/${produto.id}/imagens`, formData);
          await api.patch(
            `/produtos/promocao/${produto.id}?status=${produtoSave?.promocao}`
          );

          resetData();
          fecharModal("fechar");
          toast.dismiss();
          toast.success("Produto atualizado com sucesso!");
          getProdutos();
        }
      } catch (error) {
        console.log(error);
        toast.dismiss();
      }
    },
    [fecharModal, getProdutos, produto.id, resetData]
  );

  useEffect(() => {
    if (current === 4) {
      saveData(data);
    }
  }, [current, data, saveData]);

  return (
    <div className=" w-[1000px] h-[90vh] overflow-auto p-8 bg-white-principal relative rounded-md flex items-center flex-col gap-y-2 justify-around">
      <div
        className="absolute top-5  right-8 cursor-pointer"
        onClick={() => fecharModal("fechar")}
      >
        X
      </div>
      <ProgressRoot.Content currentStep={currentStep}>
        <ProgressRoot.Step
          size={3}
          currentStep={currentStep}
          className="text-white-principal"
        >
          Teste
        </ProgressRoot.Step>
        <ProgressRoot.Step
          size={3}
          currentStep={currentStep}
          className="text-white-principal"
        >
          Teste
        </ProgressRoot.Step>
        <ProgressRoot.Step
          size={3}
          currentStep={currentStep}
          className="text-white-principal"
        >
          Teste
        </ProgressRoot.Step>
      </ProgressRoot.Content>

      {steps[current]}
    </div>
  );
};

export default FormUpdate;
