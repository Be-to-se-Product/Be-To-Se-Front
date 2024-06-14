import { compressorImage, converterFileTOBase64 } from "@/utils/conversores";
import ImagemDefault from "@assets/default-image.jpeg";

const ComponentImage = ({ index, setImage, preview }) => {
  const handleImagem = async (e) => {
    const file = await compressorImage(e.target.files[0], 0.4);
    const preview = await converterFileTOBase64(file);

    setImage((prev) => {
      const arr = [...prev];
      arr[index].file = file;
      arr[index].preview = preview;
      return [...arr];
    });
  };

  return (
    <div className="w-[280px] flex h-[250px] border rounded items-center justify-center relative">
      <img
        src={preview || ImagemDefault}
        alt=""
        className="h-full w-full  object-cover"
      />
      <label
        htmlFor={`imagem${index}`}
        className="w-full h-full flex items-center justify-center absolute opacity-0 hover:opacity-100 bg-black-900 bg-opacity-60 z-10 transition-all   cursor-pointer"
      >
        <span className="text-white-principal font-semibold">
          Clique aqui para editar
        </span>
      </label>
      <input
        id={`imagem${index}`}
        type="file"
        onChange={handleImagem}
        className="h-full w-full absolute top-0 opacity-0 "
      />
    </div>
  );
};

export default ComponentImage;
