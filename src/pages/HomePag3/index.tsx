import React from 'react';
import{Container} from './style';
import{BoxZero,BoxAnuidade,BoxText} from './style';

const Home: React.FC = () => {
  return(
      <Container>
        <div>
          <BoxAnuidade>
            <h1>Zero Anuidade</h1>
          </BoxAnuidade>
          <BoxText>
          <h2>Burocracia custa caro. Somos eficientes para você não ter que pagar tarifas.</h2>
          </BoxText>
        </div>
        <div>
          <BoxZero>
          <h3>0,00</h3>
          </BoxZero>
        </div>
      </Container>
  );
}

export default Home;