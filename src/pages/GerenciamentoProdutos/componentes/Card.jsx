import react from "react";
import imgProduto from "../../../assets/cocacola.svg";
import edit from "../../../assets/edit.svg";
import btnswitch from "../../../assets/switch.svg";
import btndelete from "../../../assets/delete.svg";

const Card = ({product,openModal}) => {
  return (
    <div className="w-[180px]   bg-white-principal p-4 flex flex-col gap-4 rounded-md ">
      <div className="relative border border-gray-300 h-[150px] rounded-md ">
        <div className=" flex flex-col 1  absolute  right-2  gap-2 top-2 ">
          <div className="  rounded-full bg-blue-800 w-7 h-7 text-center flex items-center justify-center cursor-pointer" onClick={()=>openModal('update',product.id)}>
            <img src={edit} alt="" />
          </div>

          <div className="  rounded-full bg-green-600 w-7 h-7 text-center flex items-center justify-center cursor-pointer " >
            <img src={btnswitch} alt="" />
          </div>

          <div className="  rounded-full bg-red-600 w-7 h-7 text-center flex items-center justify-center cursor-pointer" onClick={()=>openModal('delete',product.id)}>
            <img src={btndelete} alt="" />
          </div>
        </div>

        <img src={imgProduto} alt="imagem" className="w-screen rounded" />
      </div>

      <div className="content-text flex flex-col gap-2">
        <h2 className="font-medium text-xl">R$ {product.precoVenda}</h2>
        <p className="text-sm">{product.nome}</p>
      </div>
    </div>
  );
};

export default Card;
