import { useState, FormEvent, useEffect } from "react";
import api from "../../services/api";
import { Container,  } from "./style";
import decode from 'jwt-decode';


interface IUserDash{
  idUsuario: number,
  sub: string
}
interface IUserPlans{
  id:string,
  descricao:string,
  login:string,
  tipoMovimento:string,
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
  const [lancamentos,setLancamentos] = useState();


  

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

    api.get(`/lancamentos/planos-conta?login=${TokenDecodedValue()}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("@tokenApp"),
        },
      })
      .then((res) => {
        
        const planos = (res.data);
        setPlanos(planos);
      
        
        console.log(planos);
        
      });


      
  }, []);
 

  return (
    <>
    <Container> 
    <h1> Esses são os seus Planos atuais:</h1>
    <h1>{planos.map(plano => plano.id)}</h1>
    
    
     
    </Container>
     
    </>
  );
};

export default Planos;
