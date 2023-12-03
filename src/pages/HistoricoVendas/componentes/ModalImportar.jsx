import React from 'react';
import { Modal, Button } from '@mui/material';

const ModalImportar = ({ open, onClose, onConfirm }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="bg-white p-4 rounded-md">
        <p>Deseja importar esse histórico de vendas?</p>
        <div className="flex justify-end mt-4">
          <Button className="mr-2" onClick={onClose}>
            Não
          </Button>
          <Button variant="contained" color="primary" onClick={onConfirm}>
            Sim
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalImportar;
