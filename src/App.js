// src/App.js
import React, { useState } from 'react';
import ChatBot from './ChatBot';
import Diagrama from './Diagrama';

function App() {
  const [estadoAtual, setEstadoAtual] = useState('inicio'); // Estado inicial

  const handleEstadoChange = (novoEstado) => {
    setEstadoAtual(novoEstado);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: '20px' }}>
      <div style={{ width: '45%' }}>
        <ChatBot onChangeEstado={handleEstadoChange} />
      </div>
      <div style={{ width: '45%' }}>
        <Diagrama estadoAtual={estadoAtual} />
      </div>
    </div>
  );
}

export default App;
