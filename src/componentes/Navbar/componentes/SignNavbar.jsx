import React from "react";
import Button from "../../Button/Button";
import {useNavigate} from "react-router-dom";

const SignNavbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex gap-x-3">
      <Button onClick={() => navigate("/login")}>Login</Button>
      <Button>Crie sua conta</Button>
    </div>
  );
};

export default SignNavbar;
