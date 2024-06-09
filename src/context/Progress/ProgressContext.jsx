/* eslint-disable react/forbid-prop-types */
import { createContext } from "react";
import PropTypes from "prop-types";

export const ProgressContext = createContext();

function ProgressProvider({ children, values }) {
  return (
    <ProgressContext.Provider value={values}>
      {children}
    </ProgressContext.Provider>
  );
}

ProgressProvider.propTypes = {
  children: PropTypes.node.isRequired,
  values: PropTypes.any.isRequired,
};

export default ProgressProvider;
