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
  const [planos, setplanos] = useState<IUserPlans[]>([]);
  const [lancamentos,setLancamentos] = useState();


  const data = []

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

        setplanos(JSON.parse(res.data));
        
        console.log(res.data);
        
      });
  }, []);
 

  return (
    <>
    <Container> 
    <h1> Esses são os seus Planos atuais:</h1>
    <h1>{planos.map(item => ( item.id))}</h1>
    
    
     
    </Container>
     
    </>
  );
};

export default Planos;
