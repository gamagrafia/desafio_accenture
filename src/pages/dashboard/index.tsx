import React, { useEffect, useState } from 'react';
import { AiOutlineBank } from 'react-icons/ai';
import { BiExit } from 'react-icons/bi';
import { GiExitDoor, GiWallet } from 'react-icons/gi';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import logoDash from '../../img/logo-dash.svg';
import { BankPostBox, BoxAccount, DashContainer, MainContent, SideBar, SideBarButton } from './style';


const Dashboard: React.FC = () => {

    const history = useHistory();
    const dispatch = useDispatch();

    const login = localStorage.getItem("@login");
   
    function closeSession() {
        localStorage.clear();
        history.push('/')
    }
   
    return (
        <>  
            <DashContainer>
                              
                <SideBar>
                    <img src={logoDash} alt="Logo Dashboard" />
                    <SideBarButton><AiOutlineBank size={35} />Depósitos</SideBarButton>
                    <SideBarButton><AiOutlineBank size={35} />Planos</SideBarButton>
                    <SideBarButton><AiOutlineBank size={35} />Transações</SideBarButton>
                    <GiExitDoor className="icon-exit" onClick={closeSession} size={50} color=" #000"  />
                </SideBar>
                <MainContent>
                    <div>
                        <h2>Olá <span>{login}</span>, seja bem vindo!</h2><BiExit onClick={closeSession} size={40} color=" #68DE5A"  />
                    </div>
                    
                    <div>
                        <BoxAccount>
                            <div className="dash_ttl_acc"><RiMoneyDollarCircleLine color="9B9B9B" size={50} /><h4>Conta</h4>
                            </div>
                            <p>Saldo Disponivel</p>
                            <h1 className="dash_balance_acc">R$8.000,00</h1>
                           

                        </BoxAccount>

                        <BoxAccount>
                            <div className="dash_ttl_acc"><RiMoneyDollarCircleLine color="9B9B9B" size={50} /><h4>Conta Crédito</h4>
                            </div>
                            <p>Saldo Disponivel</p>
                            <h1 className="dash_balance_acc_credit">R$8.000,00</h1>
                            

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
                </MainContent>
            </DashContainer>
        </>
    );
}

export default Dashboard;