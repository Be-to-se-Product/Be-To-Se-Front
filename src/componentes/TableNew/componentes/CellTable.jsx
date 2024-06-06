/* eslint-disable react/jsx-props-no-spreading */
import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

function CellTable({ children, className, ...props }) {
  return (
    <div
      className={twMerge(
        "border-r border-gray-200 h-full flex items-center  ",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

CellTable.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CellTable.defaultProps = {
  children: null,
  className: "",
}

export default CellTable;
