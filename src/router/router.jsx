import {createBrowserRouter} from "react-router-dom";
import Insitucional from "../pages/Institucional/Institucional";
import GerenciamentoProdutos from "../pages/GerenciamentoProdutos/GerenciamentoProdutos";

import TelaInicial from "../pages/TelaInicial/TelaInicial";
import TelaPesquisa from "../pages/TelaPesquisa/TelaPesquisa";
import TelaProduto from "../pages/TelaProduto/TelaProduto";

import GerenciamentoLoja from "../pages/GerencimentoLojas/GerenciamentoLoja";
import HistoricoVendas from "../pages/HistoricoVendas/HistoricoVendas";
import NotFound from "../pages/NotFound/NotFound";
  
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
      element: <NotFound />
    },

    {
      path: "/TelaInicial",
      element: <TelaInicial />
    },

    {
      path: "/TelaPesquisa",
      element: <TelaPesquisa />
    },

    {
      path: "/TelaProduto",
      element: <TelaProduto />
    }
    
  ]);

  export default router;