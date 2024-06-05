import InputRoot from "@componentes/Input/InputRoot";
import IconDelete from "@assets/deletar.svg";

const RowSessao = ({ item, setRowSessao }) => {
  const handleDelete = () => {
    setRowSessao((prev) =>
      prev.filter(
        (element) =>
          element?.id !== item?.id ||
          element.identificador !== item.identificador
      )
    );
  };

  return (
    <div className="w-10/12 flex justify-between">
      <div className="w-2/5">
        <InputRoot.ContentInput
          defaultValue={item.texto}
          onChange={(e) => (item.texto = e.target.value)}
        />
      </div>
      <span
        className="flex justify-center items-center w-12"
        onClick={handleDelete}
        onKeyDown={handleDelete}
        role="button"
        tabIndex={0}
      >
        <img src={IconDelete} alt="" />
      </span>
    </div>
  );
};

export default RowSessao;
