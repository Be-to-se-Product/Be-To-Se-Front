

import IconClose from "@/assets/closeButton.png";
const ContentModal = ({ children, className, setPedidoSelecionado, show }) => {
  return (
    <div
      className={` fixed ${!show && "invisible"} ${!show && "opacity-0"} transition-opacity ease-in-out z-10`}
    >
      <div
        className={`w-full h-full bg-black-fondo opacity-20 fixed top-0 left-0 z-1 bg-black-800 transition-opacity `}
      ></div>

      <dialog
        className={`w-1/3 h-1/3 rounded-md bg-white-principal border fixed  left-1/3 right-1/3 ${className}`}
        open={show}
      >
        <button
          className="absolute right-[-20px] top-[-20px] cursor-pointer"
          onClick={() => {
            setPedidoSelecionado({
              data: null,
              show: false,
            });
          }}
        >
          <img src={IconClose} alt="close" className="w-10 h-10" />
        </button>
        {children}
      </dialog>
    </div>
  );
};

export default ContentModal;
