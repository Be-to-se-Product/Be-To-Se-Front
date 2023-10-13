import {createBrowserRouter} from "react-router-dom";
import Insitucional from "../pages/Institucional/Institucional";
import GerenciamentoProdutos from "../pages/GerenciamentoProdutos/GerenciamentoProdutos";
import GerenciamentoLoja from "../pages/GerencimentoLojas/GerenciamentoLoja";
  
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
      path: "*",
      element: <><h2>Teste</h2></>
    }
    
  ]);

  export default router;