import { useEffect, useState } from "react";
import MenuComerciante from "../../componentes/MenuComerciante/MenuComerciante";
import { ArrowForwardIos } from "@mui/icons-material";
import { ArrowBackIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import {descriptografar} from "../../utils/Autheticated"
import { ToastContainer, toast } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";
import axios from 'axios';

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
    api.get(`/comerciantes/${id}`).then((res) => {
        toast.dismiss();
        console.log(res.data);
        setComerciantes(res.data.length == 0 ? {} : res.data);
      }).catch((err) => {
      });
  };

  const atualizarComerciante = () =>{
    let cnpj = comerciante.cnpj;
    let nome = comerciante.nome;
    let razaoSocial =comerciante.razaoSocial;
    let email = comerciante.email;
    let cep = comerciante?.endereco?.cep;
    cep = cep.replace(/-/g, '');
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
        toast.success("Dados atualizados com sucesso!",{autoClose:2000});
        setTimeout(() => {
          //navigate("/index");
        }, 3000);
        console.log(comerciante.endereco);
      })
      .catch((err) => {
        toast.dismiss(loading);
      });
  };

  const getEnderecos = async () => {
    let cep = comerciante?.endereco?.cep;
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      console.log(response.data.bairro);
  
      const enderecoData = response.data;
      console.log(enderecoData);
      setComerciantes((prevComerciantes) => {
        return {
          ...prevComerciantes,
          endereco: {
            ...prevComerciantes.endereco,
            rua: enderecoData.logradouro || "",
            bairro: enderecoData.bairro || "",
            cep: response.data.cep,
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
      if (['cep', 'rua', 'bairro', 'numero'].includes(name)) {
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
    console.log(userDetailsCrypt);
    const { id } = JSON.parse(userDetailsCrypt);
    setUserId(id);
    getComerciantes(id);
  }, [userId]);

  useEffect(() => {
    if (comerciante?.endereco?.cep && comerciante.endereco.cep.length === 8) {
      getEnderecos();
    }
  }, [comerciante?.endereco?.cep]);

  return (
    <div className="flex flex-row">
      <MenuComerciante />
      <main
        className="flex h-screen w-screen justify-center"
        style={{ backgroundColor: "#EAEAEA", overflowY: "auto" }}
      >
        <div className="flex flex-col items-center gap-y-10 mt-14">
          <div className="flex flex-col items-center gap-y-2">
            <h2 className="text-2xl">Dados do comerciante</h2>
            <div className="flex flex-row">
              <div className={`h-8 w-8 bg-${ball1Color} rounded-full`}></div>
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
                onClick={() =>{
                    setBall1Color("black-500");
                    setBall2Color("orange-principal");
                    setDivAtual(divAtual === "div1" ? "div2" : "div1")
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
                onClick={() =>{
                    setBall1Color("orange-principal");
                    setBall2Color("black-500");
                    setDivAtual(divAtual === "div1" ? "div2" : "div1")
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
