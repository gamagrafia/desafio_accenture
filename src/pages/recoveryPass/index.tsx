import React, { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Logo from '../../components/logo';
import ArrowWhite from '../../img/arrowwhite.png';
import api from '../../services/api';
import { Content, Form, RecoveryContainer } from './style';

const RecoveryPass: React.FC = () => {

  const[login, setLogin] = useState("")
  const[senha, setSenha] = useState("")
  const[senhaConf, setSenhaConf] = useState("")
  const[senhaTemporaria, setSenhaTemporaria] = useState('');
  const history = useHistory();

  const tempPass = localStorage.getItem('@tempPass');
  

  function handleRecoveryPass(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const dt = {
      usuario: login,
      senha: senha,
      senhaTemporaria: senhaTemporaria
    } 

    
      api.post(`/altera-senha?senhaTemporaria=${tempPass}`, dt).then(
        response => {
          if(response.status === 200){
            localStorage.clear();
            history.push('/login')
            
          }
        }
      ).catch((e) => {
        console.clear()
        alert("Algo esta errado, tente novamente")
        setLogin('')
        setSenha('')
        setSenhaConf('')

      })
    
  }


  return (
    <>
      <Logo />
      <RecoveryContainer>

        <Content>
          <Form onSubmit={handleRecoveryPass}>
            <h4>
              Esqueci minha senha
          </h4>
            <p>
              Confirme seu Nome de Usuario e escolha sua nova senha
          </p>
            <input type="text" placeholder="Confirme seu nome de usuario" value={login} onChange={(e) => setLogin(e.target.value)} />
            <input type="password" placeholder="Digite sua nova senha " value={senha} onChange={(e) => setSenha(e.target.value)} />
            <input type="password" placeholder="Confirme sua nova senha " value={senhaConf} onChange={(e) => setSenhaConf(e.target.value)} />
            <button type="submit">Enviar <img src={ArrowWhite} alt="" /></button>



          </Form>
        </Content>
      </RecoveryContainer>
    </>
  );
}

export default RecoveryPass;