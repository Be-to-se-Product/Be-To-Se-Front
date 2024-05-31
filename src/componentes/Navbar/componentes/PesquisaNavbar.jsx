import InputRoot from "@componentes/Input/InputRoot";

const PesquisaNavbar = ({ onChange }) => {
  const handleInputChange = (event) => {
    const novoNome = event.target.value;
    onChange(novoNome);
  };

  return (
    <div className="flex w-1/2">
      <InputRoot.ContentInput
        icon={"/search.svg"}
        onChange={handleInputChange}
      ></InputRoot.ContentInput>
    </div>
  );
};

export default PesquisaNavbar;
