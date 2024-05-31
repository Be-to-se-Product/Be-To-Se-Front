/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

function TextAreaInput({ register = {}, className, ...props }) {
  return (
    <textarea
      rows={4}
      cols={50}
      className={twMerge(
        "w-full h-full  outline-none bg-white-gray group-hover:bg-white-95 transition-all duration-300 ease-in-out border border-gray-75  rounded-lg relative  pl-4 pr-10 py-2 shadow focus:ring-[0.5] focus:ring-orange-full focus:border-orange-full font-normal text-black-full text-base disabled:text-gray-75 disabled:bg-gray-50 disabled:cursor-not-allowed  ",
        className
      )}
      {...props}
      {...register}
    />
  );
}

TextAreaInput.propTypes = {
  register: PropTypes.object,
  className: PropTypes.string,
};

TextAreaInput.defaultProps = {
  register: {},
  className: "",
}

export default TextAreaInput;
