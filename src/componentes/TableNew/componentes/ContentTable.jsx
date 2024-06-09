import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

function ContentTable({ children, className }) {
  return (
    <div className="relative w-full">
      <div
        className={twMerge(
          "w-full  h-full overflow-y-scroll scrollbar-hide bg-black-100 rounded-lg shadow-md",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}

ContentTable.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ContentTable.defaultProps = {
  className: "",
};

export default ContentTable;
