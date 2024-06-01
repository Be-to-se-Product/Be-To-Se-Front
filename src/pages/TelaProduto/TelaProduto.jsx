import NavbarRoot from "@componentes/Navbar/NavbarRoot";
import fast from "@assets/fastshop.png";
import { useCallback, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import api from "@/services/api/services";
import Avaliacao from "@componentes/Avaliacao/Avaliacao";
import StarAvaliacao from "./componentes/StarAvaliacao";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";
import ImageContainer from "./componentes/ImageContainer";
import Carro from "@assets/carro.svg";
import Pe from "@assets/pe.svg";
import Bike from "@assets/bike.svg";
import { conversorTime } from "@/utils/conversores";
import { geolocation } from "@/utils/geolocation";
import Button from "@/componentes/Button/Button";
import InputRoot from "@/componentes/Input/InputRoot";
import { Add, Remove } from "@mui/icons-material";
import { ENUMMETODOPAGAMENTO } from "@/utils/utils";
injectStyle();
function TelaProduto() {
  const { id: idProduto } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState([]);
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [qtd, setQtd] = useState(1);
  const [postAvaliacao, setPostAvaliacao] = useState({
    qtdEstrela: 0,
    comentario: "",
  });

  const comprarProduto = () => {
    let quantidade = qtd;
    let origem = "produto";
    const idEstabelecimento = produto.estabelecimento?.id;

    const data = [{ idProduto, quantidade, origem, idEstabelecimento }];
    navigate(`/compra`, { state: data });
  };

  const adicionarAvaliacao = () => {
    const data = {
      qtdEstrela: postAvaliacao.qtdEstrela,
      comentario: postAvaliacao.comentario,
      produto: idProduto,
    };

    const loading = toast.loading("Carregando...");

    api
      .post("/avaliacoes", data)
      .then(() => {
        toast.dismiss(loading);
        toast.success("Avaliação adicionada com sucesso!", {
          autoClose: 20000,
        });
        geolocation(({ lat, lon }) => {
          getProduto(lat, lon);
        });
      })
      .catch(() => {
        toast.dismiss(loading);
        toast.error("Falha ao adicionar avaliação!", { autoClose: 2000 });
      })
      .finally(() => {
        toast.dismiss(loading);
        getAvaliacao();
      });
  };

  const getProduto = useCallback(
    ({ latitude = -23.5505199, longitude = -46.6333094 }) => {
      toast.loading("Carregando...");

      const params = {};
      if (latitude && longitude) {
        params.latitude = latitude;
        params.longitude = longitude;
      }
      api
        .get(`/produtos/mobile/${idProduto}`, {
          params,
        })
        .then((res) => {
          toast.dismiss();
          setProduto(res.data ? res.data : {});
        })
        .catch((err) => {
          console.error(err);
        });
    },
    [idProduto]
  );

  const getAvaliacao = useCallback(() => {
    toast.loading("Carregando...");
    api
      .get(`/avaliacoes/${idProduto}`)
      .then((res) => {
        toast.dismiss();
        setAvaliacoes(res.data.length == 0 ? [] : res.data.reverse());
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idProduto]);

  const handleRatingChange = (novaClassificacao) => {
    setPostAvaliacao({ ...postAvaliacao, qtdEstrela: novaClassificacao });
  };

  useEffect(() => {
    getAvaliacao();
    geolocation(({ lat, lon }) => {
      getProduto(lat, lon);
    });
  }, [getAvaliacao, getProduto]);

  const mapper = {
    nome: produto.nome || "Produto",
    categoria: produto.categoria || "Categoria",
    preco: produto.precoAtual || 0,
    imagemEstabelecimento: produto.estabelecimento?.imagem || fast,
    estabelecimento: produto?.estabelecimento?.nome || "Estabelecimento",
    mediaAvaliacao: produto?.mediaAvaliacao || 0,
    tempoEntrega: produto?.estabelecimento?.tempoPessoa || 0,
    tempoEntregaCarro: produto?.estabelecimento?.tempoCarro || 0,
    tempoEntregaBike: produto?.estabelecimento?.tempoBike || 0,
  };

  return (
    <div className="bg-black-200">
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
      <main className="flex py-20 w-10/12 gap-y-20 max-w-[1200px] mx-auto flex-col">
        <div className="flex justify-between w-full mx-auto ">
          <ImageContainer images={produto.imagens || []} />

          <div>
            <div className="flex flex-col gap-y-6">
              <h2 className="text-2xl font-medium">{mapper.nome}</h2>
              <p className="text-5xl	">
                RS{" "}
                {mapper.preco.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </p>
              <div className="flex flex-row gap-x-2">
                <div className="flex flex-row gap-x-1">
                  <Rating
                    size="small"
                    value={mapper.mediaAvaliacao}
                    readOnly
                    precision={0.5}
                  />
                </div>
                <p>({mapper.mediaAvaliacao.toFixed(1)})</p>
              </div>
              <p className="text-2xl">Tempo do percurso</p>
              <div className="flex gap-x-4 items-center justify-around">
                <div className="flex flex-col gap-y-2 justify-center items-center">
                  <img src={Pe} alt="" className="w-7 h-7 " />
                  <h4 className="text-sm">
                    {conversorTime(mapper.tempoEntrega)}
                  </h4>
                </div>
                <div className="flex flex-col gap-y-2 justify-center items-center">
                  <img src={Carro} alt="" className="w-7 h-7 " />
                  <h4 className="text-sm">
                    {conversorTime(mapper.tempoEntregaCarro)}
                  </h4>
                </div>
                <div className="flex flex-col gap-y-2 justify-center items-center">
                  <img src={Bike} alt="" className="w-7 h-7 " />
                  <h4 className="text-sm">
                    {conversorTime(mapper.tempoEntregaBike)}
                  </h4>
                </div>
              </div>

              <div className="flex flex-row gap-x-2 items-center">
                <div className="bg-black-300  w-full py-4 rounded-lg flex justify-around items-center">
                  <div className="">
                    <Button
                      variants={{
                        colors: "neutral",
                      }}
                      onClick={() =>
                        setQtd((prev) => (prev > 0 ? prev - 1 : 0))
                      }
                    >
                      <Remove fontSize="small" />
                    </Button>
                  </div>
                  <span className="font-medium">{qtd}</span>
                  <div>
                    <Button
                      variants={{
                        colors: "neutral",
                      }}
                      onClick={() => setQtd((prev) => prev + 1)}
                    >
                      <Add fontSize="small" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-[40px] flex-col gap-y-4">
              <Button
                onClick={comprarProduto}
                variants={{
                  sizes: "lg",
                  class: "font-medium",
                }}
              >
                Reservar na loja
              </Button>
            </div>
            <div className="flex flex-col gap-y-9">
              <div className="flex flex-col pt-[52px] gap-y-4">
                <div className="flex flex-row gap-x-12 items-center">
                  <img
                    src={mapper.imagemEstabelecimento}
                    alt=""
                    className="rounded-full w-[70px] h-[70px]"
                  />
                  <p className="text-3xl font-medium ">
                    {mapper.estabelecimento}
                  </p>
                </div>
              </div>
              {console.log(produto.estabelecimento?.metodoPagamento)}
              {produto.estabelecimento?.metodoPagamento?.length > 0 && (
                <div className="flex flex-col gap-y-4">
                  <p className="text-base">Meios de pagamento na loja</p>
                  <div className="flex flex-row gap-x-12">
                    {produto.estabelecimento?.metodoPagamento?.map(
                      (metodoPagamento) => (
                        <img
                          src={ENUMMETODOPAGAMENTO[metodoPagamento.nome]}
                          key={metodoPagamento}
                          className="w-12 h-12"
                        />
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="min-h-[250px]">
          <h2 className="text-3xl font-medium mb-5 ">Descricao</h2>
          <p className="text-lg">{produto.descricao}</p>
        </div>

        <div className="flex flex-col w-full justify-between  gap-y-10 ">
          <div className="flex flex-col gap-y-4 w-full  justify-between">
            <div className="flex flex-col gap-y-2">
              <h2 className="text-xl font-medium">Adicione uma avaliação</h2>
              <div className="flex flex-row gap-x-2">
                <StarAvaliacao onRatingChange={handleRatingChange} />
              </div>
            </div>
            <div className="flex flex-col gap-y-10 ">
              <div className="flex flex-col gap-y-2">
                <InputRoot.TextArea
                  placeholder="Descreva sua avaliação"
                  className={"resize-none"}
                  onChange={(e) =>
                    setPostAvaliacao((prev) => ({
                      ...prev,
                      comentario: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="flex justify-end ">
                <div className="w-min">
                  <Button
                    variants={{
                      class: "px-20 w-max font-medium ",
                      sizes: "lg",
                    }}
                    onClick={adicionarAvaliacao}
                  >
                    Publicar
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-80">
            <div className="flex flex-col justify-start gap-y-8 w-full">
              <div>
                <h2 className="text-2xl font-medium mb-5">Avaliações</h2>
                <hr className="border-gray-300" />
              </div>
              <div className="grid grid-cols-2 gap-10">
                {avaliacoes.map((avaliacao) => (
                  <>
                    <Avaliacao
                      key={avaliacao.id}
                      avaliacao={{
                        comentario: avaliacao.comentario,
                        stars: avaliacao.qtdEstrela,
                        dt: avaliacao.data,
                        usuario: avaliacao?.usuario,
                      }}
                    />
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </main>
    </div>
  );
}

export default TelaProduto;
