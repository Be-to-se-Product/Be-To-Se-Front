import { useNavigate } from "react-router-dom";

const LogoNavbar = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center font-medium cursor-pointer"
      onClick={() => navigate("/pesquisa")}
    >
      EasyFind
    </div>
  );
};

export default LogoNavbar;
