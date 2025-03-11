import React from 'react';
import diagramaImg from './diagrama.jpg'; // Importe sua imagem

const estados = [
  { nome: 'Inicio', id: 'inicio', top: '382px', left: '61px'},
  { nome: 'Ver saldo', id: 'saldo', top: '257px', left: '383px'},
  { nome: 'Consultar extrato', id: 'extrato', top: '497px', left: '383px'},
  { nome: 'Fazer transferência', id: 'transferencia', top: '738px', left: '383px'},
  { nome: 'Falar com atendente', id: 'transferirParaHumano', top: '15px', left: '383px'},
  { nome: 'Finalizar Chat', id: 'finalizado', top: '383px', left: '705px'},
];

const Diagrama = ({ estadoAtual }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundImage: `url(${diagramaImg})`, // Define a imagem como fundo de todo o contêiner
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '853px', // Ajuste o tamanho do contêiner
        width: '100%',
        borderRadius: '10px',
        paddingTop: '20px',
        position: 'relative', // Usar posição relativa para os círculos flutuarem dentro do contêiner
      }}
    >
      {estados.map((estado) => (
        <div
          key={estado.id}
          style={{
            position: 'absolute', // Tornar os círculos posicionáveis
            top: estado.top, // Posiciona o círculo no topo conforme especificado
            left: estado.left, // Posiciona o círculo na esquerda conforme especificado
            width: '80px', 
            height: '80px',
            borderRadius: '50%',
            backgroundColor: estadoAtual === estado.id ? '#28A745' : '#F2F2F2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
            fontWeight: 'bold',
            margin: '10px',
            textAlign: 'center',
            fontSize: '12px',
          }}
        >
          {estado.nome}
        </div>
      ))}
    </div>
  );
};

export default Diagrama;
