import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import api from "../../services/api";
import InputRoot from "../../componentes/Input/InputRoot";
import Button from "../../componentes/Button/Button";
import { TEXTS } from "../../utils/text-placeholders";
import { useNavigate } from "react-router-dom";
import BoxImages from "./componentes/BoxImages";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

const Login = () => {
  injectStyle();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(false);
  const navigate = useNavigate();
  const teste = useState("");
  const carrossel = useRef(null);

  let itemAtual = 1;

  const logar = async () => {
    setCarregando(true);
    setErro("");
    if (!email || !senha) {
      toast.error("Email e senha são obrigatórios");
      setCarregando(false);
      return;
    }
    const loading = toast.loading("Carregando...");

    api
      .post("/usuarios/login", { email, senha })
      .then((resposta) => {
        toast.dismiss(loading);
        if (resposta.data.error) {
          setErro(resposta.data.message);
          toast.error(resposta.data.message);
          return;
        }
        sessionStorage.setItem("TOKEN", resposta.data.token);
        sessionStorage.setItem(
          "USUARIO",
          JSON.stringify(resposta.data.usuario)
        );

        setTimeout(() => {
          navigate("/GerenciamentoProdutos");
        }, 3000);
        toast.success("Login realizado com sucesso!", {
          autoClose: 2000,
        });

        setTimeout(() => {
          navigate("/GerenciamentoProdutos");
        }, 3000);
      })

      .catch((erro) => {
        toast.dismiss(loading);
        if (erro.response.status == 401) {
          toast.error("Email ou senha incorretos");
        }
      });
  };

  let timeCarrossel;

  const startCarrossel = () => {
    clearTimeout(timeCarrossel);
    const delay = itemAtual === 1 ? 100 : 5000;
    timeCarrossel = setTimeout(() => {
      nextItemCarrossel(4);
      startCarrossel();
    }, delay);
  };

  const nextItemCarrossel = (itemsCarrossel) => {
    if (itemAtual < itemsCarrossel) {
      console.log(itemAtual);
      carrossel.current.style.scrollBehavior = "smooth";
      carrossel.current.scrollLeft = carrossel.current.clientWidth * itemAtual;
      itemAtual++;
    } else {
      carrossel.current.style.scrollBehavior = "unset";
      carrossel.current.scrollLeft = 0;
      itemAtual = 1;
      startCarrossel();
    }
  };

  useEffect(() => {
    startCarrossel();
    return () => clearTimeout(timeCarrossel);
  }, []);

  // Inicie o carrossel

  return (
    <main
      className="w-screen h-screen flex  
    100 "
    >
      <aside className="w-1/2 flex justify-center   relative ">
        <div
          className="flex overflow-x-scroll h-screen   overflow-y-auto scrollbar-hide "
          ref={carrossel}
        >
          <div className="flex-shrink-0 w-full relative  ">
            <img
              src="/src/assets/foto-login-3.jpg"
              alt=""
              className="object-cover w-full h-full"
            />
            <BoxImages>
              Encontre o que você procura em um piscar de olhos! Easy Find: Sua
              rota rápida para os melhores produtos, onde quer que você esteja.
            </BoxImages>
          </div>
          <div className="flex-shrink-0 w-full relative">
            <img
              src="/src/assets/foto-login-1.jpg "
              alt=""
              className="object-cover  w-full h-full"
            />
            <BoxImages>
              Encontre o que você procura em um piscar de olhos! Easy Find: Sua
              rota rápida para os melhores produtos, onde quer que você esteja.
            </BoxImages>
          </div>
          <div className="flex-shrink-0 w-full relative ">
            <img
              src="/src/assets/foto-login-2.jpg"
              alt=""
              className="object-cover  w-full h-full"
            />
            <BoxImages>
              Não encontra o produto que deseja? Easy Find te leva até lá!
              Descubra a magia de encontrar o que deseja, quando deseja. Sua
              busca termina aqui.
            </BoxImages>
          </div>
          <div className="flex-shrink-0 w-full relative ">
            <img
              src="/src/assets/foto-login-3.jpg"
              alt=""
              className="object-cover w-full h-full"
            />
            <BoxImages>
              Nunca mais se perca nas escolhas. Easy Find: Transformando a busca
              em uma jornada fácil. Deixe-nos guiar você até a satisfação!
            </BoxImages>
          </div>
        </div>
      </aside>
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-col w-7/12 max-w-lg  items-center   gap-y-5 ">
          <div className="text-center flex flex-col gap-y-2">
            <img
              src="/src/assets/logo-easy.png"
              alt=""
              className="w-14 mx-auto"
            />
            <h2 className="text-3xl font-medium">Bem vindo a EasyFind</h2>
            <p className="text-xl">Conectando você ao comercio local</p>
          </div>
          <Button className="rounded-full  w-8/12  h-max  border-[1px] bg-transparent font-normal  hover:bg-orange-principal hover:text-white-principal transition-colors    border-orange-300">
            Fazer Login com o Google
          </Button>

          <div className="w-full flex flex-col gap-x-2">
            <InputRoot.Label>{TEXTS.TITLES.LOGIN}</InputRoot.Label>
            <InputRoot.Input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col gap-x-2">
            <InputRoot.Label>{TEXTS.TITLES.SENHA}</InputRoot.Label>
            <InputRoot.Input
              type="password"
              onChange={(e) => setSenha(e.target.value)}
            />
            {}
          </div>
          {}
          <Button
            className={
              "rounded-full  w-8/12  h-max  text-white-principal font-normal   bg-orange-principal"
            }
            onClick={logar}
          >
            Entrar
          </Button>
          <span>Não tem uma conta? Faça seu cadastro</span>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
};

export default Login;
