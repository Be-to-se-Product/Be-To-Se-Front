import { ProgressContext } from "@/context/Progress/ProgressContext";
import api from "@/services/api/services";
import { ENUM_METODO_PAGAMENTO } from "@/utils/utils";
import { useContext, useEffect, useState } from "react";

const Step2 = () => {
  const { setData, idEstabelecimento } = useContext(ProgressContext);
  const [metodosPagamento, setMetodoPagamento] = useState([]);

  useEffect(() => {
    const getMetodoPagamento = () => {
      api
        .get(`/estabelecimentos/metodos/${idEstabelecimento}`)
        .then((response) => {
          setMetodoPagamento(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    getMetodoPagamento();
  }, []);

  return (
    <div>
      <h2 className="text-xl text-center mt-10 mb-10">
        Qual será o método de pagamento?
      </h2>
      <div className="flex flex-col gap-y-4">
        {metodosPagamento &&
          metodosPagamento?.map((metodo) => (
            <div key={metodo.id}>
              <label
                htmlFor={metodo.metodo}
                className="flex flex-row px-8  py-4 gap-x-6 bg-black-100 w-full rounded-lg"
                onClick={() => {
                  setData((prev) => ({
                    ...prev,
                    metodoPagamento: metodo.id,
                  }));
                }}
              >
                <input type="radio" name="metodoPagamento" id={metodo.metodo} />
                <img
                  src={ENUM_METODO_PAGAMENTO[metodo.descricao]}
                  alt={metodo.metodo}
                  className="w-10 "
                />
                <p className="text-lg font-medium">{metodo.descricao}</p>
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Step2;
