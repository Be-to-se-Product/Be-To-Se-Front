import React, { useEffect, useState } from "react";
import NavbarRoot from "../../componentes/Navbar/NavbarRoot";
import Button from "../../componentes/Button/Button";
import people from "../../assets/PeopleHappy.png";
import city from "../../assets/city.png";
import men from "../../assets/men.png";
import family from "../../assets/family.png";
import woman from "../../assets/woman-desktop.png";
import axios from "axios";
import { set } from "react-hook-form";
import ContainerCard from "../../componentes/CardUser/componentes/ContainerCard";

const Insitucional = () => {

  const [userDetails,setUserDetails] = useState({});
  const [isVisible,setIsVisible] = useState(false);
  const retornarInformacoesUsuario = async(username) => {
    return axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        console.log(response.data);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });
  };

  const abrirCard = async(username, e) => {
    const {avatar_url,bio,followers,following,html_url} =  await retornarInformacoesUsuario(username);
    const UserDetails =
    {
      image: avatar_url,
      username: username,
      bio: bio,
      followers: followers,
      following: following,
      link: html_url,
      coordenadasXShow: e.clientX,
      coordenadasYShow: e.clientY,
    }
    setUserDetails(UserDetails);
    setIsVisible(!isVisible);
  };


  useEffect(() => {
    console.log(userDetails);
  }
  ,[userDetails])

  return (
    <div className="">
      <NavbarRoot.Content>
        <NavbarRoot.Menu>
          <NavbarRoot.Item></NavbarRoot.Item>
        </NavbarRoot.Menu>
      </NavbarRoot.Content>

      <main className="max-w-[1366px] mx-auto flex flex-col gap-y-32 mt-8 ">
        <section className="flex  w-10/12 mx-auto  ">
          <div className="h-full  w-1/2 ">
            <img src={people} alt="" />
          </div>
          <div className="  flex  items-center w-1/2 ">
            <article className="flex gap-y-8 flex-col">
              <h2 className="text-4xl font-medium leading-[60px] ">
                Aquilo que você precisa perto de você
              </h2>
              <p className="text-base leading-8">
                Nosso propósito é conectar comerciantes e consumidores,
                simplificando a busca por produtos e fortalecendo o mercado
                local impulsionando o empreenderismo
              </p>
              <Button>Saiba mais</Button>
            </article>
          </div>
        </section>

        <section className="flex w-10/12 mx-auto">
          <div className="flex h-full   w-1/2 flex-col gap-4">
            <img src={city} alt="" />
            <p className="w-10/12 text-base leading-9 px-10">
              Nós da Easy Find, acreditamos que cada compra é uma oportunidade
              de apoiar negócios locais e construir uma comunidade mais forte.
              Nossa plataforma não apenas conecta comerciantes e consumidores,
              mas também cria um ecossistema onde todos prosperam.
            </p>
          </div>
          <div className="flex flex-col w-1/2 gap-y-11  ">
            <h2 className="w-10/12 text-3xl font-medium px-12 leading-relaxed tracking-normal">
              Nós mostramos o que você precisa. Temos um compromisso com a sua
              experiencia de compra
            </h2>
            <img src={men} alt="" />
          </div>
        </section>

        <section className="w-10/12 mx-auto flex flex-col gap-y-20">
          <h2 className="text-center text-4xl font-medium">Nossas soluções</h2>

          <div className="flex gap-x-10">
            <div className="flex bg-black-900 flex w-1/2 h-[300px] rounded gap-y-2 ">
              <div className="p-[30px] flex flex-col justify-between w-1/2 ">
                <h2 className="text-2xl text-orange-principal font-medium mb-2">
                  {" "}
                  Para clientes
                </h2>
                <p className="text-base text-white-principal">
                  Busce por qualquer produto de acordo com a sua localização e
                  veja as ofertas, melhores classificados e os mais perto de
                  vocẽ
                </p>
                <div className="flex items-center gap-x-3 ">
                  <h3 className="text-white-principal ">Saiba mais</h3>
                  <button className="rounded-full bg-orange-principal w-10 h-10"></button>
                </div>
              </div>

              <div className="w-1/2 rounded flex">
                <img
                  src={family}
                  alt=""
                  className="w-full object-cover h-full rounded"
                />
              </div>
            </div>

            <div className="flex bg-black-900 flex w-1/2 h-[300px] rounded gap-y-2 ">
              <div className="p-[30px] flex flex-col justify-between w-1/2 ">
                <h2 className="text-2xl text-orange-principal font-medium mb-2">
                  Para clientes
                </h2>
                <p className="text-base text-white-principal">
                  Busce por qualquer produto de acordo com a sua localização e
                  veja as ofertas, melhores classificados e os mais perto de
                  vocẽ
                </p>
                <div className="flex items-center gap-x-3 ">
                  <h3 className="text-white-principal ">Saiba mais</h3>
                  <button className="rounded-full bg-orange-principal w-10 h-10">
                    {">"}
                  </button>
                </div>
              </div>

              <div className="w-1/2 rounded flex">
                <img
                  src={woman}
                  alt=""
                  className="w-full object-cover h-full rounded"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-10/12  max-w-screen-2xl mx-auto">
          <h3 className="text-center mb-20 text-4xl font-medium">
            Por que existimos?
          </h3>
          <div className="flex flex-col items-center relative  h-full  ">
            <div className=" absolute text-center">
              <span className="text-7xl font-semibold ">50% </span>
              <p className="w-[300px]">
                dos empregos formais são gerados pelo mercado local
              </p>
            </div>
            <div className="absolute flex justify-between  w-full  top-60">
              <div className="text-center">
                <span className="text-7xl font-semibold  drop-shadow text-black-900 ">
                  55%{" "}
                </span>
                <p className="w-[300px]">
                  realizam a compra online e retiram na loja
                </p>
              </div>
              <div className="text-center">
                <span className="text-7xl font-semibold ">25% </span>
                <p className="w-[300px]">
                  levam mais em conta a praticidade na hora da compra
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-y-10">
              <img src="./src/assets/vector.png" alt="" className="mx-auto" />
              <p className="w-1/2 mx-auto text-center text-base">
                Estamos aqui para proporcionar a você uma experiência de compra
                que valoriza a conveniência, o atendimento excepcional e o
                fortalecimento do comércio local. Acreditamos na importância das
                lojas físicas em um mundo onde o tempo é valioso. Queremos que
                você tenha acesso aos produtos que deseja, quando deseja.
                Juntos, valorizamos o mercado local e impulsionando o
                empreendedorismo
              </p>
            </div>
          </div>
        </section>

        <section className="flex items-center w-full flex-col relative  gap-y-10 text-2xl h-screen">
          <h2 className="font-semibold text-3xl">Quem é a EasyFind</h2>
          <div
            className="absolute top-[200px] left-[770px] w-[120px] h-[319px] cursor-pointer"
            onClick={(e) => abrirCard("rafaelaldolizarbe", e)}
          ></div>
          <div
            className="absolute top-[360px] left-[940px] w-[120px] h-[120px] cursor-pointer"
            onClick={(e) => abrirCard("Cesarbmartins", e)}
          ></div>
          <div
            className="absolute top-[210px] left-[1130px] w-[120px] h-[400px]  cursor-pointer"
            onClick={(e) => abrirCard("PedroRCSilva", e)}
          ></div>
          <div
            className="absolute top-[500px] left-[920px] w-[200px] h-[300px] cursor-pointer"
            onClick={(e) => abrirCard("NathanBin", e)}
          ></div>
          <div className="absolute top-[300px] left-[580px] w-[120px] h-[150px] cursor-pointer "  onClick={(e) => abrirCard("pedrohmunizs", e)}></div>
          <div className="absolute top-[480px] left-[550px] w-[120px] h-[220px] cursor-pointer " onClick={(e) => abrirCard("lessamatheuss01", e)}></div>
          <div className="w-full h-full ">
            <img
              src="/src/assets/squad.jpeg"
              alt=""
              class=" "
              
            />
           
          </div>
          <ContainerCard {...userDetails} isVisible={isVisible}/>
        </section>
      </main>
    </div>
  );
};

export default Insitucional;
