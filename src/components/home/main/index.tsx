import React, { FormEvent, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import Arrow from '../../../img/arrowwhite.png';
import api from '../../../services/api';
import Logo from '../../logo';
import { Container, Form, SectionOne, SideLeft } from './style';

const Main: React.FC = () => {

  const history = useHistory()

  const [cpf, setCpf] = useState('')
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  function createAccount(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const postData = {
      cpf,
      nome: name,
      login: userName,
      senha: password
    }

    if (password !== confirmPass) {
      alert('Ops, as senhas devems er iguais, tente novamente!')
      return;
    
    } 
      try {
        api.post("/usuarios", postData).then(
          response => {
            if (response.status === 200) {
              console.log(response.status)
              alert("Registrado")
              history.push('/login')
            }
          }
        ).catch((e) => {
          if(e.response.status === 400){
            console.clear();
            alert(`Usuario: ${userName} ja esta sendo usado! Tente outro.`)
          }else {
            alert(`Error message: ${e.message}`)
          }
        })
      } catch (e) {
        toast.error('algo deu errado')
      }
    

  }



  return (
    <>
      <Logo />
      <Container>
        <SectionOne>
          <SideLeft>
            <h2>Gama Bank é um projeto de nossos alunos.</h2>
            <h2>Já tem conta?</h2>
            <Link to="/login">
              <button>Acessar <img src={Arrow} alt="" /></button>
            </Link>
          </SideLeft>

          <Form onSubmit={createAccount}>
            <h4>
              Peça sua conta e cartão de crédito Gama Bank
          </h4>
            <input type="text" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF" />
            <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Nome completo" />
            <input type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder="Nome do usuário" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite sua senha" />
            <input type="password" value={confirmPass} onChange={e => setConfirmPass(e.target.value)} placeholder="Confirme sua senha" />

            <button type="submit">Continuar <FiArrowRight size={20} /></button>

          </Form>
        </SectionOne>
      </Container>
    </>

  );
}

export default Main;