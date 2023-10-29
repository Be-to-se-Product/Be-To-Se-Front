import React, { useState } from "react";
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
import CardPedidoComerciante from "./componentes/CardPedidoComerciante";
import ModalPedidos from "../HistoricoVendas/componentes/ModalPedidos";


const pedidos = [
    {
        "nome": "009",
        "tempo": "1h 15min",
        "status": "concluído",
        "cpf": "222.333.444-55",
        "metodoPagamento": "Transferência bancária",
        "valorTotal": "80.75",
        "modoCompra": "Presencial"
    },
    {
        "nome": "010",
        "tempo": "2h 45min",
        "status": "pendente",
        "cpf": "888.555.666-77",
        "metodoPagamento": "Cartão de crédito",
        "valorTotal": "180.25",
        "modoCompra": "Online"
    },
    {
        "nome": "011",
        "tempo": "3h 30min",
        "status": "preparação",
        "cpf": "333.999.777-00",
        "metodoPagamento": "Dinheiro",
        "valorTotal": "300.50",
        "modoCompra": "Presencial"
    },
    {
        "nome": "012",
        "tempo": "1h 30min",
        "status": "concluído",
        "cpf": "666.444.222-11",
        "metodoPagamento": "Boleto bancário",
        "valorTotal": "90.10",
        "modoCompra": "Online"
    },
    {
        "nome": "013",
        "tempo": "2h",
        "status": "pendente",
        "cpf": "555.777.999-00",
        "metodoPagamento": "Pix",
        "valorTotal": "200.75",
        "modoCompra": "Presencial"
    },
    {
        "nome": "014",
        "tempo": "1h 45min",
        "status": "preparação",
        "cpf": "111.888.555-66",
        "metodoPagamento": "Cartão de débito",
        "valorTotal": "150.20",
        "modoCompra": "Online"
    },
    {
        "nome": "015",
        "tempo": "2h 15min",
        "status": "concluído",
        "cpf": "777.666.555-44",
        "metodoPagamento": "Transferência bancária",
        "valorTotal": "170.90",
        "modoCompra": "Presencial"
    },
    {
        "nome": "016",
        "tempo": "1h 30min",
        "status": "pendente",
        "cpf": "444.999.888-77",
        "metodoPagamento": "Boleto bancário",
        "valorTotal": "120.50",
        "modoCompra": "Online"
    },
    {
        "nome": "017",
        "tempo": "2h 30min",
        "status": "preparação",
        "cpf": "222.444.666-88",
        "metodoPagamento": "Pix",
        "valorTotal": "250.00",
        "modoCompra": "Presencial"
    },
    {
        "nome": "018",
        "tempo": "1h 15min",
        "status": "concluído",
        "cpf": "888.777.999-00",
        "metodoPagamento": "Cartão de crédito",
        "valorTotal": "80.75",
        "modoCompra": "Online"
    },
    {
        "nome": "019",
        "tempo": "2h 45min",
        "status": "pendente",
        "cpf": "333.555.777-00",
        "metodoPagamento": "Dinheiro",
        "valorTotal": "180.25",
        "modoCompra": "Presencial"
    },
    {
        "nome": "020",
        "tempo": "3h 30min",
        "status": "preparação",
        "cpf": "666.888.999-00",
        "metodoPagamento": "Transferência bancária",
        "valorTotal": "300.50",
        "modoCompra": "Online"
    },
    {
        "nome": "021",
        "tempo": "1h 30min",
        "status": "concluído",
        "cpf": "111.444.777-00",
        "metodoPagamento": "Boleto bancário",
        "valorTotal": "90.10",
        "modoCompra": "Presencial"
    },
    {
        "nome": "022",
        "tempo": "2h",
        "status": "pendente",
        "cpf": "555.666.999-00",
        "metodoPagamento": "Pix",
        "valorTotal": "200.75",
        "modoCompra": "Online"
    },
    {
        "nome": "023",
        "tempo": "1h 45min",
        "status": "preparação",
        "cpf": "888.444.222-11",
        "metodoPagamento": "Cartão de débito",
        "valorTotal": "150.20",
        "modoCompra": "Presencial"
    },
    {
        "nome": "024",
        "tempo": "2h 15min",
        "status": "concluído",
        "cpf": "777.555.666-44",
        "metodoPagamento": "Boleto bancário",
        "valorTotal": "170.90",
        "modoCompra": "Online"
    },
    {
        "nome": "025",
        "tempo": "1h 30min",
        "status": "pendente",
        "cpf": "444.666.999-88",
        "metodoPagamento": "Pix",
        "valorTotal": "120.50",
        "modoCompra": "Presencial"
    },
    {
        "nome": "026",
        "tempo": "2h 30min",
        "status": "preparação",
        "cpf": "222.888.777-00",
        "metodoPagamento": "Cartão de crédito",
        "valorTotal": "250.00",
        "modoCompra": "Online"
    },
    {
        "nome": "027",
        "tempo": "1h 15min",
        "status": "concluído",
        "cpf": "777.999.555-66",
        "metodoPagamento": "Dinheiro",
        "valorTotal": "80.75",
        "modoCompra": "Presencial"
    }
]

const PedidosComerciante = () => {

  const [modal, setModal] = useState({
    isAtivo: false,
    pedido: {},
  });
  return (
    <main className="w-full h-screen flex bg-background">
      <MenuComerciante />

      <BoxComerciante className="flex flex-col pt-10 gap-y-10 " >
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

        <div className=" flex flex-col overflow-auto gap-y-6">

            {pedidos.map((pedido) => (
                <CardPedidoComerciante pedido={pedido} key={`${pedido.nome}`} onClick={
                  ()=>setModal(prev=>{
                    const el = {...prev};

                    el.isAtivo = !el.isAtivo;
                    el.pedido = pedido;
                    return el;
                })
              } />
            ))}
                
        </div>
      </BoxComerciante>


      <ModalPedidos  modal={modal} setModal={setModal} />
    </main>
    
  );
};

export default PedidosComerciante;
