import {createBrowserRouter} from "react-router-dom";
import Insitucional from "../pages/Institucional/Institucional";
import GerenciamentoProdutos from "../pages/GerenciamentoProdutos/GerenciamentoProdutos";

import TelaInicial from "../pages/TelaInicial/TelaInicial";

import GerenciamentoLoja from "../pages/GerencimentoLojas/GerenciamentoLoja";
import HistoricoVendas from "../pages/HistoricoVendas/HistoricoVendas";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Insitucional />
    },
    {
      path: "/GerenciamentoProdutos",
      element: <GerenciamentoProdutos />
    },
    {
      path:"/GerenciamentoLojas",
      element:<GerenciamentoLoja/>
    },
    {
      path:"/HistoricoVendas",
      element:<HistoricoVendas/>
    },
    {
      path: "*",
      element: <><h2>Not Found</h2></>
    },

    {
      path: "/TelaInicial",
      element: <TelaInicial />
    }
    
  ]);

  export default router;