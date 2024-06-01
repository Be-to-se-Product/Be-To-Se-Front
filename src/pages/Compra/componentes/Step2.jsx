import { ProgressContext } from "@/context/Progress/ProgressContext";
import api from "@/services/api/services";
import { ENUMMETODOPAGAMENTO } from "@/utils/utils";
import { useContext, useEffect, useState } from "react";

const Step2 = () => {
  const { setData } = useContext(ProgressContext);
  const [metodosPagamento, setMetodoPagamento] = useState([]);

  useEffect(() => {
    const getMetodoPagamento = () => {
      api
        .get(`/estabelecimentos/metodos/1`)
        .then((response) => {
          setMetodoPagamento(response.data);
        })
        .catch((error) => {
          console.log(error);
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
        {metodosPagamento.map((metodo) => (
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
                src={ENUMMETODOPAGAMENTO[metodo.descricao]}
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
