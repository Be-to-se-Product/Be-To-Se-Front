import { CircularProgress } from "@mui/material";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

function ContentTable({ children, className, isLoading }) {
  return (
    <div className="relative w-full">
      <div
        className={twMerge(
          "w-full  overflow-y-scroll scrollbar-hide bg-black-100 rounded-lg shadow-md",
          className
        )}
      >
        {isLoading ? (
          <div className="flex flex-col justify-center items-center h-full ">
            <CircularProgress
              sx={{
                color: "#FFB800",
                width: "120px",
              }}
            />
            <p className="text-lg mt-2">Carregando Produtos</p>
          </div>
        ) : (
          children
        )}
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
