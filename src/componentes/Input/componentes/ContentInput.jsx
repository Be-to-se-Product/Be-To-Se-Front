/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React from "react";
import showPassword from "@assets/show-password.png";
import hidePassword from "@assets/hide-password.png";

function ContentInput({ icon, register = {}, type, ...props }) {
  const [viewPassoword, setViewPassword] = React.useState(false);
  return (
    <div className="w-full relative">
      {icon && (
        <div className="flex px-4 z-10 justify-center items-center absolute h-full right-0 top-0 p-2">
          <img src={icon} alt="icon-input" className="w-5 h-5" />
        </div>
      )}

      <input
        type={type === "password" && viewPassoword ? "text" : type}
        autoComplete="off"
        className="w-full h-full  outline-none bg-white-principal group-hover:bg-white-principal transition-all duration-300 ease-in-out border border-gray-300  rounded-lg relative  pl-4 pr-10 py-2 shadow focus:ring-[0.5] focus:ring-orange-principal focus:border-orange-principal font-normal text-black-900 text-base disabled:text-gray-75 disabled:bg-gray-400 disabled:cursor-not-allowed   "
        {...register}
        {...props}
      />

      {type === "password" && (
        <span
          className="absolute right-0 top-1/4 px-4 cursor-pointer w-14 h-full object-cover"
          role="button"
          tabIndex={0}
          onClick={() => setViewPassword((prev) => !prev)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setViewPassword((prev) => !prev);
            }
          }}
        >
          <img
            src={viewPassoword ? hidePassword : showPassword}
            alt="show-password"
            className="object-cover"
          />
        </span>
      )}
    </div>
  );
}

ContentInput.propTypes = {
  icon: PropTypes.string,
};

ContentInput.defaultProps = {
  icon: "",
};
export default ContentInput;
