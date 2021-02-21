import React from "react";
import { Container } from "./style";
import Celular3 from '../../img/pngkey 1.png'
const Page5: React.FC = () => {


  return (
    <Container>
      <div>
        <h1 className="titlePage">Simplifique a sua vida. Peça seu convite.</h1>
        <p >
          GamaAcademy Bank Line S.A. - CNPJ 00.000.000/0000-00 Rua Fictícia, 999
          - 00000-000 - São Paulo, SP Este é um projeto de avaliação |
          GamaAcademy | Accenture | 2021
        </p>
      </div>
      <div>
          <img src = {Celular3} alt='celular3'/>

      </div>
    </Container>
  );
};

export default Page5;
