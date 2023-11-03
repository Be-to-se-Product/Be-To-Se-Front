import { MenuItem, Select } from '@mui/material';
import PropTypes from 'prop-types';
import Button from '../../../componentes/Button/Button';
import moment from 'moment';

const CardPedidoComerciante = ({pedido,...props}) => {
  
  return (
    <div className="border rounded-lg bg-white-principal shadow-lg">
      <div className="flex justify-between border-b border-gray-200 px-8 py-4  items-center">
        <h3 className="text-base">Pedido {pedido.id} - {moment(pedido.data,"YYYY-MM-DDHH:mm:ss").format("DD/MM/YYYY - HH:mm")}</h3>
        <div>
          <Select
            className="h-10"
            id="demo-simple-select"
            defaultValue={pedido.status}
            name="status"
            
          >
            <MenuItem value={"PENDENTE"}>Pendente</MenuItem>
            <MenuItem value={"ENTREGUE"}>Entregue</MenuItem>
            <MenuItem value={"AGUARDANDO_RETIRADA"}>Agurdando Retirada</MenuItem>
            <MenuItem value={"PREPARO"}>Em Preparo</MenuItem>
            <MenuItem value={"CANCELADO"}>Cancelar</MenuItem>


          </Select>
        </div>
      </div>
      <div className="flex text-base justify-between px-8 py-4">
        <div className="flex flex-col gap-y-2 ">
          <span>CPF do comprador: {pedido.cpf}</span>
          <span>Método de pagamento: {pedido.metodoPagamento}</span>
          <span>Valor Total: R${pedido.itens.reduce((accumulator,element)=> accumulator + element.valor,0)}</span>
        </div>
        <div className="flex flex-col justify-between items-end">
          Modo de compra: {pedido?.tipoPagamento}
          <Button className="h-max w-max " {...props}>Itens do pedido</Button>
        </div>
      </div>

    </div>
  );
};

CardPedidoComerciante.propTypes = {
  pedido: PropTypes.shape({
    itens: PropTypes.arrayOf(PropTypes.shape({
      valor: PropTypes.number.isRequired,
    })).isRequired,
    cpf: PropTypes.string.isRequired,
    metodoPagamento: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    data: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    modoCompra: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardPedidoComerciante;
