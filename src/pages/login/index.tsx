import React, { useState, FormEvent, useEffect } from 'react';

import { Link, useHistory } from "react-router-dom";

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import api from '../../services/api'

import Logo from "../../img/gama-academy-logo.png";

import { Header, LoginPage, LinkSections } from "./style";

interface IToken{
  storage: string
}

const Login: React.FC = () => {

  const history = useHistory();

  const [ login, setLogin ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ storage, setStorage ] = useState<IToken>(():any => {
    let storageToken = () => localStorage.getItem('@tokenApp')
    return storageToken();
  })
  
  useEffect(() => {
    !!storage ? history.push('/dashboard') : localStorage.clear()
  }, [storage])

  function handleLogin( event: FormEvent<HTMLFormElement>){
    event.preventDefault();

    const postData= {
      usuario: login,
      senha: password
    }

    api.post(`login`, postData ).then(
      response => {
        localStorage.setItem('@tokenApp', response.data.token)
        history.push('/dashboard')
      }
    )

  }
  return (
    <>
      <Header>
        <Link to="/">
          <img className="logo-gama" src={Logo} alt=""/>
        </Link>
      </Header>

      <LoginPage>
        <div className="login-div">
          <div>
            <h4>
              Faça seu Login
            </h4>
          </div>
            <form onSubmit={handleLogin}>
              <input 
                value={ login }
                onChange={ e => setLogin(e.target.value) }
                type="text"
                placeholder="Seu nome de usuário"
              />

              <input
                value={ password }
                onChange={ e => setPassword(e.target.value) }
                type="password"
                placeholder="Informe sua senha"
              />

              <button type="submit" >
                Logar <FiChevronRight size={25}/>
              </button>

            </form>
            <LinkSections>
              <Link to="/recoveryPass">
                <FiChevronLeft size={20}/> Esqueci minha senha 
              </Link>
              <br/>
              <Link to="/">
                <FiChevronLeft size={20}/>  Ainda não sou cliente
              </Link>
            </LinkSections>
        </div>
      </LoginPage>
    </>
  );
}

export default Login;