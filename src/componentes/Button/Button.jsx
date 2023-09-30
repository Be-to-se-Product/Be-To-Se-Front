import React from "react";

const Button = ({children,...props}) => {
  return (
    <button {...props} className="text-sm px-4 py-2  font-semibold rounded bg-orange-principal w-max">
      {children}
    </button>
  );
};

export default Button;
