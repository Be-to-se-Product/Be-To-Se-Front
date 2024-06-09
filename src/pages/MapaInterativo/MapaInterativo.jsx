import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
import FilterBar from "./componentes/FilterBar";
import "./mapaStyle.css";
import BarProduto from "./componentes/BarProduto";
import CardMapa from "./componentes/CardMapa";
import { useLocation } from "react-router-dom";

import ContentBar from "./componentes/ContentBar";
import api from "@/services/api/services";

const API_KEY = import.meta.env.VITE_MAPBOX_TOKEN;
mapboxgl.accessToken = API_KEY;
const MapaInterativo = () => {
  const map = useRef(null);
  const mapContainerRef = useRef(null);

  const [show, setShow] = useState(false);
  const location = useLocation();
  const { nome } = location.state || {};

  const [originCoordinates, setOriginCoordinates] = useState({
    lat: null,
    lon: null,
  });
  const [destination, setDestination] = useState({ lat: null, lon: null });
  const [rotas, setRotas] = useState([]);

  const [produtoSelecionado, setProdutoSelecionado] = useState({});
  const [produtos, setProdutos] = useState([]);

  const profiles = {
    CAR: "driving-traffic",
    BIKE: "cycling",
    PEOPLE: "walking",
  };
  const [modePercurssion, setModePercurssion] = useState(profiles.PEOPLE);

  // Função para criar o marcador
  const criarMarcador = (coordenada) => {
    const maker = new mapboxgl.Marker();
    maker.setLngLat(coordenada);
    return maker;
  };

  // Função para criar o popUp
  const criarPopUp = (componente) => {
    const popUp = new mapboxgl.Popup({
      offset: 25,
      autoClose: true,
      closeButton: false,
    });
    const popUpNode = document.createElement("div");
    const portal = ReactDOM.createPortal(componente, popUpNode);
    ReactDOM.createRoot(popUpNode).render(portal);
    popUp.setDOMContent(popUpNode);
    popUp.setMaxWidth("none");
    popUp.setOffset([0, -15]);
    popUpNode.style.width = "100%";
    return popUp;
  };

  const pullLocationCurrent = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setOriginCoordinates({
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      });
    });
  };

  // Função para buscar as rotas entre os dois pontos
  const getRoute = async (origin, destination) => {
    if (!origin?.lat || !origin?.lon) {
      return;
    }
    // Requisição para a API do Mapbox
    const response = await axios.get(
      `https://api.mapbox.com/directions/v5/mapbox/${modePercurssion}/${origin.lon},${origin.lat};${destination.lon},${destination.lat}`,
      {
        params: {
          geometries: "geojson",
          access_token: API_KEY,
          steps: true,
          language: "pt-BR",
        },
      }
    );

    return response.data.routes;
  };

  const trackerRouterMap = (coordenadas) => {
    const geojson = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: coordenadas,
      },
    };
    if (map.current.getSource("route")) {
      map.current.getSource("route").setData(geojson);
    } else {
      //Traçar linha entre os dois pontos
      map.current.addLayer({
        id: "route",
        type: "line",
        source: {
          type: "geojson",
          data: geojson,
        },
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#222",
          "line-width": 5,
          "line-opacity": 0.75,
        },
      });
    }
  };

  // Fazer get dos produtos

  // Carregar mapa com ponto inicial baseado na localização atual do usuário
  useEffect(() => {
    map?.current?.remove();
    //Criar instância do mapa
    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [originCoordinates.lon, originCoordinates.lat],
      zoom: 10,
    });
    // GERAR MARCADORES ALEATÓRIOS

    // Capturar evento de carregamento do mapa
    map.current.on("load", () => {
      // Gerar 10 marcadores aleatórios

      // Adicionar controle de navegação
      map.current.addControl(new mapboxgl.NavigationControl(), "bottom-right");

      // Gerar marcadores baseado nos dados que o banco esta me retornando

      plotarMarcadores(produtos, map);
      // Adicionar marcador de origem
      map.current.addLayer({
        id: "origin",
        type: "circle",
        source: {
          type: "geojson",
          data: {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [originCoordinates.lon, originCoordinates.lat],
            },
          },
        },
        paint: {
          "circle-radius": 10,
          "circle-color": "#3887be",
        },
      });
    });
  }, [originCoordinates, produtos]);

  // Carregar trajeto quando o destinho ou o modo do percurso muda
  useEffect(() => {
    (async () => {
      const router = await getRoute(originCoordinates, destination);
      if (!router) return;
      const coordinates = router[0].geometry.coordinates;
      setRotas(router[0].legs[0].steps);
      trackerRouterMap(coordinates);
      return () => {
        setRotas([]);
      };
    })();
  }, [destination, modePercurssion]);

  // Carregar Localização atual do usuário

  useEffect(() => {
    if (!originCoordinates.lat && !originCoordinates.lon) {
      pullLocationCurrent();
    }

    return () => {
      setOriginCoordinates({});
    };
  }, []);

  useEffect(() => {
    getProduto({
      distancia: 50,
      metodoPagamento: null,
    });
  }, [originCoordinates]);

  const getProduto = async (filtro) => {
    const response = await api.get("/produtos/mapa", {
      params: {
        latitude: originCoordinates.lat || null,
        longitude: originCoordinates.lon || null,
        distancia: filtro.distancia,
        nome: nome ? nome : null,
        metodoPagamento: filtro.metodoPagamento,
      },
    });
    setProdutos(response.data);
  };

  const plotarMarcadores = async (produtos, map) => {
    produtos?.forEach((element) => {
      const { latitude, longitude } = element.estabelecimento.endereco;
      const maker = criarMarcador({ lat: latitude, lon: longitude });
      const popUp = criarPopUp(
        <CardMapa
          produto={element}
          onClick={() => {
            setProdutoSelecionado(element);
            setTimeout(() => {
              setShow(true);
            }, 1);
          }}
        />
      );
      maker.setPopup(popUp);
      maker.addTo(map.current);
    });
  };

  return (
    <div className="flex">
      {produtoSelecionado?.id && (
        <ContentBar show={show} setShow={setShow}>
          <BarProduto
            setDestination={setDestination}
            profiles={profiles}
            setModePercurssion={setModePercurssion}
            rotas={rotas}
            produtoSelecionado={produtoSelecionado}
            show={show}
          />
        </ContentBar>
      )}

      <FilterBar getProduto={getProduto} />
      <div ref={mapContainerRef} className="w-full h-screen"></div>
    </div>
  );
};

export default MapaInterativo;
