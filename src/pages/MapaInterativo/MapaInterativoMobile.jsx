import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
import "./mapaStyle.css";
import api from "../../services/api.js";
import { useSearchParams } from "react-router-dom";
import { getQueryParams } from "@/utils/utils.js";
import CardMapa from "./componentes/CardMapa.jsx";
import { createRoot } from "react-dom/client";
const API_KEY = import.meta.env.VITE_MAPBOX_TOKEN;
mapboxgl.accessToken = API_KEY;

const MapaInterativoMobile = () => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const mapStyle = "mapbox://styles/mapbox/streets-v11";
  const [searchParams] = useSearchParams();
  const [produtos, setProdutos] = useState([]);

  const {
    distance = "",
    paymentMethod = "",
    name = "",
    latitudeOrigin = -23.5505199,
    longitudeOrigin = -46.6333094,
    latitudeDestination = "",
    longitudeDestination = "",
  } = getQueryParams(searchParams);

  const getProduto = async (filtro) => {
    try {
      const response = await api.get("/produtos/mapa", {
        params: {
          latitude: filtro.latitudeOrigin || null,
          longitude: filtro.longitudeOrigin || null,
          distance: filtro.distance || null,
          paymentMethod: filtro.paymentMethod || null,
          name: filtro.name || null,
        },
      });
      setProdutos(response.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  const originCoordinates = useMemo(() => {
    return {
      lat: latitudeOrigin,
      lon: longitudeOrigin,
    };
  }, [latitudeOrigin, longitudeOrigin]);

  const destination = useMemo(() => {
    return {
      lat: latitudeDestination,
      lon: longitudeDestination,
    };
  }, [latitudeDestination, longitudeDestination]);

  const createMarker = useCallback((map, coordenada) => {
    const maker = new mapboxgl.Marker();
    maker.setLngLat(coordenada);
    return maker;
  }, []);

  const insertRoute = useCallback((map, route) => {
    const geojson = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: route,
      },
    };

    if (map.getSource("route")) {
      map.getSource("route").setData(geojson);
      return;
    }

    map.addLayer({
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
  }, []);

  const getRoute = useCallback(
    async (origin, destination, map) => {
      const validation = [
        origin?.lat,
        origin?.lon,
        destination?.lat,
        destination?.lon,
      ];

      if (validation.includes(undefined)) return;

      const endpoint = `https://api.mapbox.com/directions/v5/mapbox/cycling/${origin.lon},${origin.lat};${destination.lon},${destination.lat}`;
      let response;
      try {
        response = await axios.get(endpoint, {
          params: {
            geometries: "geojson",
            access_token: API_KEY,
          },
        });
      } catch (error) {
        throw new Error(error);
      }

      if (response?.data?.routes?.length === 0) return;
      const data = response.data?.routes[0];
      const route = data.geometry.coordinates;

      insertRoute(map, route);
    },
    [insertRoute]
  );

  const createPopup = useCallback((componente) => {
    const popUp = new mapboxgl.Popup({
      offset: 25,
      autoClose: true,
      closeButton: false,
    });
    const popUpNode = document.createElement("div");
    const portal = createPortal(componente, popUpNode);
    createRoot(popUpNode).render(portal);
    popUp.setDOMContent(popUpNode);
    popUp.setMaxWidth("none");
    popUp.setOffset([0, -15]);
    popUpNode.style.width = "100%";
    return popUp;
  }, []);

  const insertMarkers = useCallback(
    async (produtos, map) => {
      produtos?.forEach((element) => {
        const { latitude, longitude } = element.estabelecimento.endereco;
        const maker = createMarker(map, { lat: latitude, lon: longitude });
        const popUp = createPopup(<CardMapa produto={element} />);
        maker.setPopup(popUp);
        maker.addTo(map.current);
      });
    },
    [createMarker, createPopup]
  );

  const addPointLocationUser = useCallback((map, origin) => {
    map.addLayer({
      id: "origin",
      type: "circle",
      source: {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [origin.lon, origin.lat],
          },
        },
      },
      paint: {
        "circle-radius": 10,
        "circle-color": "#3887be",
      },
    });
  }, []);

  useEffect(() => {
    
    const config = {
      container: mapContainerRef.current || "",
      style: mapStyle,
      center: [longitudeOrigin, latitudeOrigin],
      zoom: 9,
    };
    mapRef.current = new mapboxgl.Map(config);
    mapRef.current.on("load", () => {
      addPointLocationUser(mapRef.current, originCoordinates);
      getRoute(originCoordinates, destination, mapRef.current);
      insertMarkers(produtos, mapRef);
    });

    return () => mapRef.current.remove();
  }, [
    addPointLocationUser,
    createMarker,
    destination,
    getRoute,
    latitudeOrigin,
    longitudeOrigin,
    mapStyle,
    originCoordinates,
    insertMarkers,
    produtos,
  ]);

  useEffect(() => {
    getProduto({
      distance,
      paymentMethod,
      name,
      latitudeOrigin,
      longitudeOrigin,
      latitudeDestination,
      longitudeDestination,
    });
  }, [
    distance,
    latitudeDestination,
    latitudeOrigin,
    longitudeDestination,
    longitudeOrigin,
    paymentMethod,
    name,
  ]);

  return (
    <div>
      <div ref={mapContainerRef} className="w-screen h-screen"></div>
    </div>
  );
};

export default MapaInterativoMobile;
