import { BrowserRouter, Route, Routes } from "react-router-dom";

import LayoutComercinate from "@/pages/LayoutComerciante/LayoutComercinate.jsx";
import Insitucional from "@/pages/Institucional/Institucional.jsx";
import TelaInicial from "@/pages/TelaInicial/TelaInicial.jsx";
import CadastroComerciante from "@/pages/CadastroComerciante/CadastroComerciante.jsx";
import GerenciamentoLoja from "@/pages/GerencimentoLojas/GerenciamentoLoja.jsx";
import GerenciamentoProdutos from "@/pages/GerenciamentoProdutos/GerenciamentoProdutos.jsx";
import HistoricoVendas from "@/pages/HistoricoVendas/HistoricoVendas.jsx";
import PedidosComerciante from "@/pages/PedidosComerciante/PedidosComerciante.jsx";
import TelaPesquisa from "@/pages/TelaPesquisa/TelaPesquisa.jsx";
import TelaProduto from "@/pages/TelaProduto/TelaProduto.jsx";
import DadosUsuario from "@/pages/DadosUsuario/DadosUsuario.jsx";
import DadosComerciante from "@/pages/DadosComerciante/DadosComerciante.jsx";
import Compra from "@/pages/Compra/Compra.jsx";
import PedidosUsuario from "@/pages/PedidosUsuario/PedidosUsuario.jsx";
import MapaInterativo from "@/pages/MapaInterativo/MapaInterativo.jsx";
import CadastroUsuario from "@/pages/CadastroUsuario/CadastroUsuario.jsx";
import SwitchCadastro from "@/pages/SwitchCadastro/SwitchCadastro.jsx";
import NotFound from "@/pages/NotFound/NotFound.jsx";
import Login from "@/pages/Login/Login.jsx";
import { isPermited } from "../utils/Autheticated";
import MapaInterativoMobile from "@/pages/MapaInterativo/MapaInterativoMobile.jsx";

const PrivateRoute = ({ element, usuario, ...rest }) => {
  if (!isPermited(usuario)) {
    return <NotFound />;
  }
  return element;
};

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
        <Route path="/pesquisa" element={<TelaPesquisa />} />
        <Route path="/produto/:id" element={<TelaProduto />} />
        <Route path="/usuarios/dados" element={<DadosUsuario />} />
        <Route path="/comerciante/dados" element={<DadosComerciante />} />
        <Route path="/compra" element={<Compra />} />
        <Route path="/usuario/pedidos" element={<PedidosUsuario />} />
        <Route path="/mapa" element={<MapaInterativo />} />
        <Route path="/cadastro/usuario" element={<CadastroUsuario />} />
        <Route path="/switch" element={<SwitchCadastro />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mapa/mobile" element={<MapaInterativoMobile/>} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

