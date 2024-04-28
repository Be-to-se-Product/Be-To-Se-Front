import React from "react";

const Button = ({ children, className, texto, ...props }) => {
  return (
    <button
      {...props}
      className={`text-sm px-4 py-2 h-full font-semibold rounded border border-orange-400  hover:bg-orange-principal hover:text-white-principal transition-all ${className} `}
    >
      {children}
    </button>
  );
};

export default Button;
