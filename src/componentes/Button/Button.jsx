import React from "react";

const Button = ({children,className,...props}) => {
  return (
    <button {...props} className={`text-sm px-4 py-2 h-full   font-semibold rounded bg-orange-principal ${className}`} >
      {children}
    </button>
  );
};

export default Button;
