import InputRoot from "@componentes/Input/InputRoot";
import { useEffect, useState } from "react";

const PesquisaNavbar = ({ onChange, nome }) => {
  const [nomePesquisa, setNomePesquisa] = useState("");
  const handleInputChange = (event) => {
    const novoNome = event.target.value;
    setNomePesquisa(novoNome);
    onChange(novoNome);
  };

  useEffect(() => {
    if (nome == "") {
      setNomePesquisa(nome);
    }
  }, [nome]);

  return (
    <div className="flex w-1/2">
      <InputRoot.ContentInput
        icon={"/search.svg"}
        value={nomePesquisa}
        onChange={handleInputChange}
      ></InputRoot.ContentInput>
    </div>
  );
};

export default PesquisaNavbar;
