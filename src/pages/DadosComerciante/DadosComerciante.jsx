import { useEffect, useState } from "react";
import MenuComerciante from "@componentes/MenuComerciante/MenuComerciante";
import { ArrowForwardIos } from "@mui/icons-material";
import { ArrowBackIos } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import api from "@/services/api/services";
import { descriptografar } from "@utils/Autheticated";
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import axios from "axios";

function DadosComerciante() {
  injectStyle();
  const [divAtual, setDivAtual] = useState("div1");
  const [comerciante, setComerciantes] = useState({});
  const [endereco, setEnderecos] = useState([]);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  const [ball1Color, setBall1Color] = useState("orange-principal");
  const [ball2Color, setBall2Color] = useState("black-500");

  const getComerciantes = (id) => {
    toast.loading("Carregando...");
    api
      .get(`/comerciantes/${id}`)
      .then((res) => {
        toast.dismiss();
        setComerciantes(res.data.length == 0 ? {} : res.data);
      })
      .catch((err) => {});
  };

  const atualizarComerciante = () => {
    let cnpj = comerciante.cnpj;
    let nome = comerciante.nome;
    let razaoSocial = comerciante.razaoSocial;
    let email = comerciante.email;
    let cep = comerciante?.endereco?.cep;
    cep = cep.replace(/-/g, "");
    let numero = comerciante?.endereco?.numero;
    const data = {
      cnpj,
      nome,
      razaoSocial,
      email,
      cep,
      numero,
    };

    const loading = toast.loading("Carregando...");
    api
      .put(`/comerciantes/${userId}`, data)
      .then((res) => {
        toast.dismiss(loading);
        toast.success("Dados atualizados com sucesso!", { autoClose: 2000 });
        setTimeout(() => {
          navigate("/index");
        }, 3000);
      })
      .catch((err) => {
        toast.dismiss(loading);
      });
  };

  const getEnderecos = async () => {
    let cep = comerciante?.endereco?.cep;
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

      const enderecoData = response.data;
      setComerciantes((prevComerciantes) => {
        return {
          ...prevComerciantes,
          endereco: {
            ...prevComerciantes.endereco,
            rua: enderecoData.logradouro || "",
            bairro: enderecoData.bairro || "",
            cep: response.data.cep,
            cidade: enderecoData.localidade,
            estado: enderecoData.uf,
          },
        };
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setComerciantes((prevComerciantes) => {
      if (["cep", "rua", "bairro", "numero"].includes(name)) {
        return {
          ...prevComerciantes,
          endereco: {
            ...prevComerciantes.endereco,
            [name]: value,
          },
        };
      } else {
        return {
          ...prevComerciantes,
          [name]: value,
        };
      }
    });
  };

  useEffect(() => {
    const userDetailsCrypt = descriptografar(sessionStorage?.USERDETAILS);
    const { id } = JSON.parse(userDetailsCrypt);
    setUserId(id);
    getComerciantes(id);
    getEnderecos(comerciante?.endereco?.cep);
  }, [userId]);

  useEffect(() => {
    if (comerciante?.endereco?.cep && comerciante.endereco.cep.length === 8) {
      getEnderecos();
    }
  }, [comerciante?.endereco?.cep]);

  return (
    <div className="flex flex-row">
      <MenuComerciante>
        <Link to="/comerciante/lojas">
          <li className="text-lg text-white-principal flex gap-x-4 mb-5 items-center">
            <svg
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 2V0H17V2H1ZM1 16V10H0V8L1 3H17L18 8V10H17V16H15V10H11V16H1ZM3 14H9V10H3V14ZM2.05 8H15.95L15.35 5H2.65L2.05 8Z"
                fill={
                  location.pathname === "/comerciante/lojas"
                    ? "orange"
                    : "white"
                }
              />
            </svg>{" "}
            <span
              className={
                location.pathname === "/comerciante/lojas" &&
                "text-orange-menu font-medium"
              }
            >
              Gerenciar Lojas
            </span>
          </li>
        </Link>
        <li className="text-lg text-white-principal flex gap-x-4  mb-5 items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.062 8.14914V15.2707C17.062 15.7634 16.8868 16.1853 16.5362 16.5365C16.1851 16.887 15.7631 17.0623 15.2705 17.0623H2.72933C2.23664 17.0623 1.81502 16.887 1.46446 16.5365C1.11331 16.1853 0.937735 15.7634 0.937735 15.2707V8.14914C0.594347 7.83561 0.32949 7.4325 0.143165 6.93982C-0.0437576 6.44713 -0.0476394 5.90965 0.13152 5.32739L1.0721 2.28168C1.19154 1.8935 1.40444 1.57251 1.71081 1.3187C2.01657 1.06489 2.37101 0.937988 2.77412 0.937988H15.2257C15.6288 0.937988 15.9796 1.06101 16.2782 1.30706C16.5768 1.5537 16.7933 1.87857 16.9277 2.28168L17.8683 5.32739C18.0474 5.90965 18.0438 6.43966 17.8575 6.91742C17.6706 7.39518 17.4054 7.80575 17.062 8.14914ZM10.9706 7.20856C11.3738 7.20856 11.6798 7.0703 11.8888 6.7938C12.0979 6.5179 12.18 6.20825 12.1352 5.86486L11.6425 2.72958H9.89569V6.04402C9.89569 6.35755 10.0002 6.63017 10.2092 6.86188C10.4182 7.093 10.672 7.20856 10.9706 7.20856ZM6.93956 7.20856C7.28295 7.20856 7.56304 7.093 7.77982 6.86188C7.996 6.63017 8.1041 6.35755 8.1041 6.04402V2.72958H6.3573L5.86461 5.86486C5.80489 6.22318 5.88342 6.53671 6.1002 6.80545C6.31639 7.07419 6.59618 7.20856 6.93956 7.20856ZM2.95327 7.20856C3.22201 7.20856 3.45701 7.11151 3.65827 6.91742C3.86012 6.72333 3.98344 6.47699 4.02823 6.17839L4.52092 2.72958H2.77412L1.87832 5.73049C1.78874 6.02909 1.83711 6.35009 2.02344 6.69347C2.21036 7.03686 2.52031 7.20856 2.95327 7.20856ZM15.0465 7.20856C15.4795 7.20856 15.793 7.03686 15.9871 6.69347C16.1812 6.35009 16.226 6.02909 16.1215 5.73049L15.1809 2.72958H13.4789L13.9716 6.17839C14.0163 6.47699 14.1397 6.72333 14.3415 6.91742C14.5428 7.11151 14.7778 7.20856 15.0465 7.20856ZM2.72933 15.2707H15.2705V8.95536C15.1958 8.98522 15.1474 9.00015 15.1253 9.00015H15.0465C14.6434 9.00015 14.2887 8.93296 13.9823 8.79859C13.6765 8.66422 13.3744 8.44774 13.0758 8.14914C12.807 8.41788 12.501 8.6269 12.1576 8.7762C11.8142 8.9255 11.4484 9.00015 11.0602 9.00015C10.6571 9.00015 10.28 8.9255 9.92883 8.7762C9.57828 8.6269 9.26863 8.41788 8.99989 8.14914C8.74608 8.41788 8.45137 8.6269 8.11574 8.7762C7.77952 8.9255 7.41732 9.00015 7.02914 9.00015C6.59618 9.00015 6.20412 8.9255 5.85296 8.7762C5.50241 8.6269 5.19276 8.41788 4.92402 8.14914C4.6105 8.46267 4.30085 8.68274 3.99509 8.80934C3.68872 8.93654 3.34145 9.00015 2.95327 9.00015H2.85295C2.81532 9.00015 2.77412 8.98522 2.72933 8.95536V15.2707Z"
              fill="white"
            />
          </svg>
          <span
            className={
              location.pathname === "/comerciante/analise" &&
              "text-orange-menu font-medium"
            }
          >
            Análises de Venda
          </span>
        </li>

        <Link to="/comerciante/dados">
          <li className="text-lg text-white-principal flex gap-x-4 mb-5 items-center">
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5 16H13.5V14H4.5V16ZM4.5 12H13.5V10H4.5V12ZM2.25 20C1.63125 20 1.10156 19.8042 0.660937 19.4125C0.220312 19.0208 0 18.55 0 18V2C0 1.45 0.220312 0.979167 0.660937 0.5875C1.10156 0.195833 1.63125 0 2.25 0H11.25L18 6V18C18 18.55 17.7797 19.0208 17.3391 19.4125C16.8984 19.8042 16.3687 20 15.75 20H2.25ZM10.125 7V2H2.25V18H15.75V7H10.125Z"
                fill={location.pathname === "/comerciante/dados" && "orange"}
              />
            </svg>

            <span
              className={
                location.pathname === "/comerciante/dados" &&
                "text-orange-menu font-medium"
              }
            >
              Dados Cadastrais
            </span>
          </li>
        </Link>
      </MenuComerciante>
      <main
        className="flex h-screen w-screen justify-center"
        style={{ backgroundColor: "#EAEAEA", overflowY: "auto" }}
      >
        <div className="flex flex-col items-center gap-y-10 mt-14">
          <div className="flex flex-col items-center gap-y-2">
            <h2 className="text-2xl">Dados do comerciante</h2>
            <div className="flex flex-row items-center">
              <div className={`h-8 w-8 bg-${ball1Color} rounded-full`}></div>
              <div className="flex w-2 h-0.5 bg-black-500"></div>
              <div className={`h-8 w-8 bg-${ball2Color} rounded-full`}></div>
            </div>
          </div>
          {divAtual === "div1" && (
            <div className="flex flex-row">
              <div className="mr-36"></div>
              <div className="flex flex-col p-8 bg-white-principal w-max gap-y-4 rounded-lg drop-shadow-lg">
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="">Nome</label>
                  <input
                    name="nome"
                    className="w-96 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal"
                    type="text"
                    value={comerciante.nome}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="">CNPJ</label>
                  <input
                    name="cnpj"
                    className="w-5/5 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal"
                    type="text"
                    value={comerciante.cnpj}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="">Razão Social</label>
                  <input
                    name="razaoSocial"
                    className="w-5/5 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal"
                    type="text"
                    value={comerciante.razaoSocial}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="">Email</label>
                  <input
                    name="email"
                    className="w-5/5 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal"
                    type="text"
                    value={comerciante.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button
                className="ml-36"
                onClick={() => {
                  setBall1Color("black-500");
                  setBall2Color("orange-principal");
                  setDivAtual(divAtual === "div1" ? "div2" : "div1");
                }}
              >
                {<ArrowForwardIos />}
              </button>
            </div>
          )}
          {divAtual === "div2" && (
            <div className="flex flex-row">
              <button
                className="mr-36"
                onClick={() => {
                  setBall1Color("orange-principal");
                  setBall2Color("black-500");
                  setDivAtual(divAtual === "div1" ? "div2" : "div1");
                }}
              >
                {<ArrowBackIos />}
              </button>
              <div className="flex flex-col p-8 bg-white-principal w-max gap-y-4 rounded-lg drop-shadow-lg">
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="">CEP</label>
                  <input
                    name="cep"
                    className="w-56 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal"
                    type="text"
                    value={comerciante?.endereco?.cep}
                    onChange={(e) => {
                      handleChange(e);
                      if (e.target.value.length === 8) {
                        getEnderecos();
                      }
                    }}
                  />
                </div>
                <div className="flex flex-col gap-y-2">
                  <label htmlFor="">Logradouro</label>
                  <input
                    name="rua"
                    className="w-5/5 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal"
                    type="text"
                    value={comerciante?.endereco?.rua}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-row gap-x-8">
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="">Número</label>
                    <input
                      name="numero"
                      type="text"
                      className="w-44 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal"
                      value={comerciante?.endereco?.numero}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="">Bairro</label>
                    <input
                      name="bairro"
                      type="text"
                      className="w-64 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal"
                      value={comerciante?.endereco?.bairro}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-x-8">
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="">Cidade</label>
                    <input
                      name="cidade"
                      type="text"
                      className="w-80 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal"
                      value={comerciante?.endereco?.cidade}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <label htmlFor="">Estado</label>
                    <input
                      name="estado"
                      type="text"
                      className="w-32 px-4 py-2 rounded-lg border-solid border-2 border-stroke-principal"
                      value={comerciante?.endereco?.estado}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex ml-36"></div>
            </div>
          )}
          <button
            className="font-medium px-14 py-2 bg-orange-principal rounded-lg"
            onClick={atualizarComerciante}
          >
            Salvar
          </button>
        </div>
      </main>
    </div>
  );
}

export default DadosComerciante;
