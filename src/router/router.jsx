import { BrowserRouter, Route, Routes } from "react-router-dom";
import Insitucional from "../pages/Institucional/Institucional";
import GerenciamentoProdutos from "../pages/GerenciamentoProdutos/GerenciamentoProdutos";
import TelaInicial from "../pages/TelaInicial/TelaInicial";
import TelaPesquisa from "../pages/TelaPesquisa/TelaPesquisa";
import TelaProduto from "../pages/TelaProduto/TelaProduto";
import DadosUsuario from "../pages/DadosUsuario/DadosUsuario";
import Compra from "../pages/Compra/Compra";
import DadosComerciante from "../pages/DadosComerciante/DadosComerciante";
import CadastroComerciante from "../pages/CadastroComerciante/CadastroComerciante";
import GerenciamentoLoja from "../pages/GerencimentoLojas/GerenciamentoLoja";
import HistoricoVendas from "../pages/HistoricoVendas/HistoricoVendas";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import PedidosComerciante from "../pages/PedidosComerciante/PedidosComerciante";
import PedidosUsuario from "../pages/PedidosUsuario/PedidosUsuario";
import MapaInterativo from "../pages/MapaInterativo/MapaInterativo";
import CadastroUsuario from "../pages/CadastroUsuario/CadastroUsuario";
import SwitchCadastro from "../pages/SwitchCadastro/SwitchCadastro";
import LayoutComercinate from "@/pages/LayoutComerciante/LayoutComercinate.jsx";
// import { isPermited } from "../utils/Autheticated";

// const PrivateRoute = ({ element, usuario, ...rest }) => {
//   if (!isPermited(usuario)) {
//     return <NotFound />;
//   }
//   return element;
// };

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Insitucional />} />
        <Route path="/index" element={<TelaInicial />} />
        <Route path="/cadastro/comerciante" element={<CadastroComerciante />} />
        <Route path="/comerciante/lojas" element={<GerenciamentoLoja />}/>
        <Route path="/comerciante/lojas/:idEstabelecimento" element={<LayoutComercinate />}> 
          <Route path="produtos" element={<GerenciamentoProdutos />} />
          <Route path="vendas" element={<HistoricoVendas />} />
          <Route path="pedidos" element={<PedidosComerciante />} />
        </Route>
        <Route path="/TelaPesquisa" element={<TelaPesquisa />} />
        <Route path="/TelaProduto/:id" element={<TelaProduto />} />
        <Route path="/usuarios/dados" element={<DadosUsuario />} />
        <Route path="/comerciante/dados" element={<DadosComerciante />} />
        <Route path="/compra" element={<Compra />} />
        <Route path="/usuario/pedidos" element={<PedidosUsuario />} />
        <Route path="/mapa" element={<MapaInterativo />} />
        <Route path="/cadastro/usuario" element={<CadastroUsuario />} />
        <Route path="/switch" element={<SwitchCadastro />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Insitucional />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/cadastro/comerciante",
//     element: <CadastroComerciante />,
//   },
//   {
//     path: "/comerciante/:idEstabelecimento/produtos",
//     element: (
//       <PrivateRoute usuario="comerciante" element={<GerenciamentoProdutos />} />
//     ),
//   },
//   {
//     path: "/comerciante/lojas",
//     element: (
//       <PrivateRoute usuario="comerciante" element={<GerenciamentoLoja />} />
//     ),
//   },
//   {
//     path: "/comerciante/vendas",
//     element: (
//       <PrivateRoute usuario="comerciante" element={<HistoricoVendas />} />
//     ),
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },

//   {
//     path: "/index",
//     element:<TelaPesquisa />,
//   },

//   {
//     path: "/TelaProduto/:id",
//     element: <TelaProduto />
//   },
//   {
//     path: "/usuarios/dados",
//     element: <DadosUsuario />
//   },
//   {
//     path: "/comerciante/dados",
//     element: <DadosComerciante />
//   },
//   {
//     path: "/compra",
//     element: <Compra/>
//   },
//   {
//     path: "/pesquisa",
//     element: <TelaPesquisa />,
//   },
//   {
//     path: "/comerciante/pedidos",
//     element: (
//       <PrivateRoute usuario="comerciante" element={<PedidosComerciante />} />
//     ),

//   },
//   {
//     path: "/usuario/pedidos",
//     element: <PrivateRoute usuario="consumidor" element={<PedidosUsuario />} />,
//   },
//   {
//     path: "/mapa",
//     element: <MapaInterativo />,
//   },
//   {
//     path: "/cadastro/usuario",
//     element: <CadastroUsuario />,
//   },
//   {
//     path: "/switch",
//     element: <SwitchCadastro/>,
//   }
// ]);
