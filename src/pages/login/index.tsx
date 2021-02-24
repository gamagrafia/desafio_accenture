import React from 'react';

import CardLogin from '../../components/cardLogin';
import Logo from '../../components/logo';
import { Container } from './style';



const Login: React.FC = () => {
  return (
      <>
      <Logo />
      <Container>
          {/* <img src={Logo} alt= "logo-gama"/> */}
          
          <CardLogin/>   
      </Container>
      </>
 );
}

export default Login;