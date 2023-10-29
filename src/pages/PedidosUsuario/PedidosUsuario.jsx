import React from "react";
import NavbarRoot from "../../componentes/Navbar/NavbarRoot";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import InputRoot from "../../componentes/Input/InputRoot";
import CardLojaRoot from "../../componentes/CardLoja/CardLojaRoot";
import Button from "../../componentes/Button/Button";

const PedidosUsuario = () => {
  return (
    <>
      <NavbarRoot.Content>
        <NavbarRoot.Menu>
          <NavbarRoot.Item></NavbarRoot.Item>
        </NavbarRoot.Menu>
      </NavbarRoot.Content>
      <div>
        <div className="w-11/12 mx-auto  flex flex-col gap-y-8 ">
          <div className="flex justify-between items-center mt-16">
            <div className="flex flex-col h-max gap-y-2  ">
              <h2 className="text-2xl">Pedidos</h2>
              <div className="flex items-center">
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  className="flex gap-x-4"
                >
                  <FormControlLabel
                    value="pendente"
                    control={
                      <Radio
                        sx={{
                          color: "orange",
                          "&.Mui-checked": {
                            color: "orange",
                          },
                        }}
                      />
                    }
                    label="Pendentes"
                  />
                  <FormControlLabel
                    value="aprovados"
                    control={
                      <Radio
                        sx={{
                          color: "orange",
                          "&.Mui-checked": {
                            color: "orange",
                          },
                        }}
                      />
                    }
                    label="Aprovados"
                  />
                  <FormControlLabel
                    value="Todos"
                    control={
                      <Radio
                        sx={{
                          color: "orange",
                          "&.Mui-checked": {
                            color: "orange",
                          },
                        }}
                      />
                    }
                    label="Todos"
                  />
                  <FormControlLabel
                    value="reprovado"
                    control={
                      <Radio
                        sx={{
                          color: "orange",
                          "&.Mui-checked": {
                            color: "orange",
                          },
                        }}
                      />
                    }
                    label="Reprovados"
                  />
                </RadioGroup>
              </div>
            </div>

            <div className="flex h-max  w-1/3  ">
              <InputRoot.Input className={"h-9"}>
                <InputRoot.Icon><img src="/src/assets/search.svg" /></InputRoot.Icon>
              </InputRoot.Input>
            </div>
          </div>

          <div className="w-full flex  flex-wrap gap-y-8 gap-x-10">
            <CardLojaRoot.Content className={"flex-shrink-0"}>
              <CardLojaRoot.Header>
                <div className="flex gap-x-2">
                  <img src="/src/assets/down.svg" alt="" className="w-6 " />
                  <div>
                    <h2 className="text-xs font-semibold">Montech</h2>
                    <p className="text-xs">Rua Visconde de Inhaúma, N° 431</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2 ">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <h3 className=" text-xs">Pendente</h3>
                </div>
              </CardLojaRoot.Header>

              <CardLojaRoot.ContentInfo>
                <div className="flex flex-col gap-y-1">
                  <CardLojaRoot.Row
                    label={"Data do pedido"}
                    texto={"20/08/2023 - 13:59"}
                  />
                  <CardLojaRoot.Row
                    label={"Modo de compra"}
                    texto={"Pagamento na loja"}
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <CardLojaRoot.Row
                    label={"Método de compra"}
                    texto={"Cartão de débito"}
                  />
                </div>
              </CardLojaRoot.ContentInfo>
              <CardLojaRoot.Footer>
                <div className="flex justify-between items-center w-full">
                  <span className="text-xs">Preço total: R$12,00</span>
                  <Button className=" text-white-principal text-xs">
                    Ver itens da compra
                  </Button>
                </div>
              </CardLojaRoot.Footer>
            </CardLojaRoot.Content>


            <CardLojaRoot.Content className={"flex-shrink-0"}>
              <CardLojaRoot.Header>
                <div className="flex gap-x-2">
                  <img src="/src/assets/down.svg" alt="" className="w-6 " />
                  <div>
                    <h2 className="text-xs font-semibold">Montech</h2>
                    <p className="text-xs">Rua Visconde de Inhaúma, N° 431</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2 ">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <h3 className=" text-xs">Pendente</h3>
                </div>
              </CardLojaRoot.Header>

              <CardLojaRoot.ContentInfo>
                <div className="flex flex-col gap-y-1">
                  <CardLojaRoot.Row
                    label={"Data do pedido"}
                    texto={"20/08/2023 - 13:59"}
                  />
                  <CardLojaRoot.Row
                    label={"Modo de compra"}
                    texto={"Pagamento na loja"}
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <CardLojaRoot.Row
                    label={"Método de compra"}
                    texto={"Cartão de débito"}
                  />
                </div>
              </CardLojaRoot.ContentInfo>
              <CardLojaRoot.Footer>
                <div className="flex justify-between items-center w-full">
                  <span className="text-xs">Preço total: R$12,00</span>
                  <Button className=" text-white-principal text-xs">
                    Ver itens da compra
                  </Button>
                </div>
              </CardLojaRoot.Footer>
            </CardLojaRoot.Content>


            <CardLojaRoot.Content className={"flex-shrink-0"}>
              <CardLojaRoot.Header>
                <div className="flex gap-x-2">
                  <img src="/src/assets/down.svg" alt="" className="w-6 " />
                  <div>
                    <h2 className="text-xs font-semibold">Montech</h2>
                    <p className="text-xs">Rua Visconde de Inhaúma, N° 431</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2 ">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <h3 className=" text-xs">Pendente</h3>
                </div>
              </CardLojaRoot.Header>

              <CardLojaRoot.ContentInfo>
                <div className="flex flex-col gap-y-1">
                  <CardLojaRoot.Row
                    label={"Data do pedido"}
                    texto={"20/08/2023 - 13:59"}
                  />
                  <CardLojaRoot.Row
                    label={"Modo de compra"}
                    texto={"Pagamento na loja"}
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <CardLojaRoot.Row
                    label={"Método de compra"}
                    texto={"Cartão de débito"}
                  />
                </div>
              </CardLojaRoot.ContentInfo>
              <CardLojaRoot.Footer>
                <div className="flex justify-between items-center w-full">
                  <span className="text-xs">Preço total: R$12,00</span>
                  <Button className=" text-white-principal text-xs">
                    Ver itens da compra
                  </Button>
                </div>
              </CardLojaRoot.Footer>
            </CardLojaRoot.Content>

            <CardLojaRoot.Content className={"flex-shrink-0"}>
              <CardLojaRoot.Header>
                <div className="flex gap-x-2">
                  <img src="/src/assets/down.svg" alt="" className="w-6 " />
                  <div>
                    <h2 className="text-xs font-semibold">Montech</h2>
                    <p className="text-xs">Rua Visconde de Inhaúma, N° 431</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2 ">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <h3 className=" text-xs">Pendente</h3>
                </div>
              </CardLojaRoot.Header>

              <CardLojaRoot.ContentInfo>
                <div className="flex flex-col gap-y-1">
                  <CardLojaRoot.Row
                    label={"Data do pedido"}
                    texto={"20/08/2023 - 13:59"}
                  />
                  <CardLojaRoot.Row
                    label={"Modo de compra"}
                    texto={"Pagamento na loja"}
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <CardLojaRoot.Row
                    label={"Método de compra"}
                    texto={"Cartão de débito"}
                  />
                </div>
              </CardLojaRoot.ContentInfo>
              <CardLojaRoot.Footer>
                <div className="flex justify-between items-center w-full">
                  <span className="text-xs">Preço total: R$12,00</span>
                  <Button className=" text-white-principal text-xs">
                    Ver itens da compra
                  </Button>
                </div>
              </CardLojaRoot.Footer>
            </CardLojaRoot.Content>

            <CardLojaRoot.Content className={"flex-shrink-0"}>
              <CardLojaRoot.Header>
                <div className="flex gap-x-2">
                  <img src="/src/assets/down.svg" alt="" className="w-6 " />
                  <div>
                    <h2 className="text-xs font-semibold">Montech</h2>
                    <p className="text-xs">Rua Visconde de Inhaúma, N° 431</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2 ">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <h3 className=" text-xs">Pendente</h3>
                </div>
              </CardLojaRoot.Header>

              <CardLojaRoot.ContentInfo>
                <div className="flex flex-col gap-y-1">
                  <CardLojaRoot.Row
                    label={"Data do pedido"}
                    texto={"20/08/2023 - 13:59"}
                  />
                  <CardLojaRoot.Row
                    label={"Modo de compra"}
                    texto={"Pagamento na loja"}
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <CardLojaRoot.Row
                    label={"Método de compra"}
                    texto={"Cartão de débito"}
                  />
                </div>
              </CardLojaRoot.ContentInfo>
              <CardLojaRoot.Footer>
                <div className="flex justify-between items-center w-full">
                  <span className="text-xs">Preço total: R$12,00</span>
                  <Button className=" text-white-principal text-xs">
                    Ver itens da compra
                  </Button>
                </div>
              </CardLojaRoot.Footer>
            </CardLojaRoot.Content>



            <CardLojaRoot.Content className={"flex-shrink-0"}>
              <CardLojaRoot.Header>
                <div className="flex gap-x-2">
                  <img src="/src/assets/down.svg" alt="" className="w-6 " />
                  <div>
                    <h2 className="text-xs font-semibold">Montech</h2>
                    <p className="text-xs">Rua Visconde de Inhaúma, N° 431</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2 ">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <h3 className=" text-xs">Pendente</h3>
                </div>
              </CardLojaRoot.Header>

              <CardLojaRoot.ContentInfo>
                <div className="flex flex-col gap-y-1">
                  <CardLojaRoot.Row
                    label={"Data do pedido"}
                    texto={"20/08/2023 - 13:59"}
                  />
                  <CardLojaRoot.Row
                    label={"Modo de compra"}
                    texto={"Pagamento na loja"}
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <CardLojaRoot.Row
                    label={"Método de compra"}
                    texto={"Cartão de débito"}
                  />
                </div>
              </CardLojaRoot.ContentInfo>
              <CardLojaRoot.Footer>
                <div className="flex justify-between items-center w-full">
                  <span className="text-xs">Preço total: R$12,00</span>
                  <Button className=" text-white-principal text-xs">
                    Ver itens da compra
                  </Button>
                </div>
              </CardLojaRoot.Footer>
            </CardLojaRoot.Content>


            <CardLojaRoot.Content className={"flex-shrink-0"}>
              <CardLojaRoot.Header>
                <div className="flex gap-x-2">
                  <img src="/src/assets/down.svg" alt="" className="w-6 " />
                  <div>
                    <h2 className="text-xs font-semibold">Montech</h2>
                    <p className="text-xs">Rua Visconde de Inhaúma, N° 431</p>
                  </div>
                </div>
                <div className="flex items-center gap-x-2 ">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <h3 className=" text-xs">Pendente</h3>
                </div>
              </CardLojaRoot.Header>

              <CardLojaRoot.ContentInfo>
                <div className="flex flex-col gap-y-1">
                  <CardLojaRoot.Row
                    label={"Data do pedido"}
                    texto={"20/08/2023 - 13:59"}
                  />
                  <CardLojaRoot.Row
                    label={"Modo de compra"}
                    texto={"Pagamento na loja"}
                  />
                </div>
                <div className="flex flex-col gap-y-1">
                  <CardLojaRoot.Row
                    label={"Método de compra"}
                    texto={"Cartão de débito"}
                  />
                </div>
              </CardLojaRoot.ContentInfo>
              <CardLojaRoot.Footer>
                <div className="flex justify-between items-center w-full">
                  <span className="text-xs">Preço total: R$12,00</span>
                  <Button className=" text-white-principal text-xs">
                    Ver itens da compra
                  </Button>
                </div>
              </CardLojaRoot.Footer>
            </CardLojaRoot.Content>


          </div>
        </div>
      </div>
    </>
  );
};

export default PedidosUsuario;
