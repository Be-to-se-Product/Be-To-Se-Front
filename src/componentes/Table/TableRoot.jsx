import React from "react";
import ContentTable from "./componentes/ContentTable";
import CellTable from "./componentes/CellTable";
import RowTable from "./componentes/RowTable";
import HeaderTable from "./componentes/HeaderTable";

const TableRoot = {
  Content: ContentTable,
  Header:HeaderTable,
  Cell: CellTable,
  Row: RowTable,
};

export default TableRoot;
