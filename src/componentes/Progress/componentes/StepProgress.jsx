import { useCallback, useEffect, useRef } from "react";

import PropTypes from "prop-types";

function StepProgress({ index, size, currentStep, children, icon, className }) {
  const step = useRef(null);

  const calculateWidth = useCallback(() => {
    if (!size || index >= size - 1 || !step?.current) return 0;

    const coordsElementCurrent = step?.current?.getBoundingClientRect()?.right;
    const coordsElementNext =
      step?.current?.offsetParent.children[
        index + 1
      ]?.children[0]?.getBoundingClientRect()?.right;

    return coordsElementNext - coordsElementCurrent;
  }, [index, size, step.current]);

  useEffect(() => {
    calculateWidth();
  }, [calculateWidth]);

  return (
    <div className="text-center flex flex-col items-center gap-y-3">
      <div
        className={`w-14 h-14 relative ${
          currentStep() >= index ? "bg-black-900" : "bg-gray-200"
        } rounded-full text-white-full flex justify-center items-center text-xl font-medium step-item transition-all ease-out delay-100 duration-300 ${className} `}
        ref={step}
      >
        <div
          className={`h-2 absolute ${
            currentStep() > index ? "bg-orange-principal" : "bg-gray-200"
          } transition-all ease-in-out duration-300  translate-x-1/2  z-[-1] `}
          style={{
            width: `${calculateWidth()}px`,
            display: index === size - 1 ? "none" : "block",
          }}
        />

        {icon ? (
          <img src={icon} alt="" />
        ) : (
          <span className="absolute">{index + 1}</span>
        )}
      </div>
      {children}
    </div>
  );
}

export default StepProgress;

StepProgress.propTypes = {
  index: PropTypes.number,
  size: PropTypes.number,
  currentStep: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.string,
  className: PropTypes.string,
};

StepProgress.defaultProps = {
  index: 0,
  size: 0,
  currentStep: () => {},
  children: null,
  icon: "",
  className: "",
};
