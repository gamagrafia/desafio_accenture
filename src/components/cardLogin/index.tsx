import React, { FormEvent, useEffect, useState } from 'react';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import { Container, LinkSections } from './style';


export interface IToken {
  storage: string;
}

const CardLogin: React.FC = () => {

  const history = useHistory();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [storage, setStorage] = useState<IToken>((): any => {
    let storageToken = () => localStorage.getItem('@tokenApp')
    console.log(storageToken);

    return storageToken();
  })

  useEffect(() => {
    !!storage 
    ?
    history.push('/dashboard')
    :
    localStorage.clear()
  }, [storage])
    
  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const loginData = {
      usuario: login,
      senha: password
    }

    try {
      api.post('/login', loginData).then(
        response => {
          localStorage.setItem('@tokenApp', response.data.token);
          console.log('Token cadastrado!');
          history.push("/dashboard");
        }
      ).catch((e) => {
        history.push("/error");

      })

    }
    catch(e){
      alert(e.message);
    }

  }


  return (
    <Container>
      <form onSubmit={handleLogin}>
        <h1>Faça seu Login</h1>
        <input type="text" id="username" placeholder="Digite seu usuário" value={login} onChange={(e) => setLogin(e.target.value)} required />
        <input type="password" id="senha" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">
          Continuar <FiArrowRight size={25} />
        </button>
      </form>
        <LinkSections>
          <Link to="/passrequest">
            Esqueci minha senha <FiChevronRight size={20} />
          </Link>
          <br />
          <Link to="/">
            Ainda não sou cliente <FiChevronRight size={20} />
          </Link>
        </LinkSections>
     
    </Container>
  );
};

export default CardLogin;
