import ContentNavbar from "./componentes/ContentNavbar";
import MenuNavbar from "./componentes/MenuNavbar";
import ItemNavbar from "./componentes/ItemNavbar";
import SignNavbar from "./componentes/SignNavbar";
import LogoNavbar from "./componentes/LogoNavbar";
import ContentTopNavbar from "./componentes/ContentTopNavbar";
import PesquisaNavbar from "./componentes/PesquisaNavbar.jsx";
import AuthenticatedNavbar from "./componentes/AuthenticatedNavbar";

const NavbarRoot = {
  Content: ContentNavbar,
  Menu: MenuNavbar,
  Item: ItemNavbar,
  Sign: SignNavbar,
  Logo: LogoNavbar,
  ContentTop: ContentTopNavbar,
  Pesquisa: PesquisaNavbar,
  Authenticated: AuthenticatedNavbar,
};

export default NavbarRoot;
