import decode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { AiOutlineBank } from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';
import { GiExitDoor, GiWallet } from 'react-icons/gi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Depositos from '../../components/deposito';
import logoDash from '../../img/logo-dash.svg';
import api from '../../services/api';
import { IDataAccount, IUserDash } from '../../store/modules/user/interfaces';
import { BankPostBox, BoxAccount, DashContainer, MainContent, SideBar, SideBarButton } from './style';
import Transferencia from'../../components/transferencias';
import Planos from '../../components/listadePlanos/index';

const Dashboard: React.FC = () => {
    // let globalState = useSelector((state:IUserState) => state.users);
    const [ dataAccount, setDataAccount ] = useState<IDataAccount>();
    const [showDeposito, setShowDeposito] = useState(false)
    const [hidemainSection, setHideMainSection] = useState(false)
    const [showTransferencia, setShowTransferencia] = useState(false)
    const [showPlanos, setShowPlanos] = useState(false)
    const [loading, setLoading] = useState(false);
    const login = localStorage.getItem('@login');
    console.log(login);
    const history = useHistory();
    const dispatch = useDispatch();
    const [accountData, setAccountData] = useState<IDataAccount>();
    const TokenStorage = null || localStorage.getItem('@tokenApp')
    const [lancamentos, setLancamentos] = useState<IDataAccount[]>([])
    const [showNovosPlanos, setShowNovosPlanos] = useState(false)


    function closeSession() {
        localStorage.clear();
        history.push('/');
    }

    useEffect(() => {
      try {
          api.get("/dashboard", {
         params: {
         inicio: '2021-01-01',
         fim: '2021-01-31',
         login: `${TokenDecodedValue()}`
             },
           headers: {
             "Content-Type": "application/json",
             "Authorization": localStorage.getItem("@tokenApp"),
           },
         })
         .then((response) => {
           const data = (response.data);
           setLancamentos(data);
              
           console.log(lancamentos)
         })
         .catch((e) => {});
     } catch (e) {
     }
      }, [setLancamentos])

      useEffect(() => {
        try {
            api.get("/dashboard", {
           params: {
           inicio: '2021-01-01',
           fim: '2021-01-31',
           login: `${TokenDecodedValue()}`
               },
             headers: {
               "Content-Type": "application/json",
               "Authorization": localStorage.getItem("@tokenApp"),
             },
           })
           .then((response) => {             
             setAccountData(response.data);
              setDataAccount(response.data);               
             
           })
           .catch((e) => {});
       } catch (e) {
       }
        }, [showDeposito])
    // const dashState = useSelector((state:IDataAccountState) => state.lancamentosAccount)
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
    function handleShowDeposito() {
        showDeposito ? setShowDeposito(false) : setShowDeposito(true)
        hidemainSection ? setHideMainSection(false) : setHideMainSection(true)
        // console.log('teste')
    } 
  
  function handleShowTransferencia(){
      
      showTransferencia ? setShowTransferencia(false) : setShowTransferencia(true)
      hidemainSection ? setHideMainSection(false) : setHideMainSection (true)
  }
  function handleShowPlanos(){
      
      showPlanos ? setShowPlanos(false) : setShowPlanos(true)
      hidemainSection ? setHideMainSection(false) : setHideMainSection (true)
  }

  function handleShowNovosPlanos(){
        
    showNovosPlanos ? setShowNovosPlanos(false) : setShowNovosPlanos(true)
    hidemainSection ? setHideMainSection(false) : setHideMainSection (true)
}


    return (
        <>
            <DashContainer>
                <SideBar>
                    <img src={logoDash} alt="Logo Dashboard" />
                    <SideBarButton onClick={handleShowDeposito}><AiOutlineBank size={35} />Depósitos</SideBarButton>
                    <SideBarButton onClick={handleShowTransferencia}><AiOutlineBank size={35} />Transferências </SideBarButton>
                    <SideBarButton onClick={handleShowPlanos}><AiOutlineBank size={35} />Planos</SideBarButton>
                    <SideBarButton onClick={handleShowPlanos}><AiOutlineBank size={35} />Criar Planos</SideBarButton>
                    <GiExitDoor className="icon-exit" onClick={closeSession} size={50} color=" #000" />
                </SideBar>
                <MainContent>
                { showDeposito === true &&
                    <Depositos/>
                 }
                 { showTransferencia === true &&
                    <Transferencia/>
                 }
                { showPlanos === true &&
                    <Planos/>
                 }
                 { showDeposito || showTransferencia || showPlanos === false &&
                        <>
                            <div>
                                <h2>Olá <span>{login}</span>, seja bem vindo!</h2><BiExit onClick={closeSession} size={40} color=" #68DE5A" />
                            </div>
                            <div>
                                <BoxAccount>
                                    <div className="dash_ttl_acc"><RiMoneyDollarCircleLine color="9B9B9B" size={50} /><h4>Conta: {accountData?.contaBanco.id}</h4>
                                    </div>
                                    <p>Saldo Disponivel</p>
                                    
                                    <h1 className="dash_balance_acc">{accountData?.contaBanco.saldo}</h1>
                                   
                                </BoxAccount>
                                <BoxAccount>
                                    <div className="dash_ttl_acc"><RiMoneyDollarCircleLine color="9B9B9B" size={50} /><h4>Conta Credito: {accountData?.contaCredito.id}</h4>
                                    </div>
                                    <p>Saldo Disponivel</p>
                                    <h1 className="dash_balance_acc_credit">{accountData?.contaCredito.saldo}</h1>
                                </BoxAccount>
                            </div>
                            <BankPostBox>
                        <div className="ttl-componente"><RiMoneyDollarCircleLine color="9B9B9B" size={50} /><h4>Últimos lançamentos</h4></div>
                        <div>
                            <GiWallet className="dash_post_icon" color="9B9B9B" size={35} />
                            <div>
                                <h3>Compra no Debito</h3>
                                
                                 {dataAccount?.contaBanco.lancamentos.map( ( account: any, index: number ) => (
                                  <div key={index} className="lancamentos">
                                    <h4>{account.descricao}</h4>
                                    <h1>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(account.valor)}</h1>
                                    <p>{account.data.split("-").reverse().join("/")}</p>
                                  </div>
                                ))} 
                                
                            </div>

                            <div>
                                <h3>Compra no Crédito</h3>
                                
                                 { dataAccount?.contaCredito.lancamentos.map( ( account: any, index: number ) => (
                                  <div key={index} className="lancamentos">
                                    <h4>{account.descricao}</h4>
                                    <h1>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(account.valor)}</h1>
                                    <p>{account.data.split("-").reverse().join("/")}</p>
                                  </div>
                                ))}
                                 
                            </div>
                        </div>
                    </BankPostBox>
                        </>
                    }
                </MainContent>
            </DashContainer>
        </>
    );
}
export default Dashboard;