import { twMerge } from "tailwind-merge";
import PropTypes from "prop-types";

function RowTable({ children, className }) {
  return (
    <div
      className={twMerge(
        "grid text-xs border border-gray-200 hover:bg-black-200 transition-all duration-200 ease-in-out",
        className
      )}
    >
      {children}
    </div>
  );
}

RowTable.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

RowTable.defaultProps = {
  className: "",
};

export default RowTable;
