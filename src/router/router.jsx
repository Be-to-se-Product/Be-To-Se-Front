import {createBrowserRouter} from "react-router-dom";
import Insitucional from "../pages/Institucional/Institucional";
import GerenciamentoProdutos from "../pages/GerenciamentoProdutos/GerenciamentoProdutos";
import TelaInicial from "../pages/TelaInicial/TelaInicial";
  
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
      path: "*",
      element: <><h2>Teste</h2></>
    },

    {
      path: "/TelaInicial",
      element: <TelaInicial />
    }
    
  ]);

  export default router;