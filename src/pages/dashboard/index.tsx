import React , { useEffect, useState} from 'react';
import { AiOutlineBank, AiOutlineEyeInvisible } from 'react-icons/ai';
import { GiWallet } from 'react-icons/gi';
import { RiCloseLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import logoDash from '../../img/logo-dash.svg';
//import { IUserState } from '../../store/modules/user/interfaces';
import { BankPostBox, BoxAccount, DashContainer, MainContent, SideBar, SideBarButton } from './style';
import api from '../../services/api';
import jwt_decote from 'jwt-decode';
import { IDataAccount, IDataAccountState, IUserState, IUserDash } from '../../store/modules/user/interfaces'
import { ActionsCreators } from '../../store/modules/user/actions';



const Dashboard: React.FC = () => {

    //const stateLancamento = useSelector((state: IUserState) => state.users )

    const stateLancamento = useSelector((state: IDataAccountState) => state.lancamentos)

    const history = useHistory();
   // const [ dataAccount, setDataAccount ] = useState<IDataAccount>();

    const dispatch = useDispatch();

    const [lancamento, setlancamento] = useState <IDataAccountState>()

    
    //Fechar tela e remover token
    function closeSession() {
        localStorage.clear();
        history.push('/')
    }

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
           
        api.get(`/dashboard?fim=2021-01-31&inicio=2021-01-31&login=${TokenDecodedValue()}`, {
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
        
      }, [dispatch] )

  
        
  
   // const globalState = useSelector((state:IUserState) => state.users);
    
    // console.log(globalState[0].usuario.nome);


        
    return (
        <>  
            <DashContainer>
                
                <SideBar>
                    <img src={logoDash} alt="Logo Dashboard" />
                    <SideBarButton><AiOutlineBank size={35} />Depósitos</SideBarButton>
                    <SideBarButton><AiOutlineBank size={35} />Planos</SideBarButton>
                    <SideBarButton><AiOutlineBank size={35} />Pagamentos</SideBarButton>
                    <SideBarButton><AiOutlineBank size={35} />Transações</SideBarButton>
                </SideBar>
                <MainContent>
                    <div>
                        <h2>Olá , seja bem vindo!</h2><RiCloseLine onClick={closeSession} size={40} />
                        <AiOutlineEyeInvisible color=" #68DE5A" size={40} />
                    </div>
                    
                    <div>
                        <BoxAccount>
                            <div className="dash_ttl_acc"><RiMoneyDollarCircleLine color="9B9B9B" size={50} /><h4>Conta</h4>
                            </div>
                            <p>Saldo Disponivel</p>
                            <h1 className="dash_balance_acc">R$8.000,00</h1>
                            <div>
                                <h4>Transacoes</h4>
                                <h1>R$2.000,00</h1>
                            </div>

                        </BoxAccount>

                        <BoxAccount>
                            <div className="dash_ttl_acc"><RiMoneyDollarCircleLine color="9B9B9B" size={50} /><h4>Conta Crédito</h4>
                            </div>
                            <p>Saldo Disponivel</p>
                            <h1 className="dash_balance_acc_credit">R$8.000,00</h1>
                            <div>
                                <h4>Transacoes</h4>
                                <h1>R$2.000,00</h1>
                            </div>

                        </BoxAccount>
                    </div>

                    <BankPostBox>
                        <div className="ttl-componente"><RiMoneyDollarCircleLine color="9B9B9B" size={50} /><h4>Últimos lançamentos</h4></div>
                        <div>
                            <GiWallet className="dash_post_icon" color="9B9B9B" size={35} />
                            <div>
                                <h3>Compra no Debito</h3>
                                
                                {/* { dataAccount?.contaBanco.lancamentos.map( ( account: any, index: number ) => (
                                  <div key={index} className="lancamentos">
                                    <h4>{account.descricao}</h4>
                                    <h1>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(account.valor)}</h1>
                                    <p>{account.data}</p>
                                  </div>
                                ))} */}
                                
                            </div>

                            <div>
                                <h3>Compra no Crédito</h3>
                                
                               {/*  { dataAccount?.contaCredito.lancamentos.map( ( account: any, index: number ) => (
                                  <div key={index} className="lancamentos">
                                    <h4>{account.descricao}</h4>
                                    <h1>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(account.valor)}</h1>
                                    <p>{account.data}</p>
                                  </div>
                                ))}
                                 */}
                            </div>
                        </div>
                    </BankPostBox>
                </MainContent>
            </DashContainer>
        </>
    );
}

export default Dashboard;