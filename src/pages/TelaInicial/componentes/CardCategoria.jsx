import React from "react";
import Button from "@componentes/Button/Button";

const CardCategoria = (props) => {
  return (
    <div className="flex w-auto h-auto gap-36    justify-center">
      <div className="flex w-[414px] h-[342px] items-center rounded-md bg-center bg-cover bg-[url('https://img.freepik.com/fotos-gratis/arranjo-de-colecao-estacionario-moderno_23-2149309662.jpg?w=1380&t=st=1697411420~exp=1697412020~hmac=918d74acaf70a0b2b1804ea62e02f4a311f95aef79ebae6122c943f7d92957c0')]">
        {/* Eletronicos */}
        <div className="flex w-[600px] gap-6 flex-col items-center">
          <h2 className="text-center text-4xl text-white-principal">
            Eletrônicos
          </h2>
          <p className="text-sm text-center text-white-principal">
            EXPLORE NOSSA VARIEDADE DE ELETRÔNICOS <br />
            PARA ATENDER ÀS SUAS NECESSIDADE <br />
            DIGITAIS.
          </p>
          <Button>Explorar</Button>
        </div>
      </div>

      {/* Roupas */}
      <div className="flex w-[414px] h-[342px] items-center bg-cover bg-center rounded-md bg-[url('https://img.freepik.com/fotos-gratis/conceito-de-maquete-de-camisa-com-roupas-simples_23-2149448743.jpg?size=626&ext=jpg&ga=GA1.1.1337316920.1692304339&semt=sph')]">
        <div className="flex w-[600px] gap-6 flex-col items-center">
          <h2 className="text-center text-4xl text-white-principal">Roupas</h2>
          <p className="text-sm text-center text-white-principal">
            EXPLORE UMA AMPLA GAMA DE ROUPAS,
            <br />
            DE ITENS ESSENCIAIS DO DIA A. <br />
            DIA.
          </p>
          <Button>Explorar</Button>
        </div>
      </div>

      {/* Utensilios */}
      <div className="flex w-[414px] h-[342px] items-center bg-cover backdrop:brightness-50 bg-center rounded-md bg-[url('https://img.freepik.com/fotos-gratis/acima-vista-de-utensilios-de-cozinha-flatlay_1098-19770.jpg?w=1380&t=st=1697412238~exp=1697412838~hmac=075f1bf4f6204901f9649a7a0b8a827d26445a26f720a660e8fbb63b934e51a7')]">
        <div className="flex w-[600px] gap-6 flex-col items-center">
          <h2 className="text-center text-4xl text-white-principal">
            Utensílios do Lar
          </h2>
          <p className="text-sm text-center text-white-principal font-bold">
            SIMPLIFIQUE SUA VIDA DIÁRIA COM NOSSA
            <br />
            SELEÇÃO DE UTENSÍLIOS DOMÉSTICOS
            <br />
            ESSENCIAIS.
          </p>
          <Button>Explorar</Button>
        </div>
      </div>
    </div>
  );
};
export default CardCategoria;
