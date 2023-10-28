import React from "react";
import MenuComerciante from "../../componentes/MenuComerciante/MenuComerciante";
import BoxComerciante from "../../componentes/BoxComerciante/BoxComerciante";
import {
  FormControlLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import Button from "../../componentes/Button/Button";

const PedidosComerciante = () => {
  return (
    <main className="w-full h-screen flex">
      <MenuComerciante />

      <BoxComerciante className="flex flex-col pt-10 justify-around">
        <div className="w-full text-center flex flex-col     font-semibold mb-0 gap-y-4">
          <h2>Pedidos</h2>

          <div className="flex items-center justify-center">
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
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
                value="male"
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
                value="other"
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
            </RadioGroup>
          </div>
        </div>

        <div>
          <div className="border">
            <div className="flex justify-between border-b border-gray-200 px-8 py-4  items-center">
              <h3 className="text-base">Pedido - Há um minuto</h3>
              <div>
                <Select className="h-10" >
                  <MenuItem value={"Camiseta"}>Roupas</MenuItem>
                  <MenuItem value={"Plastico"}>Eletronicos</MenuItem>
                  <MenuItem value={"Roupa"}>Utensilhos</MenuItem>
                </Select>
              </div>
            </div>

            <div className="flex text-base justify-between px-8 py-4">
              <div className="flex flex-col gap-y-4">
                <span>CPF DO COMPRADOR: 123.132.131-65</span>
                <span>Método de pagamento</span>
                <span>Valor Total: R$ 12,00</span>
              </div>
              <div className="flex flex-col justify-between items-end">
                Modo de compra: Pagamento no site
                <Button className="h-max w-max">Itens do pedido</Button>
              </div>
            </div>
          </div>
        </div>
      </BoxComerciante>
    </main>
  );
};

export default PedidosComerciante;
