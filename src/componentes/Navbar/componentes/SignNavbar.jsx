import Button from "@componentes/Button/Button";
import { useNavigate } from "react-router-dom";

const SignNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-x-3">
      <Button
        variants={{
          colors: "secondary",
          effects: "hover",
        }}
        onClick={() => navigate("/login")}
      >
        Login
      </Button>
      <Button
        variants={{
          colors: "secondary",
          effects: "hover",
        }}
        onClick={() => navigate("/switch")}
      >
        Crie sua conta
      </Button>
    </div>
  );
};

export default SignNavbar;
