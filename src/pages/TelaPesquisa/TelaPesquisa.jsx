import NavbarRoot from "@componentes/Navbar/NavbarRoot.jsx";
import CardProduto from "../TelaInicial/componentes/CardProduto";
import api from "@/services/api/services";
import { useEffect, useState } from "react";
import { FormControlLabel, Radio, RadioGroup, Switch } from "@mui/material";
import DistanceFilter from "./componentes/DistanceFilter";
import { useForm } from "react-hook-form";
import useDebounce from "@/hooks/useDebounce";
import Button from "@/componentes/Button/Button";
import BotaoSwitch from "@/componentes/Switch/BotaoSwitch";
import { useNavigate } from "react-router-dom";

function TelaPesquisa() {
  const [produtos, setProdutos] = useState([]);
  const [metodoPagamento, setMetodoPagamento] = useState([{}]);
  const { register, watch, setValue } = useForm({
    mode: "onChange",
  });
  const [distanciaOptions, setDistanciaOptions] = useState(50);
  const [nome, setNome] = useState("");
  const navigate = useNavigate();
  const debounce = useDebounce((nome) => {
    setNome(nome);
  }, 500);
  const metodoOptions = watch("metodoPagamento");

  const getMetodoPagamento = async () => {
    const response = await api.get("/metodos-pagamentos");

    if (response?.data) {
      setMetodoPagamento(response.data);
    }
  };

  const getProdutos = async (distanciaOptions, metodoOptions, nome) => {
    const params = {
      latitude: -23.5505199,
      longitude: -46.6333094,
    };
    if (distanciaOptions) {
      params.distancia = distanciaOptions;
    }
    if (metodoOptions) {
      params.metodoPagamento = metodoOptions;
    }
    if (nome) {
      params.nome = nome;
    }
    const response = await api.get("/produtos/mapa", {
      params,
    });

    if (response.status == 204) {
      setProdutos([]);
    }
    if (response?.data) {
      setProdutos(response.data);
    }
  };

  useEffect(() => {
    getProdutos(distanciaOptions, metodoOptions, nome);
  }, [distanciaOptions, metodoOptions, nome]);

  useEffect(() => {
    getMetodoPagamento();
  }, []);
  return (
    <div className="bg-black-100 min-h-screen">
      <NavbarRoot.Content>
        <NavbarRoot.ContentTop>
          <NavbarRoot.Logo />
          <NavbarRoot.Pesquisa onChange={debounce} nome={nome} />
          {sessionStorage?.USERDETAILS ? (
            <NavbarRoot.Authenticated />
          ) : (
            <NavbarRoot.Sign />
          )}
        </NavbarRoot.ContentTop>
        <NavbarRoot.Menu>
          <NavbarRoot.Item></NavbarRoot.Item>
        </NavbarRoot.Menu>
      </NavbarRoot.Content>

      <section className="px-24 flex py-10 relative">
        <div className="flex flex-col justify-start gap-y-4 w-[300px]">
          <h2 className="text-xl font-medium">Filtros</h2>
          <div className="flex flex-col">
            <form className="flex flex-col gap-y-3">
              <div>
                <div className="flex flex-col gap-y-2">
                  <h2 className="text-lg font-medium text">Distancia</h2>
                  <DistanceFilter
                    distancia={distanciaOptions}
                    onChange={setDistanciaOptions}
                    clear={distanciaOptions == 50}
                  />
                </div>
                <h2 className="text-lg font-medium text">
                  Método de pagamento
                </h2>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  {metodoPagamento.map((metodo) => (
                    <FormControlLabel
                      key={metodo.id}
                      value={metodo.id}
                      checked={metodoOptions == metodo.id}
                      {...register("metodoPagamento")}
                      control={
                        <Radio
                          sx={{
                            "& .MuiSvgIcon-root": {
                              color: "#FCA622",
                            },
                            // pintar efeito Ripple
                            "&.Mui-checked": {
                              color: "#FCA622",
                            },
                          }}
                        />
                      }
                      label={metodo.descricao}
                    />
                  ))}
                </RadioGroup>
              </div>
            </form>
            <div className="w-10/12">
              <Button
                onClick={() => {
                  setDistanciaOptions(50);
                  setNome("");
                  setValue("metodoPagamento", 0);
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-end gap-y-4">
          <div className="flex w-min px-10 gap-x-4 items-center">
            <BotaoSwitch
              onChange={(value) => {
                if (value) setTimeout(() => navigate("/mapa"), 1000);
              }}
            />
            Mostrar
          </div>
          <div className="grid grid-cols-4 w-full gap-y-10">
            {produtos.map((produto) => (
              <CardProduto key={produto.id} id={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TelaPesquisa;
