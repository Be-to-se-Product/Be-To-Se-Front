import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import AplicattionContext from "../../../context/Apllicattion/AplicattionContext";
import { Checkbox } from "@mui/material";
import { orange } from "@mui/material/colors";
import Button from "../../../componentes/Button/Button";
import FormContext from "../../../context/Form/FormContext";
const Step4 = () => {
  const { setStateAtual, storage, setStorage } = useContext(FormContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = (data) => {
    const metodosPagamento = [];
    for (const [key, value] of Object.entries(data)) {
      if (value) {
        metodosPagamento.push(key);
      }
    }

    setStorage({ ...storage, metodosPagamento: metodosPagamento });
    setStateAtual((prev) => prev + 1);
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={`flex flex-col gap-y-8 `}>
      <div
        className={`flex flex-col w-10/12 justify-center  mx-auto h-[300px]   gap-y-4 rounded-lg  `}
      >
        <div className="grid grid-cols-2  gap-4  mx-auto ">
          <div className=" flex items-center   ">
            <Checkbox
              sx={{
                color: orange[800],
                "&.Mui-checked": {
                  color: orange[600],
                },
              }}
              {...register("1")}
            />
            <span>Cartão de crédito</span>
          </div>

          <div className="  flex  items-center">
            <Checkbox
              sx={{
                color: orange[800],
                "&.Mui-checked": {
                  color: orange[600],
                },
              }}
              {...register("2")}
            />
            <span>Cartão de Débito</span>
          </div>

          <div className="  flex  items-center">
            <Checkbox
              sx={{
                color: orange[800],
                "&.Mui-checked": {
                  color: orange[600],
                },
              }}
              {...register("3")}
            />
            <span>Vale alimentação</span>
          </div>

          <div className="  flex  items-center">
            <Checkbox
              sx={{
                color: orange[800],
                "&.Mui-checked": {
                  color: orange[600],
                },
              }}
              {...register("4")}
            />
            <span>Dinheiro</span>
          </div>

          <div className="  flex  items-center">
            <Checkbox
              sx={{
                color: orange[800],
                "&.Mui-checked": {
                  color: orange[600],
                },
              }}
              {...register("5")}
            />
            <span>Vale refeição</span>
          </div>

          <div className="  flex  items-center">
            <Checkbox
              sx={{
                color: orange[800],
                "&.Mui-checked": {
                  color: orange[600],
                },
              }}
              {...register("6")}
            />
            <span>Vale alimentação</span>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-2/4 mx-auto gap-x-3">
        <Button onClick={() => setStateAtual((prev) => prev - 1)}>
          Retroceder
        </Button>
        <Button>Avançar</Button>
      </div>
    </form>
  );
};

export default Step4;
