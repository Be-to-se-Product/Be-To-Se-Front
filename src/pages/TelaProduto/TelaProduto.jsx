import NavbarRoot from "@componentes/Navbar/NavbarRoot";
import star from "@assets/star.svg";
import fast from "@assets/fastshop.png";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import api from "@/services/api/services";
import Avaliacao from "@componentes/Avaliacao/Avaliacao";
import CardMetodo from "./componentes/CardMetodo";
import { descriptografar } from "@utils/Autheticated";
import StarAvaliacao from "./componentes/StarAvaliacao";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Rating from "@mui/material/Rating";

function TelaProduto() {
  const { id } = useParams();
  injectStyle();
  const [produtos, setProdutos] = useState([]);
  const [avaliacoes, setAvalicoes] = useState([]);
  const [qtd, setQtd] = useState(1);
  const produtoId = id;
  const [userId, setUserId] = useState(null);
  const [comentario, setComentario] = useState("");
  const [qtdEstrela, setQtdEstrela] = useState(null);
  const [mediaAvaliacao, setMediaAvaliacao] = useState(0);
  const nomeEmpresa = produtos?.secao?.estabelecimento?.nome;
  const metodosEmpresa = produtos?.secao?.estabelecimento?.idMetodo;
  const [imagemDestaque, setImagemDestaque] = useState(
    "/src/assets/default-image.jpeg"
  );
  const navigate = useNavigate();

  const mudarImagem = (novaImagem) => {
    setImagemDestaque(novaImagem);
  };

  const comprarProduto = () => {
    let quantidade = qtd;
    let idProduto = produtoId;
    let origem = "TelaProduto";
    const data = [
      {
        idProduto,
        quantidade,
        origem,
      },
    ];
    navigate(`/compra`, { state: data });
  };

  const adicionarAvaliacao = () => {
    let consumidor = userId;
    let produto = produtoId;

    const data = {
      qtdEstrela,
      comentario,
      consumidor,
      produto,
    };

    const loading = toast.loading("Carregando...");
    api
      .post("/avaliacoes", data)
      .then(() => {
        toast.dismiss(loading);
        toast.success("Avaliação adicionada com sucesso!", {
          autoClose: 20000,
        });
      })
      .catch(() => {
        toast.dismiss(loading);
        toast.error("Falha ao adicionar avaliação!", { autoClose: 2000 });
      })
      .finally(() => {
        toast.dismiss(loading);
        getAvaliacao();
        calcularMediaAvaliacao();
      });
  };

  const getProduto = () => {
    toast.loading("Carregando...");
    api
      .get(`/produtos/${produtoId}`)
      .then((res) => {
        toast.dismiss();
        setProdutos(res.data.length == 0 ? [] : res.data);
        setImagemDestaque(
          res.data?.imagens?.length > 0
            ? res.data.imagens[0]
            : "/src/assets/default-image.jpeg"
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const getAvaliacao = () => {
    toast.loading("Carregando...");
    api
      .get(`/avaliacoes/${produtoId}`)
      .then((res) => {
        toast.dismiss();
        setAvalicoes(res.data.length == 0 ? [] : res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const calcularMediaAvaliacao = () => {
    let soma = 0;

    for (let i = 0; i < avaliacoes.length; i++) {
      soma += avaliacoes[i].qtdEstrela;
    }

    setMediaAvaliacao(
      isNaN(soma / avaliacoes.length) ? 0 : soma / avaliacoes.length
    );
  };

  const aumentarQuantidade = () => {
    setQtd(qtd + 1);
  };

  const handleRatingChange = (novaClassificacao) => {
    setQtdEstrela(novaClassificacao);
  };

  useEffect(() => {
    const userDetailsCrypt = descriptografar(sessionStorage?.USERDETAILS);
    const { id } = JSON.parse(userDetailsCrypt);
    setUserId(id);
    getAvaliacao();
    getProduto();
  }, []);

  useEffect(() => {
    calcularMediaAvaliacao();
  }, [avaliacoes]);

  return (
    <div>
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
      <main
        className="flex pt-[85px] flex-col"
        style={{ backgroundColor: "#EAEAEA" }}
      >
        <div className="flex flex-row justify-between mx-auto w-10/12 ">
          <div className="flex flex-col  ">
            <div id="imagem_destaque" className="mb-6 w-10/12">
              <img
                src={imagemDestaque}
                alt=""
                className="h-[550px] rounded-md object-cover w-full"
              />
            </div>
            <div
              className="grid grid-cols-4 w-10/12 justify-items-center"
              id="imagem_adicional"
            >
              <img
                src={
                  produtos?.imagens?.length > 1
                    ? produtos.imagens[1]
                    : "/src/assets/default-image.jpeg"
                }
                alt=""
                className="h-24 border-solid border-2 border-stroke-principal rounded-lg w-[150px] "
                onClick={() =>
                  mudarImagem(
                    produtos?.imagens?.length > 1
                      ? produtos.imagens[1]
                      : "/src/assets/default-image.jpeg"
                  )
                }
              />
              <img
                src={
                  produtos?.imagens?.length > 2
                    ? produtos.imagens[2]
                    : "/src/assets/default-image.jpeg"
                }
                alt=""
                className="h-24 border-solid border-2 border-stroke-principal rounded-lg w-[150px]"
                onClick={() =>
                  mudarImagem(
                    produtos?.imagens?.length > 2
                      ? produtos.imagens[2]
                      : "/src/assets/default-image.jpeg"
                  )
                }
              />
              <img
                src={
                  produtos?.imagens?.length > 3
                    ? produtos.imagens[3]
                    : "/src/assets/default-image.jpeg"
                }
                alt=""
                className="h-24 border-solid border-2 border-stroke-principal rounded-lg  "
                onClick={() =>
                  mudarImagem(
                    produtos?.imagens?.length > 3
                      ? produtos.imagens[3]
                      : "/src/assets/default-image.jpeg"
                  )
                }
              />
              <img
                src={
                  produtos?.imagens?.length > 0
                    ? produtos.imagens[0]
                    : "/src/assets/default-image.jpeg"
                }
                alt=""
                className="h-24 border-solid border-2 border-stroke-principal rounded-lg max-w-[150px]  "
                onClick={() =>
                  mudarImagem(
                    produtos?.imagens?.length > 0
                      ? produtos.imagens[0]
                      : "/src/assets/default-image.jpeg"
                  )
                }
              />
            </div>
            <div className="flex flex-col pt-[80px] max-w-md gap-y-6">
              <h2 className="text-2xl">Descrição</h2>
              <p className="text-justify">{produtos.descricao}</p>
            </div>
          </div>

          <div className="w-[600px]">
            <div className="flex flex-col gap-y-6">
              <h2 className="text-2xl font-medium">{produtos.nome}</h2>
              <p className="text-5xl	">RS {produtos.preco?.toFixed(2)}</p>
              <div className="flex flex-row gap-x-2">
                <div className="flex flex-row gap-x-1">
                  <Rating
                    size="small"
                    value={mediaAvaliacao}
                    readOnly
                    precision={0.5}
                  />
                </div>
                <p>({mediaAvaliacao.toFixed(1)})</p>
              </div>
              <p className="text-2xl">Tempo do percurso</p>

              <div className="flex flex-row gap-x-2 items-center">
                <p className="text-base">Quantidade</p>
                <input
                  className="px-4 py-2 w-16 rounded-lg"
                  type="text"
                  value={qtd}
                />
                <button onClick={aumentarQuantidade}>+</button>
              </div>
            </div>
            <div className="flex pt-[40px] flex-col gap-y-4">
              <button
                className="bg-orange-principal py-2 text-2xl font-medium rounded-lg"
                onClick={comprarProduto}
              >
                Reservar na loja
              </button>
            </div>
            <div className="flex flex-col gap-y-9">
              <div className="flex flex-col pt-[52px] gap-y-4">
                <div className="flex flex-row gap-x-12 items-center">
                  <img src={fast} alt="" className="rounded-full" />
                  <p className="text-3xl font-medium max-w-min">
                    {nomeEmpresa}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="text-base">Meios de pagamento na loja</p>
                <div className="flex flex-row gap-x-12">
                  {metodosEmpresa &&
                    metodosEmpresa.map((metodo, key) => (
                      <CardMetodo metodo={metodo} key={key} />
                    ))}
                </div>
              </div>
              <button className="bg-black-100 px-8 py-2 drop-shadow-lg rounded-lg text-blue-900">
                Ver catálogo completo de produtos
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col   mx-auto pt-[44px] justify-between  gap-y-10 w-10/12">
          <div className="flex flex-row gap-x-64 w-max justify-between">
            <div className="flex flex-col gap-y-8">
              <h2 className="text-base">Adicione uma nota</h2>
              <div className="flex flex-row gap-x-2">
                <StarAvaliacao onRatingChange={handleRatingChange} />
              </div>
            </div>
            <div className="flex flex-col gap-y-10">
              <div className="flex flex-col gap-y-2">
                <p>Adicione um comentário</p>
                <textarea
                  name=""
                  id="comentario_avaliacao"
                  placeholder="Digite aqui"
                  cols="65"
                  rows="3"
                  className="rounded-lg px-4 py-2 border-solid border-2 border-stroke-principal"
                  onChange={(e) => setComentario(e.target.value)}
                ></textarea>
              </div>
              <button
                className="bg-orange-400 px-4 py-2 ml-auto font-medium rounded-lg"
                onClick={adicionarAvaliacao}
              >
                Publicar
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between gap-80">
            <div className=" flex flex-col">
              <p>Notas dos clientes</p>
              <div className="flex flex-row">
                <div className="flex flex-row items-end	gap-x-2">
                  <p className="text-4xl">{mediaAvaliacao.toFixed(1)}</p>
                  <img src={star} alt="" className="h-2.5 mb-2" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-y-8 w-full">
              <select
                className="bg-orange-400 px-2 py-2  font-medium rounded-full w-32"
                name=""
                id=""
              >
                <option value="">Ordernar</option>
                <option value="">Maior nota</option>
                <option value="">Menor nota</option>
              </select>
              {avaliacoes.map((avaliacao) => (
                <>
                  <Avaliacao
                    key={avaliacao.id}
                    avaliacao={{
                      comentario: avaliacao.comentario,
                      stars: avaliacao.qtdEstrela,
                      dt: avaliacao.data,
                    }}
                  />
                </>
              ))}
            </div>
          </div>
        </div>
        <ToastContainer />
      </main>
    </div>
  );
}

export default TelaProduto;
