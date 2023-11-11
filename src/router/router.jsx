import {createBrowserRouter, useNavigate} from "react-router-dom";
import Insitucional from "../pages/Institucional/Institucional";
import GerenciamentoProdutos from "../pages/GerenciamentoProdutos/GerenciamentoProdutos";

import TelaInicial from "../pages/TelaInicial/TelaInicial";
import TelaPesquisa from "../pages/TelaPesquisa/TelaPesquisa";

import GerenciamentoLoja from "../pages/GerencimentoLojas/GerenciamentoLoja";
import HistoricoVendas from "../pages/HistoricoVendas/HistoricoVendas";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";

import PedidosComerciante from "../pages/PedidosComerciante/PedidosComerciante";
import PedidosUsuario from "../pages/PedidosUsuario/PedidosUsuario";
import MapaInterativo from "../pages/MapaInterativo/MapaInterativo";


  
const router = createBrowserRouter([
    {
      path: "/",
      element: <Insitucional />
    },
    {
      path: "/comerciante/produtos",
      element: <GerenciamentoProdutos />
    },
    {
      path:"/comerciante/lojas",
      element:<GerenciamentoLoja/>
    },
    {
      path:"/comerciante/historico",
      element:<HistoricoVendas/>
    },
    {
      path: "*",
      element: <NotFound />
    },

    {
      path: "/index",
      element: <TelaInicial />
    },
    {
      path:"/login",
      element:<Login/>
    },

    {
      path: "/pesquisa",
      element: <TelaPesquisa />
    },
    {
      path: "/comerciante/pedidos",
      element: <PedidosComerciante/>
    },
    {
      path: "/usuario/pedidos",
      element: <PedidosUsuario/>
    },
    {
      path:"/mapa",
      element:<MapaInterativo/>
    }


    
  ]);

  export default router;