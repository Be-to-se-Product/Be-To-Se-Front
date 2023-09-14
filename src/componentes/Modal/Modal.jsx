
import React from "react";

const Modal = ({children,isVisible}) => {
  return (
    <>
    
    <div className={`fixed inset-0 bg-black-900 bg-opacity-50 -z-1   ${!isVisible&&'hidden'} flex items-center justify-center `}>

    <div className={`w-max h-max fixed py-8 px-4  flex gap-y-2      z-10 bg-black-100  ` }>
        {children}
     </div>

    </div>
    </>
  );
};

export default Modal;
