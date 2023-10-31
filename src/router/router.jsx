import {createBrowserRouter, useNavigate} from "react-router-dom";
import Insitucional from "../pages/Institucional/Institucional";
import GerenciamentoProdutos from "../pages/GerenciamentoProdutos/GerenciamentoProdutos";

import TelaInicial from "../pages/TelaInicial/TelaInicial";
import TelaPesquisa from "../pages/TelaPesquisa/TelaPesquisa";
import TelaProduto from "../pages/TelaProduto/TelaProduto";
import DadosUsuario from "../pages/DadosUsuario/DadosUsuario"

import GerenciamentoLoja from "../pages/GerencimentoLojas/GerenciamentoLoja";
import HistoricoVendas from "../pages/HistoricoVendas/HistoricoVendas";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import api from "../services/api";

// api.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {

//     if (error.response || error.response.status === 401 || sessionStorage.getItem("TOKEN") === null) {
//       const navigate = useNavigate();
//       navigate('/login');
//     }
//     return Promise.reject(error);
//   }
// );
  
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
      path:"/Login",
      element:<Login/>
    },

    {
      path: "/TelaPesquisa",
      element: <TelaPesquisa />
    },

    {
      path: "/TelaProduto",
      element: <TelaProduto />
    },
    {
      path: "/DadosUsuario",
      element: <DadosUsuario />
    }

    
  ]);

  export default router;