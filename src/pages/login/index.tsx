import React from 'react';

import CardLogin from '../../components/cardLogin';
import Logo from '../../components/logo';
import { Container } from './style';



const Login: React.FC = () => {
  return (
      <>
      <Logo />
      <Container>          
          <CardLogin/>   
      </Container>
      </>
 );
}

export default Login;