import NavbarRoot from "../../componentes/Navbar/NavbarRoot";
import star from "../../assets/star.svg";
import car from "../../assets/car-black.svg";
import bike from "../../assets/bike-black.svg";
import men from "../../assets/men-black.svg";
import jbl from "../../assets/JBL.png";
import jbl1 from "../../assets/JBL1.png";
import jbl2 from "../../assets/JBL2.png";
import jbl3 from "../../assets/JBL3.png";
import fast from "../../assets/fastshop.png";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import api from "../../services/api";
import CardAvaliacao from "./componentes/CardAvaliacao";
import Avaliacao from "../../componentes/Avaliacao/Avaliacao";
import CardMetodo from "./componentes/CardMetodo";
import { descriptografar } from "../../utils/Autheticated";
import StarAvaliacao from "./componentes/StarAvaliacao";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  const [imagemDestaque, setImagemDestaque] = useState(jbl);
  const navigate = useNavigate();

  const mudarImagem = (novaImagem) => {
    setImagemDestaque(novaImagem);
  };

  const comprarProduto = () =>{
    let quantidade = qtd;
    let idProduto = produtoId;
    const data = [{
        idProduto,
        quantidade,
    }];
    navigate(`/compra`, { state: data });
  }

  const adicionarProduto = () => {
    let consumidor = userId;
    let quantidade = qtd;
    let produto = produtoId;

    const data = {
      quantidade,
      produto,
      consumidor,
    };
    const loading = toast.loading("Carregando...");
    api
      .post("/carrinhos", data)
      .then((response) => {
        toast.dismiss(loading);
        toast.success("Produto adicionado ao carrinho!", { autoClose: 2000 });
      })
      .catch((error) => {
        toast.dismiss(loading);
      });
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
      .then((response) => {
        toast.dismiss(loading);
        toast.success("Avaliação adicionada com sucesso!", {
          autoClose: 20000,
        });
      })
      .catch((error) => {
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
      })
      .catch((err) => {});
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

    setMediaAvaliacao(soma / avaliacoes.length);
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
        <NavbarRoot.Menu>
          <NavbarRoot.Item></NavbarRoot.Item>
        </NavbarRoot.Menu>
      </NavbarRoot.Content>
      <main
        className="flex pt-[85px] flex-col"
        style={{ backgroundColor: "#EAEAEA" }}
      >
        <div className="flex flex-row justify-between mx-auto gap-x-40">
          <div className="flex flex-col">
            <div id="imagem_destaque">
              <img src={imagemDestaque} alt="" />
            </div>
            <div className="flex flex-row gap-x-2" id="imagem_adicional">
              <img
                src={jbl}
                alt=""
                className="h-24 border-solid border-2 border-stroke-principal rounded-lg"
                onClick={() => mudarImagem(jbl)}
              />
              <img
                src={jbl1}
                alt=""
                className="h-24 border-solid border-2 border-stroke-principal rounded-lg"
                onClick={() => mudarImagem(jbl1)}
              />
              <img
                src={jbl2}
                alt=""
                className="h-24 border-solid border-2 border-stroke-principal rounded-lg"
                onClick={() => mudarImagem(jbl2)}
              />
              <img
                src={jbl3}
                alt=""
                className="h-24 border-solid border-2 border-stroke-principal rounded-lg"
                onClick={() => mudarImagem(jbl3)}
              />
            </div>
            <div className="flex flex-col pt-[80px] max-w-md gap-y-6">
              <h2 className="text-2xl">Descrição</h2>
              <p className="text-justify">{produtos.descricao}</p>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-y-6">
              <h2 className="text-2xl font-medium">{produtos.nome}</h2>
              <p className="text-5xl	">RS {produtos.preco}</p>
              <div className="flex flex-row gap-x-2">
                <div className="flex flex-row gap-x-1">
                  <img src={star} alt="" className="w-4 h-4" />
                  <img src={star} alt="" className="w-4 h-4" />
                  <img src={star} alt="" className="w-4 h-4" />
                  <img src={star} alt="" className="w-4 h-4" />
                  <img src={star} alt="" className="w-4 h-4" />
                </div>
                <p>(4,6)</p>
              </div>
              <p className="text-2xl">Tempo do percurso</p>
              <div className="flex flex-row gap-x-12">
                <div className="flex flex-col gap-x-2">
                  <img src={men} alt="" className="h-5" />
                  <p className="text-base">30m</p>
                </div>
                <div className="flex flex-col gap-x-2">
                  <img src={car} alt="" className="h-5" />
                  <p className="text-base">30m</p>
                </div>
                <div className="flex flex-col gap-x-2">
                  <img src={bike} alt="" className="h-5" />
                  <p className="text-base">30m</p>
                </div>
              </div>
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
              <button className="bg-orange-principal py-2 text-2xl font-medium rounded-lg"
              onClick={comprarProduto}
              >
                Reservar na loja
              </button>
              <button
                className=" bg-orange_opacity-principal py-2 text-2xl font-medium rounded-lg"
                onClick={adicionarProduto}
              >
                Guardar no carrinho
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
                <div className="flex flex-row gap-x-2">
                  <div className=" flex flex-row gap-x-1">
                    <img src={star} alt="" className="w-4 h-4" />
                    <img src={star} alt="" className="w-4 h-4" />
                    <img src={star} alt="" className="w-4 h-4" />
                    <img src={star} alt="" className="w-4 h-4" />
                    <img src={star} alt="" className="w-4 h-4" />
                  </div>
                  <p>(4,6)</p>
                </div>
              </div>
              <div className="flex flex-col gap-y-4">
                <p className="text-base">Meios de pagamento na loja</p>
                <div className="flex flex-row gap-x-12">
                  {metodosEmpresa &&
                    metodosEmpresa.map((metodo) => (
                      <CardMetodo metodo={metodo} />
                    ))}
                </div>
              </div>
              <button className="bg-black-100 px-8 py-2 drop-shadow-lg rounded-lg text-blue-900">
                Ver catálogo completo de produtos
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between mx-auto pt-[44px]  gap-y-10">
          <div className="flex flex-row gap-x-64">
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
                  <CardAvaliacao
                    key={avaliacao.id}
                    comentario={avaliacao.comentario}
                    estrela={avaliacao.qtdEstrela}
                  />
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
