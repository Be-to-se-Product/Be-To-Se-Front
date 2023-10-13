import {createBrowserRouter} from "react-router-dom";
import Insitucional from "../pages/Institucional/Institucional";
import GerenciamentoProdutos from "../pages/GerenciamentoProdutos/GerenciamentoProdutos";
import GerencimentoLoja from "../pages/GerencimentoLojas/GerencimentoLoja";
  
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
      element:<GerencimentoLoja/>
    },

 
    {
      path: "*",
      element: <><h2>Teste</h2></>
    }
    
  ]);

  export default router;