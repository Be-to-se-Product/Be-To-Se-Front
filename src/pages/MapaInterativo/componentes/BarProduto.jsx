import { Rating } from "@mui/material";
import { useEffect, useState } from "react";
import Button from "@componentes/Button/Button";
import TabInfoProduto from "./TabInfoProduto";
import Rota from "./Rota";
import BannerImage from "./BannerImage";
import ItemDeslocamento from "./ItemDeslocamento";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import { conversorTime } from "@utils/conversores";
import { useNavigate } from "react-router";

const BarProduto = ({
  setDestination,
  profiles,
  setModePercurssion,
  rotas,
  produtoSelecionado,
}) => {
  const [isTracaRota, setIsTracaRota] = useState(false);

  const trackerRouter = () => {
    if (isTracaRota) {
      setIsTracaRota(false);
      return;
    }
    setDestination({
      lat: produtoSelecionado.estabelecimento?.endereco?.latitude,
      lon: produtoSelecionado?.estabelecimento?.endereco?.longitude,
    });
    setModePercurssion(profiles[0]);
    setIsTracaRota(true);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isTracaRota) {
      setIsTracaRota(false);
    }
  }, [produtoSelecionado]);

  const produtoImagens =
    produtoSelecionado?.imagens?.length > 0
      ? produtoSelecionado?.imagens[0]
      : "";

  return (
    <>
      <BannerImage img={produtoImagens}></BannerImage>
      <div className="flex justify-between p-5 ">
        <div className=" flex flex-col gap-y-2">
          <div className="flex gap-x-4 items-center">
            <h2 className="text-xl font-medium">
              {produtoSelecionado?.nome} - {}
            </h2>
          </div>
          <h3>{produtoSelecionado?.categoria}</h3>
          <span className="flex gap-x-2 items-center">
            <span>{produtoSelecionado?.mediaAvaliacao}</span>
            <Rating
              nome="text-feedback"
              value={Number(produtoSelecionado?.mediaAvaliacao)}
              readOnly
              size="small"
            />
            {produtoSelecionado?.avaliacao?.length > 0 ? (
              <span>({produtoSelecionado?.avaliacao?.length})</span>
            ) : (
              <span>(0)</span>
            )}
          </span>
        </div>
        <div>
          <Button
            variants={{
              sizes: "max",
              class: "rounded-full px-10",
            }}
            onClick={() => navigate(`/produto/${produtoSelecionado.id}`)}
          >
            Reservar
          </Button>
        </div>
      </div>

      <div className="w-full p-4  flex justify-center gap-x-10 ">
        <ItemDeslocamento
          time={conversorTime(produtoSelecionado?.estabelecimento?.tempoBike)}
          icon={
            <DirectionsBikeIcon
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
          }
        />
        <ItemDeslocamento
          time={conversorTime(produtoSelecionado?.estabelecimento?.tempoCarro)}
          icon={
            <DirectionsCarFilledIcon
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
          }
        />
        <ItemDeslocamento
          time={conversorTime(produtoSelecionado?.estabelecimento?.tempoPessoa)}
          icon={
            <DirectionsWalkIcon
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
          }
        />
      </div>
      <div className="flex justify-center py-1 ">
        <div className="flex items-center gap-x-4 ">
          <h3 className="text-sm min-w-max">
            {isTracaRota ? "Voltar para informações do produto" : "Traçar rota"}
          </h3>
          <Button
            variants={{
              class: "rounded-full w-[40px] h-[40px] ",
            }}
            onClick={trackerRouter}
          >
            {">"}
          </Button>
        </div>
      </div>
      {isTracaRota ? (
        <Rota
          profiles={profiles}
          setModePercurssion={setModePercurssion}
          rotas={rotas}
          produtoSelecionado={produtoSelecionado}
        />
      ) : (
        <TabInfoProduto produtoSelecionado={produtoSelecionado} />
      )}
    </>
  );
};

export default BarProduto;
