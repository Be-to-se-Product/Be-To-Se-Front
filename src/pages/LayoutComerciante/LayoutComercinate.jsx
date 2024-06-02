import MenuComerciante from "@componentes/MenuComerciante/MenuComerciante.jsx";
import { NavLink, Outlet, useParams } from "react-router-dom";
import IconProduct from "@assets/icon-product.svg";
import IconShop from "@assets/icon-shop.svg";
import IconVenda from "@assets/icon-venda.svg";
import IconPedido from "@assets/icon-pedido.svg";

const LayoutComercinate = () => {
  const { idEstabelecimento } = useParams();
  const options = [
    {
      router: `/comerciante/lojas`,
      icon: IconShop,
      text: "Gerenciar Lojas",
    },
    {
      router: `/comerciante/lojas/${idEstabelecimento}/produtos`,
      icon: IconProduct,
      text: "Gerenciar Produtos",
    },

    {
      router: `/comerciante/lojas/${idEstabelecimento}/vendas`,
      icon: IconVenda,
      text: "Histórico de Vendas",
    },
    {
      router: `/comerciante/lojas/${idEstabelecimento}/pedidos`,
      icon: IconPedido,
      text: "Pedidos",
    },
  ];

  return (
    <main className="flex bg-background">
      <MenuComerciante isLogo>
        {options.map(({ icon, router, text }) => (
          <NavLink key={router} to={router} end>
            {({ isActive }) => (
              <li
                className={`text-lg flex gap-x-4 mb-5 items-center font-medium ${
                  isActive ? "text-orange-menu" : " text-white-principal "
                }`}
              >
                <img src={icon} alt="" />
                {text}
              </li>
            )}
          </NavLink>
        ))}
      </MenuComerciante>
      <Outlet />
    </main>
  );
};

export default LayoutComercinate;
