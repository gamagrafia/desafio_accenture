import React, { useEffect, useState } from 'react';
import jwt_decote from 'jwt-decode';
import { toast } from 'react-toastify'

import { useHistory } from 'react-router-dom';

import api from '../../services/api';
// import Headers from  '../../services/headers'

interface IUser{
  idUsuario: number,
  sub: string
}

interface IDataAccount{
  contaBanco:{
    saldo: number,
    id: number,
    lancamentos: any
  },
  contaCredito:{
    saldo: number,
    id: number,
    lancamentos: any
  }

}


const DashBoard: React.FC = () => {

  const [ dataAccount, setDataAccount ] = useState<IDataAccount>();

  const history = useHistory()

  const TokenStorage = null || localStorage.getItem('@tokenApp')

  const TokenDecodedValue = () => {
    if (TokenStorage){
      const TokenArr = TokenStorage.split(' ')
      const TokenDecode = TokenArr[1]
      const decoded = jwt_decote<IUser>(TokenDecode);
      return decoded.sub;
    } else {
      alert('err')
    }
  }

  const  tester = TokenDecodedValue();

  useEffect( () => {
    api.get(`dashboard?fim=2021-02-18&inicio=2021-02-18&login=${tester}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('@tokenApp')
      }
    }).then(
      response => {
        setDataAccount(response.data)
      }
    ).catch( e => {
      localStorage.clear()
      toast.error('Ops, sua sessão está inspirada.')
      history.push('/login')
    })
  }, [] )

  

  return (
  <>
    <h1>Dashboard</h1>
    <h3>Conta banco</h3>
    <span>{dataAccount?.contaBanco.saldo}</span>
    <h3>Conta credito</h3>
    <span>{dataAccount?.contaCredito.saldo}</span>

    <hr/>
    <span>{dataAccount?.contaCredito.id}</span>

    { dataAccount?.contaCredito.lancamentos.map( ( account: any, index: number ) => (
      <div key={index}>
        <h2>{account.lenght}</h2>
      </div>
    ))}
  </>);
}

export default DashBoard;