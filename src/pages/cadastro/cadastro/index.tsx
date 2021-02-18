import React, {useState, FormEvent} from 'react';

import {TitleForm,Form} from './style'

const Cadastro: React.FC = () => {

  const [ cpf, setCPF ] = useState('')
  const [ name, setNOME ] = useState('')
  const [ userName, setUSERNAME ] = useState('')
  const [ password, setSENHA ] = useState('')
  const [ confirmPass, setCONFIRMPASS ] = useState('')

  function criaCadastro( event: FormEvent<HTMLFormElement> ){
    event.preventDefault()
  }

  return (
  <>  
      <div>
      <TitleForm>Peça sua conta e cartão de crédito do Gama Bank </TitleForm>
      <Form onSubmit={criaCadastro}>
        <input type= "text" value={''} onChange={ e => setCPF(e.target.value)} placeholder="Digite seu CPF"/>
        
        <input type= "text" value={''} onChange={ e => setNOME(e.target.value)} placeholder="Nome Completo"/>
        
        <input type= "text" value={''} onChange={ e => setUSERNAME(e.target.value)} placeholder="Nome do usuário"/>
        
        <input type= "text" value={''} onChange={ e => setSENHA(e.target.value)} placeholder="Digite sua senha"/>
        
        <input type= "text" value={''} onChange={ e => setCONFIRMPASS(e.target.value)} placeholder="Confirme sua senha"/>
        
        <button type="submit">Continuar</button>
      </Form>
      </div>
  </>
  );
}

export default Cadastro;