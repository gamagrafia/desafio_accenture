import React from 'react';

import { BoxAnuidade, BoxText, Container } from './style';

const Section02: React.FC = () => {
  return (
    <Container>
      
        <BoxAnuidade>
          
          <BoxText>
            <h1>Zero Anuidade</h1>
            <h2>Burocracia custa caro. Somos eficientes para você não ter que pagar tarifas.</h2>

          </BoxText>

        </BoxAnuidade>

        <BoxAnuidade>
          <h3>0,00</h3>
        </BoxAnuidade>
      
    </Container>
  );
}

export default Section02;