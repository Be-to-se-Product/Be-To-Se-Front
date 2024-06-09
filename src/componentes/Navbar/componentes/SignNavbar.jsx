import Button from "@componentes/Button/Button";
import { useNavigate } from "react-router-dom";

const SignNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-x-3">
      <div className="w-[100px]">
        <Button
          variants={{
            colors: "secondary",
            effects: "hover",
          }}
          onClick={() => navigate("/login")}
        >
          Login
        </Button>
      </div>
      <div className="w-[140px]">
        <Button
          variants={{
            colors: "secondary",
            sizes: "sm",
            effects: "hover",
          }}
          onClick={() => navigate("/switch")}
        >
          Crie sua conta
        </Button>
      </div>
    </div>
  );
};

export default SignNavbar;
