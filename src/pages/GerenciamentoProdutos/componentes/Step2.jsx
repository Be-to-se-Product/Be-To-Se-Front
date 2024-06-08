import { useEffect, useState } from "react";
import ComponentImage from "./ComponentImage";

const Step2 = ({ setData, children, dataStorage }) => {
  const [imagens, setImagem] = useState([
    {
      preview: "",
      file: null,
    },
    {
      preview: "",
      file: null,
    },
    {
      preview: "",
      file: null,
    },
    {
      preview: "",
      file: null,
    },
  ]);

  useEffect(() => {
    if (dataStorage?.imagens) {
      setImagem(dataStorage.imagens);
    }
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setData({
          imagens,
        });
      }}
    >
      <div className={`w-full grid grid-cols-2 items-center gap-4   `}>
        {imagens.map((imagem, index) => (
          <ComponentImage
            key={index}
            index={index}
            setImage={setImagem}
            preview={imagem.preview}
            imagens={imagens}
          />
        ))}
      </div>

      {children}
    </form>
  );
};

export default Step2;
