import { useContext, useEffect, useState } from "react";
import FormContext from "@/context/Form/FormContext";
import { useForm } from "react-hook-form";
import InputRoot from "@componentes/Input/InputRoot";
import Select from "@mui/material/Select";
import Button from "@componentes/Button/Button";
import MenuItem from "@mui/material/MenuItem";
const Step2 = () => {
  const { setStorage, storage, prevStep, nextStep, currentStep } =
    useContext(FormContext);
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cep: storage?.cep || "",
      estado: storage?.estado || "",
    },
  });
  const [isApplyDefault, setIsApplyDefault] = useState(false);

  useEffect(() => {
    if (!isApplyDefault && Object.keys(storage).length > 0) {
      setValue("cep", storage?.cep?.replace("-", ""));
      setValue("logradouro", storage?.logradouro);
      setValue("numero", storage?.numero);
      setValue("bairro", storage?.bairro);
      setValue("cidade", storage?.cidade);
      setValue("estado", storage?.estado);
      handleCep(storage?.cep?.replace("-", ""));
      setIsApplyDefault(true);
    }
    // eslint-disable-next-line
  }, [storage]);

  const message = {
    required: "Campo obrigatório",
  };

  const siglas = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  const schemaValidate = {
    cep: {
      required: true,
      validate: (value) => {
        return value.length == 8;
      },
    },
    logradouro: {
      required: true,
    },
    numero: {
      required: true,
    },
    bairro: {
      required: true,
    },
    cidade: {
      required: true,
    },
    estado: {
      required: true,
      validate: (value) => {
        return siglas.includes(value);
      },
    },
  };

  const getEndereco = async (cep) => {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    return data;
  };

  const submit = (data, callback) => {
    setStorage({ ...storage, ...data });
    callback?.();
  };

  const next = () => {
    handleSubmit((data) => {
      submit(data, nextStep);
    })();
  };

  const prev = () => {
    prevStep();
  };

  const handleCep = async (cep) => {
    if (cep && cep.length == 8) {
      const data = await getEndereco(cep);
      if (data.erro) {
        alert("Cep não encontrado");
        return;
      }
      const { logradouro, bairro, localidade, uf } = data;

      setValue("logradouro", logradouro);
      setValue("bairro", bairro);
      setValue("cidade", localidade);
      setValue("estado", uf);
    }
  };

  return (
    <form className={`flex flex-col gap-y-6 ${currentStep() != 1 && "hidden"}`}>
      <div className="flex flex-col w-10/12  mx-auto h-[300px]  gap-y-4 rounded-lg">
        <div className=" flex  ">
          <div className="flex flex-col gap-y-1 w-2/6 ">
            <div className="flex  gap-x-2  items-center ">
              <InputRoot.Label>CEP</InputRoot.Label>
              {errors?.cep && (
                <div className="text-red-500 text-xs w-max h-full  text-center flex items-center mb-2  ">
                  <div className="flex items-center justify-center">
                    <span className="h-3"> *</span>
                  </div>{" "}
                  {message[errors.logradouro.type]}
                </div>
              )}
            </div>
            <InputRoot.ContentInput
              maxLength={8}
              register={register("cep", schemaValidate.cep)}
              onChange={(e) => handleCep(e.target.value)}
            />
          </div>
        </div>

        <div className="flex  gap-x-8">
          <div className="flex flex-col gap-y-1">
            <div className="flex  gap-x-2  items-center ">
              <InputRoot.Label>Logradouro</InputRoot.Label>
              {errors?.logradouro && (
                <div className="text-red-500 text-xs w-max h-full  text-center flex items-center mb-2  ">
                  <div className="flex items-center justify-center">
                    <span className="h-3"> *</span>
                  </div>{" "}
                  {message[errors?.logradouro?.type]}
                </div>
              )}
            </div>
            <InputRoot.ContentInput
              register={register("logradouro", schemaValidate.logradouro)}
              defaultValue={storage?.logradouro}
            />
          </div>

          <div className="flex flex-col gap-y-1 w-2/6">
            <div className="flex  gap-x-2  items-center ">
              <InputRoot.Label>Numero</InputRoot.Label>
              {errors?.numero && (
                <div className="text-red-500 text-xs w-max h-full   flex items-center mb-2  ">
                  <div className="flex items-center ">
                    <span className="h-3"> *</span>
                  </div>{" "}
                  {message[errors.numero.type]}
                </div>
              )}
            </div>
            <InputRoot.ContentInput
              register={register("numero", schemaValidate.numero)}
              defaultValue={storage.numero}
            />
          </div>
        </div>

        <div className="flex  gap-x-8 ">
          <div className="flex flex-col gap-y-1">
            <div className="flex  gap-x-2  items-center ">
              <InputRoot.Label>Bairro</InputRoot.Label>
              {errors?.bairro && (
                <div className="text-red-500 text-xs w-max h-full  text-center flex items-center mb-2  ">
                  <div className="flex items-center justify-center">
                    <span className="h-3"> *</span>
                  </div>{" "}
                  {message[errors?.bairro?.type]}
                </div>
              )}
            </div>
            <InputRoot.ContentInput
              register={register("bairro", schemaValidate.bairro)}
              defaultValue={storage.bairro}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex  gap-x-2  items-center ">
              <InputRoot.Label>Cidade</InputRoot.Label>
              {errors?.cidade && (
                <div className="text-red-500 text-xs w-max h-full  text-center flex items-center mb-2  ">
                  <div className="flex items-center justify-center">
                    <span className="h-3"> *</span>
                  </div>{" "}
                  {message[errors?.cidade?.type]}
                </div>
              )}
            </div>
            <InputRoot.ContentInput
              register={register("cidade", schemaValidate.cidade)}
              defaultValue={storage.cidade}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex  gap-x-2  items-center ">
              <InputRoot.Label>Estado</InputRoot.Label>
              {errors?.estado && (
                <div className="text-red-500 text-xs w-max h-full  text-center flex items-center mb-2  ">
                  <div className="flex items-center justify-center">
                    <span className="h-3"> *</span>
                  </div>{" "}
                  {message[errors?.estado?.type]}
                </div>
              )}
            </div>
            <Select
              value={watch("estado")}
              className="h-11 w-20"
              {...register("estado", schemaValidate.estado)}
              sx={{
                "& .MuiSelect-select": {
                  padding: "10px 14px",
                  borderRadius: "5px",
                  border: "1px solid #D1D5DB",
                  outline: "none",
                  "&:focus": {
                    borderColor: "#F97316",
                  },
                },
              }}
            >
              {siglas.map((item, index) => (
                <MenuItem value={`${item}`} key={index}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-2/4 mx-auto gap-x-3">
        <Button type="button" onClick={prev}>
          Retroceder
        </Button>
        <Button type="button" onClick={next}>
          Avançar
        </Button>
      </div>
    </form>
  );
};

export default Step2;
