import React {useState} from 'react';
import {Container} from './style'
import { useState } from 'react';
import jwt_decote from 'jwt-decode';
import api from '../../services/api';


const listaPlanos: React.FC = () => {
  
    [listadePlanos, setlistadePlanos] = useState()


    
    const TokenStorage = null || localStorage.getItem('@tokenApp')

    const TokenDecodedValue = () => {
        if (TokenStorage){
          const TokenArr = TokenStorage.split(' ')
          const TokenDecode = TokenArr[1]
          const decoded = jwt_decote<IUserDash>(TokenDecode);
          console.log(decoded.sub);
          return decoded.sub;
        } else {
          alert('err')
        }

      }
      console.log(TokenDecodedValue); 

    useEffect( () => {
        
        let storageToken = () => localStorage.getItem('@tokenApp');
       // console.log(storageToken);
           
        api.get(`lancamentos/planos-conta?login=${TokenDecodedValue()}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': storageToken()
          }
        }).then(
          response => {
           // setDataAccount(response.data)
           dispatch(ActionsCreators.lancamento(response.data))
           setlancamento(response.data)
           console.log(stateLancamento);        
          }
        ).catch( e => {
          console.log(e)

        })
        
      }, []

    https://accenture-java-desafio.herokuapp.com/lancamentos/planos-conta?login=dmorais23
  
  
  
  
  
  
  
  
  
  
  
  
  
    return (

  );
}

export default listaPlanos;