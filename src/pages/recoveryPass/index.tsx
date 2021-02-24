import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../components/logo';
import ArrowWhite from '../../img/arrowwhite.png';
import { Content, Form, RecoveryContainer } from './style';

const RecoveryPass: React.FC = () => {
  return (
    <>
    <Logo />
    <RecoveryContainer>
      {/* <Header>
          <Link to="/">
            <img className="logo-gama" src={Logo} alt=""/>
          </Link>
      </Header>   */}
        <Content>
        <Form /* onSubmit={} */>  
          {/*<form action=""> */}
          <h4>
          Esqueci minha senha
          </h4>
          <p>
          Confirme seu CPF e escolha sua nova senha
          </p>
          <input type="text" placeholder="Confirme seu CPF"/>
          <input type="password" placeholder="Digite sua nova senha "/>
          <input type="password" placeholder="Confirme sua nova senha  "/>
          <Link to="/">
          <button>Enviar <img src={ArrowWhite} alt=""/></button>
          </Link>
          {/* </form> */}     
         
      </Form>            
      </Content>   
    </RecoveryContainer>
    </>
  );
}

export default RecoveryPass;