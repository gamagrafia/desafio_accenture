import React, { FormEvent, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Container } from '../../components/cardLogin/style';
import Logo from '../../components/logo';
import api from '../../services/api';
import { RecoveryContainer } from './style';

const RecoveryPass: React.FC = () => {

  const[login, setLogin] = useState("")
  const[senha, setSenha] = useState("")
  const[senhaConf, setSenhaConf] = useState("")
  const[senhaTemporaria, setSenhaTemporaria] = useState('');
  const history = useHistory();

  const tempPass = localStorage.getItem('@tempPass');
  // const state = useSelector((state:IUserState) => state.users)
  // console.log(state)

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
        toast.error("Algo esta errado, tente novamente")
        setLogin('')
        setSenha('')
        setSenhaConf('')

      })
    
  }


  return (
    <>
      <Logo />
      <RecoveryContainer>

        <Container>
        <form onSubmit={handleRecoveryPass}>
            <h1>Esqueci minha senha</h1>
            <input type="text" placeholder="Confirme seu nome de usuário" value={login} onChange={(e) => setLogin(e.target.value)} required />
            <input type="password" placeholder="Digite sua nova senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
            <input type="password" placeholder="Confirme sua nova senha" value={senhaConf} onChange={(e) => setSenhaConf(e.target.value)} required />
            <button type="submit">
              Continuar <FiArrowRight size={25} />
            </button>

          </form>
        </Container>
      </RecoveryContainer>
    </>
  );
}

export default RecoveryPass;