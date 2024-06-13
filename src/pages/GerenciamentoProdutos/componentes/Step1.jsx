import { useEffect } from "react";
import InputRoot from "@componentes/Input/InputRoot";
import { useForm } from "react-hook-form";
import { MenuItem, Select, Autocomplete, TextField, Chip } from "@mui/material";
import BotaoSwitch from "@componentes/Switch/BotaoSwitch";
const Step1 = ({ setData, children, infoBanco, dataStorage }) => {
  const { register, handleSubmit, setValue, formState } = useForm();

  const mensagens = {
    required: "Campo obrigatório",
    minLength: "Campo deve ter no mínimo 3 caracteres",
    maxLength: "Campo deve ter no máximo 50 caracteres",
    isNumber: "Campo deve ser um número",
  };

  const schemaValidate = {
    nome: {
      required: true,
      minLength: 3,
      maxLength: 50,
    },
    preco: {
      required: true,
      validate: {
        isNumber: (value) => !isNaN(value),
      },
    },
    precoOferta: {
      required: true,
      validate: {
        isNumber: (value) => !isNaN(value),
      },
    },
    categoria: {
      required: true,
    },
    secao: {
      required: true,
    },
    tags: {
      required: true,
    },
  };
  useEffect(() => {
    dataStorage?.tags
      ? setValue("tags", dataStorage.tags)
      : setValue("tags", []);
  }, [dataStorage?.tags, setValue]);
  return (
    <form
      className={`flex  flex-col items-center `}
      onSubmit={handleSubmit(setData)}
    >
      <div className="w-full mb-3 flex justify-end gap-x-3 items-center">
        Ativar Promoção
        <BotaoSwitch />
      </div>
      <div className={`flex gap-x-4`}>
        <div className="w-1/2 flex flex-col gap-y-4">
          <div className="h-24">
            <InputRoot.Label>Nome</InputRoot.Label>
            <InputRoot.ContentInput
              placeholder="Nome do produto"
              defaultValue={dataStorage?.nome}
              register={register("nome", schemaValidate.nome)}
            />

            <span className="text-xs text-red-600 font-medium">
              {formState?.errors?.nome?.type &&
                mensagens[formState.errors.nome.type]}
            </span>
          </div>

          <div className="flex w-full  items-end gap-x-2">
            <div className="h-24">
              <InputRoot.Label>Valor Total</InputRoot.Label>
              <InputRoot.ContentInput
                placeholder={"R$ 12,00"}
                defaultValue={dataStorage?.preco}
                register={register("preco", schemaValidate.preco)}
              />

              <span className="text-xs text-red-600 font-medium">
                {formState?.errors?.preco?.type &&
                  mensagens[formState.errors.preco.type]}
              </span>
            </div>
            <div className="h-24">
              <InputRoot.Label>Valor Oferta</InputRoot.Label>

              <InputRoot.ContentInput
                placeholder="R$ 12,00"
                defaultValue={dataStorage?.precoOferta}
                register={register("precoOferta", schemaValidate.precoOferta)}
              />
              <span className="text-xs text-red-600 font-medium">
                {formState?.errors?.precoOferta?.type &&
                  mensagens[formState.errors.precoOferta.type]}
              </span>
            </div>
            <div className="h-10"></div>
          </div>

          <div className="flex flex-col w-full   gap-x-2 h-24">
            <InputRoot.Label>Categoria</InputRoot.Label>
            <Select
              id="demo-simple-select"
              className="w-full h-[42px]"
              name="categoria"
              defaultValue={dataStorage?.categoria}
              {...register("categoria", schemaValidate.categoria)}
            >
              <MenuItem value={"Roupas"}>Roupas</MenuItem>
              <MenuItem value={"Eletronicos"}>Eletronicos</MenuItem>
              <MenuItem value={"Utensilhos"}>Utensilhos</MenuItem>
            </Select>
            <span className="text-xs text-red-600 font-medium">
              {formState?.errors?.categoria?.type &&
                mensagens[formState.errors.categoria.type]}
            </span>
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-y-4 ">
          <div className="flex flex-col w-full h-24">
            <InputRoot.Label>Seção da Loja</InputRoot.Label>
            <Select
              className="h-[42px]"
              id="demo-simple-select"
              defaultValue={dataStorage?.secao}
              {...register("secao", schemaValidate.secao)}
            >
              {infoBanco.sessoes.map((secao) => (
                <MenuItem key={secao.toString()} value={secao.id}>
                  {secao.descricao}
                </MenuItem>
              ))}
            </Select>
            <span className="text-xs text-red-600 font-medium">
              {formState?.errors?.secao?.type &&
                mensagens[formState.errors.secao.type]}
            </span>
          </div>

          <div className="flex flex-col h-24">
            <InputRoot.Label>Código SKU</InputRoot.Label>
            <InputRoot.ContentInput
              nome={"Categoria"}
              defaultValue={dataStorage?.codigoSku}
              register={register("codigoSku")}
            />
          </div>
          <InputRoot.Label>Código de barras</InputRoot.Label>
          <InputRoot.ContentInput
            nome={"Categoria"}
            defaultValue={dataStorage?.codigoBarras}
            register={register("codigoBarras")}
          />
        </div>
      </div>
      <div className="flex  w-full flex-col gap-x-2 h-24">
        <InputRoot.Label>Tags</InputRoot.Label>

        <Autocomplete
          multiple
          id="tags-filled"
          options={infoBanco?.tag}
          getOptionLabel={(option) => option?.nome}
          limitTags={5}
          {...register("tags", {
            validate: {
              minLength: (value) => value.length > 0,
            },
          })}
          freeSolo
          defaultValue={dataStorage?.tags}
          onChange={(event, value) => {
            setValue("tags", !value ? [] : value, { shouldValidate: true });
          }}
          renderTags={(value, getTagProps) => {
            return value.map((option, index) => (
              <Chip
                key={index}
                variant="outlined"
                label={option?.nome}
                {...getTagProps({ index })}
              />
            ));
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <span className="text-xs text-red-600 font-medium">
          {formState?.errors?.tags?.type &&
            mensagens[formState.errors.tags.type]}
        </span>
      </div>

      {children}
    </form>
  );
};

export default Step1;
