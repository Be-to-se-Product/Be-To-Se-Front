import React, { useContext, useEffect, useState } from "react";
import backIcon from "../../assets/back.svg";
import logo from "../../assets/logo.png";
import produtoIcon from "../../assets/product-icon.svg";
import negocioIcon from "../../assets/negocio.svg";
import shopIcon from "../../assets/shop.svg";
import datePage from "../../assets/datePage.svg";
import downIcon from "../../assets/down.svg";
import { Link, useNavigate } from "react-router-dom";
import { descriptografar } from "../../utils/Autheticated";
import api from "../../services/api";
import AplicattionContext from "../../context/Apllicattion/AplicattionContext";

const MenuComerciante = ({ children, isLogo }) => {
  const [user, setUser] = useState({});
  const [logoEstabelecimento, setLogo] = useState("");
  const { idEstabelecimento } = useContext(AplicattionContext);
  const navigate = useNavigate();

  const getEstabelecimento = () => {
    api
      .get("/estabelecimentos/" + idEstabelecimento)
      .then((resposta) => {
        setUser(resposta.data);
        setLogo(resposta.data.imagens[0]);
      })

      .catch((erro) => {
        console.log(erro);
       
      });
     
  };

  useEffect(() => {
    getEstabelecimento();
  }, []);


  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <aside className="bg-black-900  flex flex-col h-screen min-w-[350px] max-w-[350px]">
      <div className="h-full w-full">
        <div className="w-full h-1/4 bg-orange-principal"></div>
        <div className="relative pt-20 px-2">
          <div className="logo flex items-end  absolute top-[-80px] ">
            {isLogo && (
              <img
                src={logoEstabelecimento}
                alt=""
                className="w-[150px] h-[150px] rounded-full"
              />
            )}
            <h2 className="font-medium py-2 text-base text-white-principal">
              {user.nome}
            </h2>
          </div>

          <div className="content-option mt-10 px-7 w-full">
            <nav>
              <ul className="flex flex-col gap-4">{children}</ul>
            </nav>
          </div>
        </div>
      </div>

      <button
        className="w-100 flex px-7 mb-8 cursor-pointer text-xl text-white-principal gap-x-4"
        onClick={() => logout(navigate)}
        type="button"
      >
        <img src={backIcon} alt="" className="w-6" /> Sair
      </button>
    </aside>
  );
};

export default MenuComerciante;
