import React from 'react';

const Overlay = ({ visible, text, onClose }) => {
  return visible ? (
    <div className="overlay">
      <div className="overlay-content">
        <p>{text}</p>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  ) : null;
};

export default Overlay;
