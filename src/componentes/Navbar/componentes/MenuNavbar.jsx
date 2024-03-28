import React from "react";

const MenuNavbar = ({ children }) => {
  return (
    <div className="flex justify-center ">
    <nav className="py-2">
    <ul className="flex text-sm items-center gap-x-10">
        {children}
    </ul>
    </nav>
    </div>
  );
};

export default MenuNavbar;
