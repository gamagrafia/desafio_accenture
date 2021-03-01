import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { Container, Forms } from './style';

const Transferencia: React.FC = () => {
  const [conta, setConta] = useState("");
  const [contaDestino, setContaDestino] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [login, setLogin] = useState("");
  const [planoConta, setPlanoconta] = useState("");
  const [valor, setValor] = useState("");

  function postPlanoConta(event: FormEvent<HTMLFormElement>) {}

  function handleTransferencia(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ;

    
    data.split('/').reverse().join('-')

    const transferenciaData = {
      conta,
      contaDestino,
      data,
      descricao,
      login,
      planoConta,
      valor,
    };

    try {
      api
        .post("/lancamentos", transferenciaData, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("@tokenApp"),
          },
        })
        .then((response) => {
          toast.success("Transferencia realizada com Sucesso")
        })
        .catch((e) => {
          toast.error("Ops, algo deu errado!")
        });
    } catch (e) {
      
    }
  }

  return (
    <>
      
      <Container>
      <h1>Faça sua Transferencia</h1> 

        <Forms onSubmit={handleTransferencia}>
          <input
            type="text"
            placeholder="Digite o ID da conta que você quer enviar o dinheiro"
            value={conta}
            onChange={(e) => setConta(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Digite o ID da conta para qual você quer transferir o dinheiro?"
            value={contaDestino}
            onChange={(e) => setContaDestino(e.target.value)}
            required
          />
          <input
            type="text"
            value={data}
            placeholder="Digite a Data do depósito"
            onChange={(e) => setData(e.target.value)}
            required
          />
          <textarea
            placeholder="Descrição do Depósito"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
          <input
            type="text"
            id="login"
            placeholder="Qual seu usuário?"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
          <input
            type="number"
            id="planoConta"
            placeholder="Qual seu plano de conta?"
            value={planoConta}
            onChange={(e) => setPlanoconta(e.target.value)}
            required
          />
          <input
            type="number"
            id="valor"
            placeholder="Qual valor você quer depositar em sua conta?"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />

          <button type="submit">Continuar</button>
        </Forms>
      </Container>
    </>
  );
};

export default Transferencia;
