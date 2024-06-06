/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import Pagination from "../../Pagination/Pagination";

function PaginationTable({ paginaAtual, totalPaginas, ...props }) {
  
  return (
    <div className="w-full flex justify-between py-3 px-6">
      <div className="text-sm text-black-50 font-medium">
        Visualizando {paginaAtual} de {totalPaginas}
      </div>
      <Pagination {...props} />
    </div>
  );
}

export default PaginationTable;
