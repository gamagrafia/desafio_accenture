import { useState, FormEvent, useEffect} from "react";
import api from '../../services/api'
import {Container, Forms} from './style'



const Depositos: React.FC = () => {

  const [conta, setConta] = useState("");
  const [contaDestino, setContaDestino] = useState("");
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState("");
  const [login, setLogin] = useState("");
  const [planoConta, setPlanoconta] = useState("");
  const [valor, setValor] = useState("");

 
  
  function postPlanoConta(event: FormEvent<HTMLFormElement>){


  }

  function handleDeposito(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert('OK')


  



    const depositoData = {
        
        conta: conta,
        contaDestino: contaDestino,
        data: data,
        descricao: descricao,
        login: login, 
        planoConta: planoConta,
        valor: valor,

      }
  

      try {
        api.post('/lancamentos', depositoData).then(
          response => {
              console.log(response.data)

          }
        ).catch((e) => {
          
  
        })
  
      }
      catch(e){
         alert(e.message)
      }

  }

  return (
    <>
    <Container>
      <h1>Faça seu Depósito</h1>

      <Forms onSubmit={handleDeposito}>

        <input
          type="text"
          id="conta"
          placeholder="Digite o ID de sua conta"
          value={conta}
          onChange={(e) => setConta(e.target.value)}
          required
        />
        <input
          type="text"
          id="tipoconta"
          placeholder="Digite em Qual conta quer depositar"
          value={contaDestino}
          onChange={(e) => setContaDestino(e.target.value)}
          required
        />
        <input
          type="text"
          id="data"
          placeholder="Digite a Data do depósito"
          value={data}
          onChange={(e) => setData(e.target.value)}
          required
        />
        <input
          type="text"
          id="descricao"
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

export default Depositos;
