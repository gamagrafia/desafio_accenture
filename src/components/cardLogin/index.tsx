import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import { addNewUser } from '../../store/modules/user/actions';
import { IToken } from '../../store/modules/user/interfaces';
import { Container, LinkSections } from './style';




const CardLogin: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch()


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

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginData = {
      usuario: login,
      senha: password
    }


    api.post('/login', loginData).then(
      response => {
        // console.log(response.data)
        localStorage.setItem('@tokenApp', response.data.token);
        alert('logado')
        dispatch(addNewUser(response.data))
        history.push('/dashboard')
      }

    )
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
