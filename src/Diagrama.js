// src/Diagrama.js
import React from 'react';

const estados = [
  { nome: 'Inicio', id: 'inicio' },
  { nome: 'Ver saldo', id: 'saldo' },
  { nome: 'Consultar extrato', id: 'extrato' },
  { nome: 'Fazer transferência', id: 'transferencia' },
  { nome: 'Transferir para um humano', id: 'transferirParaHumano' },
  { nome: 'Finalizar Chat', id: 'finalizado' },
];

const Diagrama = ({ estadoAtual }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      {estados.map((estado) => (
        <div
          key={estado.id}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: estadoAtual === estado.id ? 'green' : 'gray',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontWeight: 'bold',
            margin: '10px',
            textAlign: 'center',
            fontSize: '12px'
          }}
        >
          {estado.nome}
        </div>
      ))}
    </div>
  );
};

export default Diagrama;
