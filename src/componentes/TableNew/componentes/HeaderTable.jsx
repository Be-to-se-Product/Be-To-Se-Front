import { twMerge } from "tailwind-merge";

import PropTypes from "prop-types";

function HeaderTable({ className, children }) {
  return (
    <div className="relative">
      <div
        className={twMerge(
          "grid flex-row text-xs border text-black-900 bg-[#F8F9FA]    font-semibold",
          className
        )}
      >
        {children}
      </div>
      <div
        className={twMerge(
          "grid text-xs border text-black-900 bg-[#F8F9FA] font-semibold absolute w-full top-0",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

HeaderTable.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

HeaderTable.defaultProps = {
  className: "",
}

export default HeaderTable;
