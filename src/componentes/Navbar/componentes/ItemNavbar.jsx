import { useNavigate } from "react-router-dom";
const ItemNavbar = ({ children }) => {
  const navigate = useNavigate();
  return (
    <li className="flex  justify-center gap-x-6">
      <span className="cursor-pointer" onClick={() => navigate("/")}>
        Institucional
      </span>
      <span className="cursor-pointer" onClick={() => navigate("/pesquisa")}>
        Produtos
      </span>
      <span className="cursor-pointer" onClick={() => navigate("/mapa")}>
        Mapa
      </span>
      {children}
    </li>
  );
};

export default ItemNavbar;
