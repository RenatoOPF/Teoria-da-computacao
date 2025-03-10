import React, { useState } from 'react';

function ChatBot({ onChangeEstado }) {
  const [conversa, setConversa] = useState([
    { origem: 'bot', mensagem: 'Olá! Como posso te ajudar hoje?' },
  ]);
  const [opcoes, setOpcoes] = useState([
    'Como faço para ver o saldo da conta?',
    'Como acessar o extrato?',
    'Como fazer uma transferência?',
    'Falar com um atendente',
    'Finalizar Chat'
  ]);

  const perguntasERespostas = {
    saldo: {
      resposta: 'Para ver seu saldo, acesse a tela principal do aplicativo e consulte a área de "saldo" na parte central da tela.',
      opcoes: ['Voltar', 'Falar com um atendente', 'Finalizar Chat']
    },
    extrato: {
      resposta: 'Seu extrato pode ser consultado na área de "Extratos" no canto superior da tela principal do aplicativo.',
      opcoes: ['Voltar', 'Falar com um atendente', 'Finalizar Chat']
    },
    transferencia: {
      resposta: 'Para fazer uma transferência, na tela principal do aplicativo, acesse a opção "Transferências" na parte superior da tela.',
      opcoes: ['Voltar', 'Falar com um atendente', 'Finalizar Chat']
    },
    transferirParaHumano: {
      resposta: 'Estamos transferindo seu atendimento para um atendente humano. Por favor, aguarde.',
      opcoes: ['Finalizar Chat']
    },
    finalizar: {
      resposta: 'O chat foi finalizado. Se precisar de mais ajuda, basta iniciar um novo chat.',
      opcoes: []
    }
  };

  const handleClick = (opcao) => {
    const novaConversa = [...conversa, { origem: 'usuario', mensagem: opcao }];
    
    if (opcao === 'Finalizar Chat') {
      novaConversa.push({ origem: 'bot', mensagem: perguntasERespostas.finalizar.resposta });
      setConversa(novaConversa);
      setOpcoes([]);
      onChangeEstado('finalizado');
      return;
    }

    if (opcao === 'Voltar') {
      // Retorna ao estado inicial se o usuário clicar em "Voltar"
      setConversa([
        { origem: 'bot', mensagem: 'Olá! Como posso te ajudar hoje?' }
      ]);
      setOpcoes([
        'Como faço para ver o saldo da conta?',
        'Como acessar o extrato?',
        'Como fazer uma transferência?',
        'Falar com um atendente',
        'Finalizar Chat'
      ]);
      onChangeEstado('inicio');
      return;
    }

    // Atualiza a conversa com base na opção escolhida
    if (opcao === 'Como faço para ver o saldo da conta?') {
      novaConversa.push({ origem: 'bot', mensagem: perguntasERespostas.saldo.resposta });
      setConversa(novaConversa);
      setOpcoes(perguntasERespostas.saldo.opcoes);
      onChangeEstado('saldo');
    } else if (opcao === 'Como acessar o extrato?') {
      novaConversa.push({ origem: 'bot', mensagem: perguntasERespostas.extrato.resposta });
      setConversa(novaConversa);
      setOpcoes(perguntasERespostas.extrato.opcoes);
      onChangeEstado('extrato');
    } else if (opcao === 'Como fazer uma transferência?') {
      novaConversa.push({ origem: 'bot', mensagem: perguntasERespostas.transferencia.resposta });
      setConversa(novaConversa);
      setOpcoes(perguntasERespostas.transferencia.opcoes);
      onChangeEstado('transferencia');
    } else if (opcao === 'Falar com um atendente') {
      novaConversa.push({ origem: 'bot', mensagem: perguntasERespostas.transferirParaHumano.resposta });
      setConversa(novaConversa);
      setOpcoes(perguntasERespostas.transferirParaHumano.opcoes);
      onChangeEstado('transferirParaHumano');
    }
  };

  return (
    <div>
      <div style={{ maxHeight: '400px', overflowY: 'scroll', marginBottom: '20px', padding: '10px', border: '1px solid black', height: '400px' }}>
        {conversa.map((msg, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <strong>{msg.origem === 'bot' ? 'Bot:' : 'Você:'} </strong>
            {msg.mensagem}
          </div>
        ))}
        {/* Exibe as opções de resposta dentro da caixa de chat */}
        {opcoes.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '10px' }}>
            {opcoes.map((opcao, index) => (
              <button
                key={index}
                onClick={() => handleClick(opcao)}
                style={{
                  margin: '5px',
                  padding: '10px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left', // Ajustando alinhamento do texto do botão
                }}
              >
                {opcao}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ChatBot;
