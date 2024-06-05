import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Checkbox } from "@mui/material";
import { orange } from "@mui/material/colors";
import Button from "@componentes/Button/Button";
import FormContext from "@/context/Form/FormContext";
import api from "@/services/api/services";
const Step4 = ({ setTeste, teste }) => {
  const { storage, setStorage, currentStep, nextStep, prevStep } =
    useContext(FormContext);
  const { register, handleSubmit, watch, setValue } = useForm();
  const [metodosPagamento, setMetodosPagamento] = useState([]);
  const [isApplyDefault, setIsApplyDefault] = useState(false);

  useEffect(() => {
    getMetodosPagamento();
  }, []);

  useEffect(() => {
    if (!isApplyDefault && Object.keys(storage).length > 0) {
      if (storage?.metodosPagamento) {
        storage.metodosPagamento.forEach((value) => {
          Object.entries(value).forEach(([key, value]) => {
            setValue(key, value);
          });
        });
        setIsApplyDefault(true);
      }
    }
    setTeste((prev) => prev + 1);
    // eslint-disable-next-line
  }, [storage]);

  const getMetodosPagamento = () => {
    api
      .get("/metodos-pagamentos")
      .then((response) => {
        setMetodosPagamento(response.data || []);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const submit = (data, callback) => {
    const metodosPagamento = [];
    console.log(data);
    for (const [key, value] of Object.entries(data)) {
      if (value) {
        metodosPagamento.push(key);
      }
    }
    setStorage({ ...storage, metodosPagamento: metodosPagamento });
    callback?.();
  };

  const handle = () => {
    if (validStep()) {
      handleSubmit((data) => {
        submit(data, nextStep);
      })();
    }
  };

  const prev = () => {
    handleSubmit((data) => {
      submit(data);
    })();
    prevStep();
  };

  const validStep = () => {
    const campos = watch();
    return !!Object.values(campos).find((value) => value);
  };

  return (
    <form className={`flex flex-col gap-y-8 ${currentStep() != 3 && "hidden"}`}>
      {!validStep() && (
        <div className=" h-1 text-center">
          Selecione ao menos um método de pagamento
        </div>
      )}
      <div
        className={`flex flex-col justify-center mx-auto h-[300px] gap-y-4 rounded-lg`}
        key={teste}
      >
        <div className="grid grid-cols-2 gap-4 gap-y-2 mx-auto">
          {metodosPagamento.map((item) => (
            <div className="flex items-center gap-y-1" key={item.id}>
              <Checkbox
                sx={{
                  color: orange[400],
                  "&.Mui-checked": {
                    color: orange[600],
                  },
                }}
                defaultChecked={
                  !!storage?.metodosPagamento?.find(
                    (el) => Object.keys(el)[0] == item.id.toString()
                  )
                }
                {...register(item.id.toString())}
              />
              <span className="text-center">{item.descricao}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-2/4 mx-auto gap-x-3">
        <Button onClick={prev} type="button">
          Retroceder
        </Button>
        <Button onClick={handle} type="button">
          Avançar{" "}
        </Button>
      </div>
    </form>
  );
};

export default Step4;
