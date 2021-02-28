import { useState, FormEvent, useEffect } from "react";
import api from "../../services/api";
import { Container, Forms } from "./style";
import decode from 'jwt-decode';


interface IUserDash{
  idUsuario: number,
  sub: string
}
interface IUserPlans{
  planos:[]
}

const Planos: React.FC = () => {
  const [planos, setplanos] = useState();
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
        setplanos(res.data);
        console.log(res.data);
      });
  }, []);
  https://accenture-java-desafio.herokuapp.com/dashboard?fim=2020-01-01&inicio=2020-01-01&login=dmorais23

  useEffect(() => {
    api.get(`dashboard?fim=2020-01-01&inicio=2020-01-01&login=${TokenDecodedValue()}`, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("@tokenApp"),
        },
      })
      .then((res) => {
        setLancamentos(res.data);
        console.log(res.data);
      });
  }, []);

  return (
    <>
     
    </>
  );
};

export default Planos;
