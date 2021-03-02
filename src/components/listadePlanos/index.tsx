import decode from 'jwt-decode';
import { Component, FormEvent, useEffect, useState } from 'react';

import api from '../../services/api';
import { Container } from './style';


interface IUserDash {
  idUsuario: number,
  sub: string
}
interface IUserPlans {
  id: string,
  descricao: string,
  login: string,
  tipoMovimento: string,
  padrao: boolean,


}

const Planos: React.FC = () => {

  const [planos, setPlanos] = useState([{
    "id": 2592,
    "descricao": "RECEITAS",
    "login": "flavio100",
    "tipoMovimento": "R",
    "padrao": true
  }]);

  const [laoding,setLoading] = useState(false)


  const TokenStorage = null || localStorage.getItem('@tokenApp')

  const TokenDecodedValue = () => {
    if (TokenStorage) {
      const TokenArr = TokenStorage.split(' ')
      const TokenDecode = TokenArr[1]
      const decoded = decode<IUserDash>(TokenDecode);
      console.log(decoded.sub);
      return decoded.sub;
    } else {
      alert('err')
    }

  }


  useEffect(() => {
    setLoading(true)

    api.get(`/lancamentos/planos-conta?login=${TokenDecodedValue()}`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem("@tokenApp"),
      },
    })
      .then((res) => {

        const planos = (res.data);
        setPlanos(planos);
        setLoading(false)


        console.log(planos);

      });



  }, []);


  return (
    <>
      <Container>
        <div>
          <h1> Seus planos de Conta</h1>
          
          <div>

            {planos.map(plano =>
              
              <h3 key={plano.id}> {plano.descricao} do tipo : {plano.tipoMovimento} com o ID:{plano.id}</h3>
            )}
          </div>

        </div>










      </Container>

    </>
  );
};

export default Planos;
