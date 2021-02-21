import React from 'react';
import { Container } from './style'
import Logo from '../../img/logo.png'
import CardLogin from '../../components/cardLogin';



const Login: React.FC = () => {
  return (
      <Container>
          <img src={Logo} alt= "logo-gama"/>
          <CardLogin/>   
      </Container>
 );
}

export default Login;