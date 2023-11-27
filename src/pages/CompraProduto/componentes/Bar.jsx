import React from 'react';

function Bar({ onButtonClick }) {
  return (
    <div className="bar">
      <button onClick={onButtonClick}>Abrir Overlay</button>
    </div>
  );
}

export default Bar;
