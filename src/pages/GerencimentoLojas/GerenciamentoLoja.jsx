import React, { useState } from "react";
import MenuComerciante from "../../componentes/MenuComerciante/MenuComerciante";
import Button from "../../componentes/Button/Button";
import CardLojaRoot from "../../componentes/CardLoja/CardLojaRoot";
import down from "../../assets/down.svg";
import Modal from "../../componentes/Modal/Modal";
import api from "../../services/api"
import ModalLoja from "./componentes/ModalLoja";
import { useEffect } from "react";
import { descriptografar } from "../../utils/Autheticated";

const GerenciamentoLoja = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [isVisibleModalDelete, setIsVisibleModalDelete] = useState(false);
  const [getEstabelecimento,setEstabelecimento ] = useState([]); 
  const [userId, setUserId] = useState(null);

  const getLista = () => {
    api.get("estabelecimentos/comerciantes").then(resposta => {
      setEstabelecimento(resposta.data.length? resposta.data : []  )
      console.log(resposta.data);
    }).catch(erro => {
      console.log(erro)
    })
  }

  useEffect(() => {
    const userDetailsCrypt = descriptografar(sessionStorage?.USERDETAILS);
    const { id } = JSON.parse(userDetailsCrypt);
    setUserId(id);
    getLista() 
  },[])


  const changeModal = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  return (
    <main className="flex bg-[#EAEAEA]">
      <MenuComerciante />
      <section className="  flex flex-col text-2xl mx-[33px] w-10/12 py-20 gap-y-10 overflow-scroll h-screen  scrollbar-hide">
        <div className="flex justify-center items-center w-4xl mx-auto w-full  relative flex-col gap-y-4">
          <h2 className="text-3xl font-medium">Lojas Cadastradas </h2>
          <Button className={" h-max "} onClick={changeModal}>
            Cadastrar Nova Loja
          </Button>
        </div>

        <div className=" mx-auto w-full flex flex-wrap gap-y-10 justify-center gap-x-5 relative ">
          {
            getEstabelecimento.map(element => (<CardLojaRoot.Content>
              <CardLojaRoot.Header>
                <div className="flex gap-x-2">
                  <img src={""} alt="" />
                  <h2 className="text-base font-normal">{element.nome}</h2>
                </div>
                <div className="flex items-center gap-x-2 ">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <h3 className=" text-xs">{element.isAtivo ? 'Ativo' : 'Pendente'} </h3>
                </div>
              </CardLojaRoot.Header>
  
              <CardLojaRoot.ContentInfo>
                <div className="flex flex-col gap-y-1">
                  <CardLojaRoot.Row label={"Lograouro"} texto={element.endereco.rua} />
                  <CardLojaRoot.Row label={"Numero"} texto={element.endereco.numero} />
                  <CardLojaRoot.Row label={"Bairro"} texto={element.endereco.bairro} />
                  <CardLojaRoot.Row label={"Telefone"} texto={element.telefoneContato} />
                </div>
                <div className="flex flex-col gap-y-1">
                  <CardLojaRoot.Row
                    label={"Produtos Cadastrados"}
                    texto={element.produtosCadastrados}
                  />
                  <CardLojaRoot.Row
                    label={"Promoções ativas"}
                    texto={element.promocaoAtiva}
                  />
                  <CardLojaRoot.Row label={"Segmento"} texto={element.segmento} />
                </div>
              </CardLojaRoot.ContentInfo>
  
              <CardLojaRoot.Footer>
                <div className="flex gap-x-2">
                  <img src="./src/assets/editar.svg" alt="" />
                  <img
                    src="./src/assets/deletar.svg"
                    alt=""
                    onClick={() => setIsVisibleModalDelete(!isVisibleModalDelete)}
                  />
                </div>
  
                <div>
                  <Button className={"rounded-lg"}>Gerenciar</Button>
                </div>
              </CardLojaRoot.Footer>
            </CardLojaRoot.Content>))
          }
          
        </div>
      </section>
      <Modal isVisible={isVisibleModal}>
        <ModalLoja closeModal={setIsVisibleModal} />
      </Modal>

      <Modal isVisible={isVisibleModalDelete}>
        <div className="bg-white-principal px-10 py-8 flex flex-col gap-y-8 rounded-sm">
          <h2 className="text-2xl">Deseja realmente deletar a Loja ?</h2>
          <div className="content-button w-full flex gap-x-4 justify-center">
            <Button
              className="bg-gray-500"
              onClick={() => setIsVisibleModalDelete(!isVisibleModalDelete)}
            >
              Não
            </Button>
            <Button className={"bg-red-600 text-white-principal"}>Sim</Button>
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default GerenciamentoLoja;
