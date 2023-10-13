import React from "react";
import MenuComerciante from "../../componentes/MenuComerciante/MenuComerciante";
import Button from "../../componentes/Button/Button";
import CardLojaRoot from "../../componentes/CardLoja/CardLojaRoot";
import down from "../../assets/down.svg";
import Modal from "../../componentes/Modal/Modal";

import ModalLoja from "./componentes/ModalLoja";

const GerencimentoLoja = () => {
  return (
    <main className="flex bg-[#EAEAEA]">
      <MenuComerciante />
      <section className="  flex flex-col text-2xl mx-[33px] w-10/12 py-20 gap-y-10 overflow-scroll h-screen  scrollbar-hide">
        <div className="flex justify-center items-center w-4xl mx-auto w-full  relative flex-col gap-y-4">
          <h2 className="text-3xl font-medium">Lojas Cadastradas </h2>
          <Button className={" h-max  "}>Cadastrar Nova Loja</Button>
        </div>

        <div className=" mx-auto w-full flex flex-wrap gap-y-10 justify-center gap-x-5 relative ">
          <CardLojaRoot.Content>
            <CardLojaRoot.Header
              icon={down}
              nome={"Montech"}
              status={"Pendente"}
            />

            <CardLojaRoot.ContentInfo>
              <div className="flex flex-col gap-y-1">
                <CardLojaRoot.Row label={"Logradouro"} texto={"1195383389"} />
                <CardLojaRoot.Row label={"Cidade"} texto={"1195383389"} />
                <CardLojaRoot.Row label={"Telefone"} texto={"1195383389"} />
              </div>
              <div className="flex flex-col gap-y-1">
                <CardLojaRoot.Row
                  label={"Produtos Cadastrados"}
                  texto={"1195383389"}
                />
                <CardLojaRoot.Row
                  label={"Promoções ativas"}
                  texto={"1195383389"}
                />
                <CardLojaRoot.Row label={"Segmento"} texto={"1195383389"} />
              </div>
            </CardLojaRoot.ContentInfo>

            <CardLojaRoot.Footer>
              <div className="flex gap-x-2">
                <img src="./src/assets/editar.svg" alt="" />
                <img src="./src/assets/deletar.svg" alt="" />
              </div>

              <div>
                <Button className={"rounded-lg"}>Gerenciar</Button>
              </div>
            </CardLojaRoot.Footer>
          </CardLojaRoot.Content>

          <CardLojaRoot.Content>
            <CardLojaRoot.Header
              icon={down}
              nome={"Montech"}
              status={"Pendente"}
            />

            <CardLojaRoot.ContentInfo>
              <div className="flex flex-col gap-y-1">
                <CardLojaRoot.Row label={"Logradouro"} texto={"1195383389"} />
                <CardLojaRoot.Row label={"Cidade"} texto={"1195383389"} />
                <CardLojaRoot.Row label={"Telefone"} texto={"1195383389"} />
              </div>
              <div className="flex flex-col gap-y-1">
                <CardLojaRoot.Row
                  label={"Produtos Cadastrados"}
                  texto={"1195383389"}
                />
                <CardLojaRoot.Row
                  label={"Promoções ativas"}
                  texto={"1195383389"}
                />
                <CardLojaRoot.Row label={"Segmento"} texto={"1195383389"} />
              </div>
            </CardLojaRoot.ContentInfo>

            <CardLojaRoot.Footer>
              <div className="">
                <span className="text-base">I</span>
                <span className="text-base">A</span>
              </div>

              <div>
                <Button className={"rounded-lg"}>Gerenciar</Button>
              </div>
            </CardLojaRoot.Footer>
          </CardLojaRoot.Content>

          <CardLojaRoot.Content>
            <CardLojaRoot.Header
              icon={down}
              nome={"Montech"}
              status={"Pendente"}
            />

            <CardLojaRoot.ContentInfo>
              <div className="flex flex-col gap-y-1">
                <CardLojaRoot.Row label={"Logradouro"} texto={"1195383389"} />
                <CardLojaRoot.Row label={"Cidade"} texto={"1195383389"} />
                <CardLojaRoot.Row label={"Telefone"} texto={"1195383389"} />
              </div>
              <div className="flex flex-col gap-y-1">
                <CardLojaRoot.Row
                  label={"Produtos Cadastrados"}
                  texto={"1195383389"}
                />
                <CardLojaRoot.Row
                  label={"Promoções ativas"}
                  texto={"1195383389"}
                />
                <CardLojaRoot.Row label={"Segmento"} texto={"1195383389"} />
              </div>
            </CardLojaRoot.ContentInfo>

            <CardLojaRoot.Footer>
              <div className="">
                <span className="text-base">I</span>
                <span className="text-base">A</span>
              </div>

              <div>
                <Button className={"rounded-lg"}>Gerenciar</Button>
              </div>
            </CardLojaRoot.Footer>
          </CardLojaRoot.Content>
          <CardLojaRoot.Content>
            <CardLojaRoot.Header
              icon={down}
              nome={"Montech"}
              status={"Pendente"}
            />

            <CardLojaRoot.ContentInfo>
              <div className="flex flex-col gap-y-1">
                <CardLojaRoot.Row label={"Logradouro"} texto={"1195383389"} />
                <CardLojaRoot.Row label={"Cidade"} texto={"1195383389"} />
                <CardLojaRoot.Row label={"Telefone"} texto={"1195383389"} />
              </div>
              <div className="flex flex-col gap-y-1">
                <CardLojaRoot.Row
                  label={"Produtos Cadastrados"}
                  texto={"1195383389"}
                />
                <CardLojaRoot.Row
                  label={"Promoções ativas"}
                  texto={"1195383389"}
                />
                <CardLojaRoot.Row label={"Segmento"} texto={"1195383389"} />
              </div>
            </CardLojaRoot.ContentInfo>

            <CardLojaRoot.Footer>
              <div className="">
                <span className="text-base">I</span>
                <span className="text-base">A</span>
              </div>

              <div>
                <Button className={"rounded-lg"}>Gerenciar</Button>
              </div>
            </CardLojaRoot.Footer>
          </CardLojaRoot.Content>
          <CardLojaRoot.Content>
            <CardLojaRoot.Header
              icon={down}
              nome={"Montech"}
              status={"Pendente"}
            />

            <CardLojaRoot.ContentInfo>
              <div className="flex flex-col gap-y-1">
                <CardLojaRoot.Row label={"Logradouro"} texto={"1195383389"} />
                <CardLojaRoot.Row label={"Cidade"} texto={"1195383389"} />
                <CardLojaRoot.Row label={"Telefone"} texto={"1195383389"} />
              </div>
              <div className="flex flex-col gap-y-1">
                <CardLojaRoot.Row
                  label={"Produtos Cadastrados"}
                  texto={"1195383389"}
                />
                <CardLojaRoot.Row
                  label={"Promoções ativas"}
                  texto={"1195383389"}
                />
                <CardLojaRoot.Row label={"Segmento"} texto={"1195383389"} />
              </div>
            </CardLojaRoot.ContentInfo>

            <CardLojaRoot.Footer>
              <div className="">
                <span className="text-base">I</span>
                <span className="text-base">A</span>
              </div>

              <div>
                <Button className={"rounded-lg"}>Gerenciar</Button>
              </div>
            </CardLojaRoot.Footer>
          </CardLojaRoot.Content>

          <CardLojaRoot.Content>
            <CardLojaRoot.Header
              icon={down}
              nome={"Montech"}
              status={"Pendente"}
            />

            <CardLojaRoot.ContentInfo>
              <div className="flex flex-col gap-y-1">
                <CardLojaRoot.Row label={"Logradouro"} texto={"1195383389"} />
                <CardLojaRoot.Row label={"Cidade"} texto={"1195383389"} />
                <CardLojaRoot.Row label={"Telefone"} texto={"1195383389"} />
              </div>
              <div className="flex flex-col gap-y-1">
                <CardLojaRoot.Row
                  label={"Produtos Cadastrados"}
                  texto={"1195383389"}
                />
                <CardLojaRoot.Row
                  label={"Promoções ativas"}
                  texto={"1195383389"}
                />
                <CardLojaRoot.Row label={"Segmento"} texto={"1195383389"} />
              </div>
            </CardLojaRoot.ContentInfo>

            <CardLojaRoot.Footer>
              <div className="">
                <span className="text-base">I</span>
                <span className="text-base">A</span>
              </div>

              <div>
                <Button className={"rounded-lg"}>Gerenciar</Button>
              </div>
            </CardLojaRoot.Footer>
          </CardLojaRoot.Content>
        </div>
      </section>
      <Modal isVisible={true}>
        <ModalLoja />
      </Modal>
    </main>
  );
};

export default GerencimentoLoja;
