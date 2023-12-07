import NavbarRoot from "../../componentes/Navbar/NavbarRoot";
import Switch from "../../componentes/Switch/BotaoSwitch";
import CardProdutoPesquisa from "./componentes/CardProdutoPesquisa";
import { geolocation } from "../../utils/geolocation";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { Select, MenuItem } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import DistanceFilter from "./componentes/DistanceFilter";
import { useLocation } from "react-router-dom";

function TelaPesquisa(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { nomePesquisado } = location.state || {};

  const [originCoordinates, setOriginCoordinates] = useState({
    lat: null,
    lon: null,
  });
  const [produtos, setProdutos] = useState([]);
  //filtros
  const [metodosPagamento, setMetodosPagamento] = useState([]);
  const [nome, setNome] = useState(nomePesquisado ? nomePesquisado : null);
  const [metodoPagamento, setMetodoPagamento] = useState();
  const [distancia, setDistancia] = useState(50);

  const [mostrarMapa, setMostrarMapa] = useState(false);

  const handleVerNoMapa = () => {
    setMostrarMapa(!mostrarMapa);
  };

  useEffect(() => {
    if (mostrarMapa) {
      navigate("/mapa", {
        state: {
          nome,
          distancia,
          metodoPagamento,
        },
      });
    }
  }, [mostrarMapa]);

  useEffect(() => {
    geolocation(setOriginCoordinates);
  }, []);

  const handleNomeChange = (novoNome) => {
    setNome(novoNome);
  };

  useEffect(() => {
    toast.loading("Carregando produtos ...");

    api
      .get("/produtos/mapa", {
        params: {
          latitude: originCoordinates.lat,
          longitude: originCoordinates.lon,
          distancia: distancia,
          nome: nome,
          metodoPagamento: metodoPagamento,
        },
      })
      .then((response) => {
        setProdutos(response.data ? response.data : []);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        toast.dismiss();
      });
  }, [originCoordinates, nome, metodoPagamento, distancia]);

  useEffect(() => {
    getMetodosPagamento();
  }, []);

  const getMetodosPagamento = () => {
    api
      .get("/metodos-pagamento")
      .then((response) => {
        setMetodosPagamento(response.data ? response.data : []);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMetodoChange = (event) => {
    setMetodoPagamento(event.target.value);
  };

  return (
    <div>
      <NavbarRoot.Content>
        <NavbarRoot.ContentTop>
          <NavbarRoot.Logo />
          <NavbarRoot.Pesquisa onChange={handleNomeChange} />
          {sessionStorage.USERDETAILS ? (
            <NavbarRoot.Authenticated />
          ) : (
            <NavbarRoot.Sign />
          )}
        </NavbarRoot.ContentTop>
        <NavbarRoot.Menu>
          <NavbarRoot.Item></NavbarRoot.Item>
        </NavbarRoot.Menu>
      </NavbarRoot.Content>

      <main className="flex pt-[48px] flex-col items-center gap-[48px]">
        <main className="flex w-auto flex-col items-center gap-[48px]">
          <div className="flex flex-row w-full justify-between items-center ">
            <div className="flex w-[715px] h-[39px] gap-6 pl-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">
                  Método de Pagamento:
                </label>
                <Select
                  className="flex p-4  items-center gap-8  bg-white-principal"
                  onClick={getMetodosPagamento}
                  onChange={handleMetodoChange}
                  value={metodoPagamento ? metodoPagamento : []}
                >
                  {metodosPagamento?.map((metodo) => (
                    <MenuItem key={metodo.id} value={metodo.descricao}>
                      {metodo.descricao}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Distância:</label>
                <DistanceFilter onChange={(filter) => setDistancia(filter)} />
              </div>
            </div>
            <div className="flex w-[200px] justify-end items-center gap-3">
              <p className="" onClick={handleVerNoMapa}>
                Ver no mapa
              </p>
              <Switch onClick={handleVerNoMapa}></Switch>
            </div>
          </div>

          <div className="flex w-full gap-10 items-center pl-4">
            <h2 className="text-xl">Resultados da pesquisa:</h2>
            <p className="text-xl">{`${nome ? nome : ""}`}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {produtos?.map((produto) => (
              <CardProdutoPesquisa key={produto?.id} produto={produto} />
            ))}
          </div>
        </main>
      </main>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default TelaPesquisa;
