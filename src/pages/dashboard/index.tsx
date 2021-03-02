import decode from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import { AiOutlineBank } from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';
import {RiBankCardFill} from 'react-icons/ri';
import { GiExitDoor, GiWallet, GiBanknote,GiPiggyBank } from 'react-icons/gi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import ReactLoading from 'react-loading';
import { useHistory } from 'react-router-dom';
import Depositos from '../../components/deposito';
import Planos from '../../components/listadePlanos';
import Transferencia from '../../components/transferencias';
import NovoPlano from '../../components/criarPlanos'
import logoDash from '../../img/logo-dash.svg';
import api from '../../services/api';
import { IDataAccount, IUserDash } from '../../store/modules/user/interfaces';
import { BankPostBox, BoxAccount, DashContainer, MainContent, SideBar, SideBarButton } from './style';

const Dashboard: React.FC = () => {
    // let globalState = useSelector((state:IUserState) => state.users);
    const [dataAccount, setDataAccount] = useState<IDataAccount>();
    const [showDeposito, setShowDeposito] = useState(false)
    const [hidemainSection, setHideMainSection] = useState(false)
    const [showTransferencia, setShowTransferencia] = useState(false)
    const [showPlanos, setShowPlanos] = useState(false)
    const [showCriarPlanos, setShowCriarPlanos] = useState(false)
    const history = useHistory();
    const [accountData, setAccountData] = useState<IDataAccount>();
    const TokenStorage = null || localStorage.getItem('@tokenApp')
    const [lancamentos, setLancamentos] = useState<IDataAccount[]>([])
    const [isLoading, setLoading] = useState(false);

    const login = localStorage.getItem('@login');


    function closeSession() {
        localStorage.clear();
        history.push('/');
    }



    useEffect(() => {
        setLoading(true)
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
                    const data = (response.data);
                    setLancamentos(data);

                    setLoading(false)

                })
                .catch((e) => {
                });
        } catch (e) {
        }
    }, [showDeposito, showPlanos, showTransferencia,showCriarPlanos])
 
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
        setShowPlanos(false);
        setShowTransferencia(false);
    }

    function handleShowTransferencia() {

        showTransferencia ? setShowTransferencia(false) : setShowTransferencia(true)
        hidemainSection ? setHideMainSection(false) : setHideMainSection(true)

        setShowPlanos(false);
        setShowDeposito(false);
        setShowCriarPlanos(false);
    }
    function handleShowPlanos() {

        showPlanos ? setShowPlanos(false) : setShowPlanos(true)
        hidemainSection ? setHideMainSection(false) : setHideMainSection(true)
        setShowDeposito(false);
        setShowTransferencia(false);
        setShowCriarPlanos(false);
    }

    function handleShowCriarPlanos() {

        showCriarPlanos ? setShowCriarPlanos(false) : setShowCriarPlanos(true)
        hidemainSection ? setHideMainSection(false) : setHideMainSection(true)
        setShowDeposito(false);
        setShowTransferencia(false);
        setShowPlanos(false)
    }




    return (
        <>
            <DashContainer>
                <SideBar>
                    <img src={logoDash} alt="Logo Dashboard" />
                    <SideBarButton onClick={handleShowDeposito}>< GiPiggyBank size={35} />Depósitos</SideBarButton>
                    <SideBarButton onClick={handleShowTransferencia}>< GiBanknote size={35} />Transferências </SideBarButton>
                    <SideBarButton onClick={handleShowPlanos}><RiBankCardFill size={35} />Planos</SideBarButton>
                    <SideBarButton onClick={handleShowCriarPlanos}><AiOutlineBank size={35} />Criar Plano</SideBarButton>
                    <GiExitDoor cursor="pointer" className="icon-exit" onClick={closeSession} size={50} color=" #000" />
                </SideBar>
                <MainContent>
                    {showDeposito === true &&
                        <Depositos />
                    }
                    {showTransferencia === true &&
                        <Transferencia />
                    }
                    {showPlanos === true &&
                        <Planos />
                    }
                    {showCriarPlanos === true &&
                        <NovoPlano/>
                    }
                    {showDeposito || showTransferencia || showPlanos || showCriarPlanos=== false &&
                        <>
                            <div>
                                <h2>Olá <span>{login}</span>, seja bem vindo!</h2><BiExit cursor="pointer" onClick={closeSession} size={40} color=" #68DE5A" />
                            </div>
                            <div>

                                <BoxAccount>
                                    <div className="dash_ttl_acc"><RiMoneyDollarCircleLine color="9B9B9B" size={50} /><h4>Conta: {accountData?.contaBanco.id}</h4>
                                    </div>
                                    <p>Saldo Disponivel</p>
                                    {isLoading ? (<ReactLoading type="spin" color="#000" height={30} width={30} />) :
                                        (<h1 className="dash_balance_acc">{accountData?.contaBanco.saldo}</h1>
                                        )
                                    }

                                </BoxAccount>
                                <BoxAccount>
                                    <div className="dash_ttl_acc"><RiMoneyDollarCircleLine color="9B9B9B" size={50} /><h4>Conta Credito: {accountData?.contaCredito.id}</h4>
                                    </div>
                                    <p>Saldo Disponivel</p>
                                    {isLoading ? (<ReactLoading type="spin" color="#000" height={30} width={30} />) :
                                        (<h1 className="dash_balance_acc">{accountData?.contaCredito.saldo}</h1>
                                        )
                                    }
                                </BoxAccount>
                            </div>
                            <BankPostBox>
                                <div className="ttl-componente"><GiWallet className="dash_post_icon" color="9B9B9B" size={35} /><h4>Últimos lançamentos</h4></div>
                                <div>

                                    <div>
                                        <h3>Compra no Debito</h3>

                                        {dataAccount?.contaBanco.lancamentos.map((account: any, index: number) => (
                                            <div key={index} className="lancamentos">
                                                <h4>{account.descricao}</h4>
                                                <h1>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(account.valor)}</h1>
                                                <p>{account.data.split("-").reverse().join("/")}</p>


                                            </div>
                                        ))}

                                    </div>



                                    <div>
                                        <h3>Compra no Crédito</h3>

                                        {dataAccount?.contaCredito.lancamentos.map((account: any, index: number) => (
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