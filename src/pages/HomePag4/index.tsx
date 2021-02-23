import React from 'react';
import { BoxComplexidade, BoxTecnologia, Containe } from './style';

const HomePag4: React.FC = () => {
return(
  <Containe>
    <div>
      <BoxComplexidade>
      <h5>O Fim da Complexidade</h5>
      </BoxComplexidade>
      <BoxTecnologia>
        <h4>Para quem sabe que tecnologia e design são melhores do que agências e papelada.</h4>
      </BoxTecnologia>
      </div>
  </Containe>
)
}

export default HomePag4;