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

const Dashboard: React.FC = () => {


    const [showDeposito, setShowDeposito] = useState(false)
    const [hidemainSection, setHideMainSection] = useState(false)

    const login = localStorage.getItem('@login');
    console.log(login);

    const history = useHistory();

    const dispatch = useDispatch();

    const [accountData, setAccountData] = useState<IDataAccount>();

    const TokenStorage = null || localStorage.getItem('@tokenApp')



    function closeSession() {
        localStorage.clear();
        history.push('/');
    }
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

    function handleShow() {
        showDeposito ? setShowDeposito(false) : setShowDeposito(true)
        hidemainSection ? setHideMainSection(false) : setHideMainSection(true)
        // console.log('teste')
    }

    useEffect(() => {

        api.get(`dashboard?fim=2021-01-28&inicio=2021-01-28&login=${TokenDecodedValue()}`, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": TokenStorage,
            },
        }).then(
            response => {
                setAccountData(response.data)

            }
        )

    }, [showDeposito])


    return (
        <>
            <DashContainer>

                <SideBar>
                    <img src={logoDash} alt="Logo Dashboard" />
                    <SideBarButton onClick={handleShow}><AiOutlineBank size={35} />Depósitos</SideBarButton>
                    <SideBarButton><AiOutlineBank size={35} />Planos</SideBarButton>
                    <SideBarButton><AiOutlineBank size={35} />Transações</SideBarButton>
                    <GiExitDoor className="icon-exit" onClick={closeSession} size={50} color=" #000" />
                </SideBar>
                <MainContent>

                    {showDeposito === true &&
                        <Depositos />
                    }

                    {showDeposito === false && (


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
                                <div className="ttl-componente"><RiMoneyDollarCircleLine color="9B9B9B" size={50} /><h4>Ultimos lançamentos</h4></div>
                                <div>
                                    <GiWallet className="dash_post_icon" color="9B9B9B" size={35} />
                                    <div>
                                        <h3>Compra no Debito</h3>
                                        <h4>Gama Academy</h4>
                                        <div className="lancamentos" >
                                            <h1>R$100,00</h1>
                                            <p>24nov</p>
                                        </div>
                                    </div>
                                </div>
                            </BankPostBox>

                        </>
                    )}
                </MainContent>
            </DashContainer>
        </>
    );
}

export default Dashboard;