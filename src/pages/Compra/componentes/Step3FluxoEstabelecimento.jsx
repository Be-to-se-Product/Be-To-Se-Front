import { Link, useNavigate } from "react-router-dom";
import carrinho from "@assets/pedido_feito.png";
import Button from "@/componentes/Button/Button";

const Step3FluxoEstabelecimento = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className=" flex flex-col mt-20 w-full items-center gap-y-14">
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-6 items-center">
              <img src={carrinho} alt="" className="h-36 w-36" />
              <p>Pedido feito com suceso!</p>
            </div>
            <p className="w-96 text-center">
              Seu pedido será enviado para aprovação do comerciante. Para
              acompanhar o pedido clique no botão abaixo.
            </p>
          </div>
          <div className="flex flex-col gap-y-4">
            <Button
              variants={{
                sizes: "md",
              }}
              onClick={() => navigate("/usuario/pedidos")}
            >
              Acompanhar o pedido
            </Button>
            <Link to={"/index"}>Voltar para página inicial</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3FluxoEstabelecimento;
