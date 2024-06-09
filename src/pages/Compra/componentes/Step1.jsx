import { ProgressContext } from "@/context/Progress/ProgressContext";
import { TIPO_FLUXO } from "@/utils/utils";
import { useContext } from "react";

const Step1 = () => {
  const { setData } = useContext(ProgressContext);

  return (
    <div>
      <h2 className="text-xl text-center mt-10 mb-10">
        Selecione como deseja realizar a compra
      </h2>
      <div className="flex flex-col gap-y-4">
        <label
          htmlFor="tipo"
          className="flex flex-row px-8 py-4 gap-x-6 bg-black-100 w-full rounded-lg"
          onClick={() => {
            setData({ tipoFluxo: TIPO_FLUXO.RETIRE_LOJA });
          }}
        >
          <input type="radio" name="tipoFluxo" id="tipo" />
          <p className="text-lg font-medium">Pague aqui e retire na loja</p>
        </label>

        <label
          className="flex flex-row px-8 py-4 gap-x-6 bg-black-100 w-full rounded-lg"
          htmlFor="tipoOutro"
          onClick={() => {
            setData({ tipoFluxo: TIPO_FLUXO.RETIRE_LOJA });
          }}
        >
          <input
            type="radio"
            id="tipoOutro"
            name="tipoFluxo"
            onClick={() => {
              setData((prev) => ({
                ...prev,
                tipoFluxo: TIPO_FLUXO.PAGUE_LOJA,
              }));
            }}
          />
          <p className="text-lg font-medium">Pagar no estabelecimento</p>
        </label>
      </div>
    </div>
  );
};

export default Step1;
