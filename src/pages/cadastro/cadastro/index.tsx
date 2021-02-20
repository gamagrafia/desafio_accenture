import React, {useState, FormEvent} from 'react';
// import { Interface } from 'readline';
import api from '../../../services/api'
import Logo from "../../../img/logo.png";

import {TitleForm , Form , Container, Main, Header} from './style'

const Cadastro: React.FC = () => {

  const [ cpf, setCPF ] = useState('')
  const [ name, setNOME ] = useState('')
  const [ userName, setUSERNAME ] = useState('')
  const [ password, setSENHA ] = useState('')
  const [ confirmPass, setCONFIRMPASS ] = useState('')

  const criaCadastro = ( event: FormEvent<HTMLFormElement> ) =>
  {
    event.preventDefault()

        const data = {
            cpf,
            nome:name,
            login: userName,
            senha: password
        }

      // async function getData() {
      //   try {

      //     await api.post('usuario', data)
      //     alert('pessoa Cadastrado com Sucesso')
      //     console.log(data)
          
      // } catch (error) {

      //     console.log(data)
      //     alert('Erro ao cadastrar usuário')
      // }
      // } 
      try {
        api.post(`usuarios`, data ).then(
          response => { 
              
            } else {
              return 
            }
           }
        )
      } catch (e) {
        toast.error('algo deu errado')
      }
    } 

    } 
    
    return(
      <>  
      <Container>  
          <Main>
          <Header>
          <img className="logo-gama" src={Logo} alt=""/>
          </Header>
          <TitleForm>Peça sua conta e cartão de crédito do Gama Bank </TitleForm>
          <Form onSubmit={criaCadastro}>
            <input type= "text" value={cpf} onChange={ e => setCPF(e.target.value)} placeholder="Digite seu CPF"/>
            
            <input type= "text" value={name} onChange={ e => setNOME(e.target.value)} placeholder="Nome Completo"/>
            
            <input type= "text" value={userName} onChange={ e => setUSERNAME(e.target.value)} placeholder="Nome do usuário"/>
            
            <input type= "text" value={password} onChange={ e => setSENHA(e.target.value)} placeholder="Digite sua senha"/>
            
            <input type= "text" value={confirmPass} onChange={ e => setCONFIRMPASS(e.target.value)} placeholder="Confirme sua senha"/>
            
            <button type="submit"> Continuar </button>
          </Form>
          </Main>
      </Container>
      </>
    )
   

  }

 
  



export default Cadastro;