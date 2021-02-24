import React from 'react';

import Celular1 from '../../../img/app-bg 1.png';
import Celular2 from '../../../img/app-bg 2.png';
import { Container, DivBranca, DivPreta } from './style';



const Section01: React.FC = () => {
  return (
  <Container>

      <DivPreta>
          <h1>Conta digital do Gama Academy </h1>
          <img src = {Celular1} alt= 'celular'/>
          <p>Rende mais que a poupança, sem taxa de manutenção nem tarifas escondidas.</p>

      </DivPreta>

      <DivBranca>
          <h1>Cartão de Crédito </h1>
          <img src = {Celular2} alt= 'celular'/>
          <p>Rende mais que a poupança, sem taxa de manutenção nem tarifas escondidas.</p>
      </DivBranca>

  </Container>
    
  )
}

export default Section01;