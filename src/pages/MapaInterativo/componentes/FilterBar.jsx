import { useState } from "react";
import Button from "@componentes/Button/Button";
import BotaoSwitch from "@/componentes/Switch/BotaoSwitch";

const FilterBar = ({ getProduto }) => {
  const [showFilter, setShowFilter] = useState(false);

  const [filtro, setFiltro] = useState({
    distancia: 50,
    nome: null,
    metodoPagamento: null,
  });

  return (
    <div className="fixed right-10 top-3 z-10 flex flex-col w-[300px] gap-y-4">
      
      <Button onClick={() => setShowFilter(!showFilter)}>
        Todos os filtros
      </Button>
      <div
        className={`p-5 bg-black-900 text-white-principal h-0   rounded ${
          showFilter ? "h-[398px]" : " invisible opacity-0"
        } overflow-auto scrollbar-hide transition-all duration-150 w-full flex flex-col gap-y-8`}
      >
        <ul className="flex flex-col gap-y-4 ">
          <li className="flex flex-col">
            <div className="flex flex-col justify-end items-end">
              <span className="w-full mb-1">Distancia</span>
              <input
                type="range"
                name=""
                id=""
                max={100}
                value={filtro.distancia}
                className="accent-white-principal w-full"
                onChange={(e) =>
                  setFiltro((prev) => {
                    const copy = { ...prev };
                    copy.distancia = e.target.value;
                    return copy;
                  })
                }
              />
              <span className="flex justify-self-end mt-2">
                {filtro.distancia} km
              </span>
            </div>
          </li>
          <span className="font-medium">Tipos de pagamentos</span>

          <li className="flex justify-between">
            <span>Vale alimentação</span>
            <input
              type="radio"
              name="metodo_pagamento"
              className="accent-white-principal"
              onChange={(e) => {
                setFiltro((prev) => {
                  const copy = { ...prev };
                  copy.metodoPagamento = e.target.value;
                  return copy;
                });
              }}
            />
          </li>
          <li className="flex justify-between">
            <span>Vale Refeição</span>
            <input
              type="radio"
              value={"Vale Refeição"}
              name="metodo_pagamento"
              className="accent-white-principal"
              onChange={(e) => {
                setFiltro((prev) => {
                  const copy = { ...prev };
                  copy.metodoPagamento = e.target.value;
                  return copy;
                });
              }}
            />
          </li>
          <li className="flex justify-between">
            <span>Vale alimentação</span>
            <input
              type="radio"
              name="metodo_pagamento"
              value={"Vale alimentação"}
              className="accent-white-principal"
              onChange={(e) => {
                setFiltro((prev) => {
                  const copy = { ...prev };
                  copy.metodoPagamento = e.target.value;
                  return copy;
                });
              }}
            />
          </li>
          <li className="flex justify-between">
            <span>Cartão de Crédito</span>
            <input
              type="radio"
              name="metodo_pagamento"
              value={"Cartão de crédito"}
              className="accent-white-principal"
              onChange={(e) => {
                setFiltro((prev) => {
                  const copy = { ...prev };
                  copy.metodoPagamento = e.target.value;
                  return copy;
                });
              }}
            />
          </li>
        </ul>
        <div className="flex flex-col gap-y-4">
          <Button
            onClick={() => {
              getProduto({
                distancia: filtro.distancia,
                metodoPagamento: filtro.metodoPagamento,
              });
            }}
          >
            Filtrar
          </Button>

          {(filtro.distancia != 50 || filtro.metodoPagamento) && (
            <Button
              onClick={() => {
                const filtroReset = {
                  distancia: 50,
                  nome: null,
                  metodoPagamento: null,
                };
                setFiltro(filtroReset);
                getProduto(filtroReset);
              }}
            >
              Limpar Filtro
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
