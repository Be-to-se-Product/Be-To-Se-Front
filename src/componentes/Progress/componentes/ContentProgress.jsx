import PropTypes from "prop-types";
import React from "react";

function ContentProgress({ children, currentStep }) {
  return (
    <div className="flex justify-between w-full relative">
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          index,
          size: children.length,
          currentStep,
        })
      )}
    </div>
  );
}

ContentProgress.propTypes = {
  children: PropTypes.node.isRequired,
  currentStep: PropTypes.func.isRequired,
};

export default ContentProgress;
