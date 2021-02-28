import React from 'react';

import Celular3 from '../../../img/pngkey 1.png';
import { BxHomeFive, Container } from './style';

const Section04: React.FC = () => {
  return (
    <Container>
      <BxHomeFive>
        <h1>Simplifique a sua vida. Peça seu convite.</h1>
        <p>
          GamaAcademy Bank Line S.A. - CNPJ 00.000.000/0000-00 Rua Fictícia, 999
          - 00000-000 - São Paulo, SP Este é um projeto de avaliação |
          GamaAcademy | Accenture | 2021
        </p>
      </BxHomeFive>
      <BxHomeFive>
         <div>
          <img src={Celular3} alt="celular3" />
        </div>
      </BxHomeFive>
    </Container>
  );
};

export default Section04;
