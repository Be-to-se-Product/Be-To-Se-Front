import { Navigate, createBrowserRouter, useNavigate } from "react-router-dom";
import Insitucional from "../pages/Institucional/Institucional";
import GerenciamentoProdutos from "../pages/GerenciamentoProdutos/GerenciamentoProdutos";

import TelaInicial from "../pages/TelaInicial/TelaInicial";
import TelaPesquisa from "../pages/TelaPesquisa/TelaPesquisa";
import TelaProduto from "../pages/TelaProduto/TelaProduto";
import DadosUsuario from "../pages/DadosUsuario/DadosUsuario"
import Compra from "../pages/Compra/Compra";
import DadosComerciante from "../pages/DadosComerciante/DadosComerciante";

import GerenciamentoLoja from "../pages/GerencimentoLojas/GerenciamentoLoja";
import HistoricoVendas from "../pages/HistoricoVendas/HistoricoVendas";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";

import PedidosComerciante from "../pages/PedidosComerciante/PedidosComerciante";
import PedidosUsuario from "../pages/PedidosUsuario/PedidosUsuario";
import MapaInterativo from "../pages/MapaInterativo/MapaInterativo";
import { isPermited } from "../utils/Autheticated";
import CadastroUsuario from "../pages/CadastroUsuario/CadastroUsuario";

const PrivateRoute = ({ element, usuario, ...rest }) => {
  if (!isPermited(usuario)) {
    return <NotFound />;
  }
  return element;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Insitucional />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/comerciante/produtos",
    element: (
      <PrivateRoute usuario="comerciante" element={<GerenciamentoProdutos />} />
    ),
  },
  {
    path: "/comerciante/lojas",
    element: (
      <PrivateRoute usuario="comerciante" element={<GerenciamentoLoja />} />
    ),
  },
  {
    path: "/comerciante/vendas",
    element: (
      <PrivateRoute usuario="comerciante" element={<HistoricoVendas />} />
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },

  {
    path: "/index",
    element: <TelaInicial />,
  },

  {
    path: "/TelaProduto/:id",
    element: <TelaProduto />
  },
  {
    path: "/usuarios/dados",
    element: <DadosUsuario />
  },
  {
    path: "/comerciante/dados",
    element: <DadosComerciante />
  },
  {
    path: "/compra",
    element: <Compra/>
  },
  {
    path: "/pesquisa",
    element: <TelaPesquisa />,
  },
  {
    path: "/comerciante/pedidos",
    element: (
      <PrivateRoute usuario="comerciante" element={<PedidosComerciante />} />
    ),
  },
  {
    path: "/usuario/pedidos",
    element: <PrivateRoute usuario="consumidor" element={<PedidosUsuario />} />,
  },
  {
    path: "/mapa",
    element: <MapaInterativo />,
  },
  {
    path: "/usuario/cadastro",
    element: <CadastroUsuario />,
  }
]);

export default router;
