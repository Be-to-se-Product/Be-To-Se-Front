import { useContext, useEffect, useState } from "react";
import FormContext from "@/context/Form/FormContext";
import { useForm } from "react-hook-form";
import InputRoot from "@componentes/Input/InputRoot";
import Button from "@componentes/Button/Button";

const Step1 = () => {
  const { setStorage, storage, nextStep, prevStep, currentStep } =
    useContext(FormContext);
  const [isApplyDefault, setIsApplyDefault] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      nome: storage.nome,
      segmento: storage.segmento,
      telefoneContato: storage.telefoneContato,
      emailContato: "",
      referenciaInstagram: "",
      referenciaFacebook: "",
    },
  });

  useEffect(() => {
    if (!isApplyDefault) {
      setValue("nome", storage.nome);
      setValue("segmento", storage.segmento);
      setValue("telefoneContato", storage.telefoneContato);
      setValue("emailContato", storage.emailContato);
      setValue("referenciaInstagram", storage.referenciaInstagram);
      setValue("referenciaFacebook", storage.referenciaFacebook);
      setIsApplyDefault(false);
    }
    // eslint-disable-next-line
  }, [storage]);

  const message = {
    required: "Campo obrigatório",
    validarEmail: "Digite um e-mail válido",
  };

  const schemaValidate = {
    nome: {
      required: "Campo obrigatório",
    },
    segmento: {
      required: "Campo obrigatório",
    },
    telefoneContato: {
      required: "Campo obrigatório",
    },
    // Faça a validação do campo emailContato complexo

    emailContato: {
      required: "Campo obrigatório",
      validate: {
        validarEmail(value) {
          const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
          return regexEmail.test(value) || "Digite um e-mail válido";
        },
      },
    },
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
    handleSubmit(submit);
    prevStep();
  };

  return (
    <form
      className={` flex flex-col gap-y-8 ${currentStep() != 0 && "hidden"}`}
    >
      <div
        className={` w-full  mx-auto grid grid-cols-2  gap-x-8 rounded-lg h-[300px] `}
      >
        <div className=" flex flex-col justify-between ">
          <div className="flex flex-col gap-y-1">
            <div className="flex  gap-x-2  items-center ">
              <InputRoot.Label>Nome da Loja</InputRoot.Label>
              {errors?.nome && (
                <div className="text-red-500 text-xs w-max h-full  text-center flex items-center mb-2  ">
                  <div className="flex items-center justify-center">
                    <span className="h-3"> *</span>
                  </div>{" "}
                  {message[errors?.nome?.type]}
                </div>
              )}
            </div>
            <InputRoot.ContentInput
              register={register("nome", schemaValidate.nome)}
              defaultValue={storage.nome}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex  gap-x-2  items-center ">
              <InputRoot.Label>Segmento</InputRoot.Label>
              {errors?.segmento && (
                <div className="text-red-500 text-xs w-max h-full  text-center flex items-center mb-2  ">
                  <div className="flex items-center justify-center">
                    <span className="h-3"> *</span>
                  </div>{" "}
                  {message[errors?.segmento?.type]}
                </div>
              )}
            </div>
            <InputRoot.ContentInput
              register={register("segmento", schemaValidate.segmento)}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex  gap-x-2  items-center ">
              <InputRoot.Label>Numero do contato</InputRoot.Label>
              {errors?.telefoneContato && (
                <div className="text-red-500 text-xs w-max h-full  text-center flex items-center mb-2  ">
                  <div className="flex items-center justify-center">
                    <span className="h-3"> *</span>
                  </div>{" "}
                  {message[errors?.telefoneContato?.type]}
                </div>
              )}
            </div>
            <InputRoot.ContentInput
              register={register(
                "telefoneContato",
                schemaValidate.telefoneContato
              )}
              defaultValue={storage.telefoneContato}
            />
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-y-1">
            <div className="flex  gap-x-2  items-center ">
              <InputRoot.Label>Email de contato</InputRoot.Label>
              {errors?.emailContato && (
                <div className="text-red-500 text-xs w-max h-full  text-center flex items-center mb-2  ">
                  <div className="flex items-center justify-center">
                    <span className="h-3"> *</span>
                  </div>{" "}
                  {message[errors?.emailContato?.type]}
                </div>
              )}
            </div>
            <InputRoot.ContentInput
              register={register("emailContato", schemaValidate.emailContato)}
              defaultValue={storage.emailContato}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex  gap-x-2  items-center ">
              <InputRoot.Label>Perfil do instagram</InputRoot.Label>
              {errors?.referenciaInstagram && (
                <div className="text-red-500 text-xs w-max h-full  text-center flex items-center mb-2  ">
                  <div className="flex items-center justify-center">
                    <span className="h-3"> *</span>
                  </div>{" "}
                  {message[errors?.referenciaInstagram?.type]}
                </div>
              )}
            </div>
            <InputRoot.ContentInput
              register={register(
                "referenciaInstagram",
                schemaValidate.referenciaInstagram
              )}
              defaultValue={storage.referenciaInstagram}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <div className="flex  gap-x-2  items-center ">
              <InputRoot.Label>Perfil do Facebook</InputRoot.Label>
              {errors?.referenciaFacebook && (
                <div className="text-red-500 text-xs w-max h-full  text-center flex items-center mb-2  ">
                  <div className="flex items-center justify-center">
                    <span className="h-3"> *</span>
                  </div>{" "}
                  {message[errors?.referenciaFacebook?.type]}
                </div>
              )}
            </div>
            <InputRoot.ContentInput
              register={register(
                "referenciaFacebook",
                schemaValidate.referenciaFacebook
              )}
              defaultValue={storage.referenciaFacebook}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-x-2">
        <div className="flex justify-center w-2/4 mx-auto gap-x-3">
          <Button type="button" onClick={prev}>
            Retroceder
          </Button>
          <Button type="button" onClick={next}>
            Avançar
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Step1;
