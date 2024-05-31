import Button from "@componentes/Button/Button";
import { useNavigate } from "react-router-dom";

const CardItemVenda = ({ produto }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full py-4 px-4 text-lg border-b flex justify-between items-center">
      <div className="flex gap-x-2">
        <div className="w-[50px] h-12 rounded">
          <img
            src={
              produto?.produto?.imagens?.length > 0
                ? produto.produto.imagens[0]
                : "/src/assets/default-image.jpeg  "
            }
            alt=""
            className="h-full rounded"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <h2 className="text-base">{produto?.produto?.nome}</h2>
          <h3 className="text-xs font-normal">
            R$ {produto?.produto?.preco?.toFixed(2)}
          </h3>
        </div>
      </div>
      <Button
        className=" text-black-900 py-3 h-max "
        onClick={() => navigate(`/TelaProduto/${produto?.produto?.id}`)}
      >
        Ver item
      </Button>
    </div>
  );
};

export default CardItemVenda;
