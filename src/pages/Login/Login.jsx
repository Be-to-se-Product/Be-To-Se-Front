import useMessages from "@/hooks/useMessages";
import api from "@/services/api/services";
import { criptografar } from "@/utils/Autheticated";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import BoxImages from "./componentes/BoxImages";
import InputRoot from "@componentes/Input/InputRoot";

import { TEXTS } from "@/utils/text-placeholders";
import Button from "@componentes/Button/Button";

function Login() {
  injectStyle();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();
  const carrossel = useRef(null);
  const { showMessage } = useMessages();
  let itemAtual = 1;

  const logar = useCallback(
    async (email, senha) => {
      toast.dismiss();
      const loading = toast.loading("Carregando...");

      if (!email || !senha) {
        toast.error("Email e senha são obrigatórios");
        toast.dismiss(loading);
        return;
      }

      api
        .post("/usuarios/login", { email, senha })
        .then((resposta) => {
          toast.dismiss(loading);
          if (resposta.data.error) {
            toast.error(resposta.data.message);
            return;
          }
          const usuario = resposta.data;
          sessionStorage.USERDETAILS = criptografar(JSON.stringify(usuario));
          toast.success("Seu login foi realizado com sucesso!", {
            autoClose: 2000,
          });
          setTimeout(() => {
            if (usuario.tipoUsuario === "CONSUMIDOR") navigate("/pesquisa");
            else navigate("/comerciante/lojas");
          }, 3000);
        })

        .catch((erro) => {
          toast.dismiss(loading);
          toast.error(showMessage(erro.response));
        });
    },
    [navigate, showMessage]
  );

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
      carrossel.current.style.scrollBehavior = "smooth";
      carrossel.current.scrollLeft = carrossel.current.clientWidth * itemAtual;
      itemAtual += 1;
    } else {
      carrossel.current.style.scrollBehavior = "unset";
      carrossel.current.scrollLeft = 0;
      itemAtual = 1;
      startCarrossel();
    }
  };
  const handleEnter = useCallback(
    (e) => {
      if (e.key === "Enter") {
        logar(email, senha);
      }
    },
    [email, logar, senha]
  );
  useEffect(() => {
    startCarrossel();
    return () => clearTimeout(timeCarrossel);
    // eslint-disable-next-line
  }, []);

  // Inicie o carrossel

  useEffect(() => {
    document.addEventListener("keypress", handleEnter);
    return () => {
      document.removeEventListener("keypress", handleEnter);
    };
  }, [handleEnter]);

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
              src="/foto-login-3.jpg"
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
              src="/foto-login-1.jpg"
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
              src="/foto-login-2.jpg"
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
              src="/foto-login-3.jpg"
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
      <div className="w-1/2 flex flex-col h-full items-center justify-center relative">
        <div className="flex flex-col w-7/12 max-w-lg  items-center   gap-y-5 ">
          <div className="text-center flex flex-col gap-y-2">
            <img src="/logo-easy.png" alt="" className="w-14 mx-auto" />
            <h2 className="text-3xl font-medium">Bem vindo a EasyFind</h2>
            <p className="text-xl">Conectando você ao comercio local</p>
          </div>
          <Button>Fazer Login com o Google</Button>
          <div className="relative w-full">
            <h2 className="bg-white-full text-center  relative z-10 w-max mx-auto px-4   ">
              Ou entre com seu e-mail
            </h2>
            <div className="w-full h-[1px] bg-black-50 absolute left-0 top-1/2  " />
          </div>
          <div className="w-full flex flex-col gap-x-2">
            <InputRoot.Label>{TEXTS.TITLES.LOGIN}</InputRoot.Label>
            <InputRoot.ContentInput
              type="email"
              placeholder={TEXTS.PLACEHOLDERS.EMAIL}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full flex flex-col gap-x-2">
            <InputRoot.Label>{TEXTS.TITLES.SENHA}</InputRoot.Label>
            <InputRoot.ContentInput
              type="password"
              placeholder={TEXTS.PLACEHOLDERS.PASSWORD}
              onChange={(e) => setSenha(e.target.value)}
            />
            {}
          </div>
          <div className="w-10/12">
            <Button
              onClick={() => logar(email, senha)}
              variants={{
                class: "w-full",
              }}
            >
              Entrar
            </Button>
          </div>
          <Link to="/cadastro">
            <span>Não tem uma conta? Faça seu cadastro</span>
          </Link>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

export default Login;
