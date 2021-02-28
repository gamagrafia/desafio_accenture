import React, { useState } from 'react';
import { AiOutlineBank, AiOutlineEyeInvisible } from 'react-icons/ai';
import { GiWallet } from 'react-icons/gi';
import { RiCloseLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
// import logoDash from '../../img/logo-dash.svg';
import { BankPostBox, BoxAccount, DashContainer, MainContent, SideBar, SideBarButton } from './style';
import Depositos from '../../components/deposito';
import Transferencia from'../../components/transferencias';
import Planos from '../../components/listadePlanos/index';





const Dashboard: React.FC = () => {
    const history = useHistory();

   const [showDeposito, setShowDeposito] = useState(false)
   const [showTransferencia, setShowTransferencia] = useState(false)
   const [showPlanos, setShowPlanos] = useState(false)
   const [ hidemainSection, setHideMainSection ] = useState(false)
    



    function handleShowDeposito(){
        showDeposito ? setShowDeposito(false) : setShowDeposito(true)
        hidemainSection ? setHideMainSection(false) : setHideMainSection (true)
    }
    
    function handleShowTransferencia(){
        
        showTransferencia ? setShowTransferencia(false) : setShowTransferencia(true)
        hidemainSection ? setHideMainSection(false) : setHideMainSection (true)
    }

    function handleShowPlanos(){
        
        showPlanos ? setShowPlanos(false) : setShowPlanos(true)
        hidemainSection ? setHideMainSection(false) : setHideMainSection (true)
    }
 
    function closeSession() {
        localStorage.clear();
        history.push('/')
    }

    return (
        <>  
            <DashContainer>

                
                <SideBar>
                    {/* <img src={logoDash} alt="Logo Dashboard" /> */}
                    <SideBarButton onClick={handleShowDeposito}>
                    <AiOutlineBank  size={35} />  Depósitos    </SideBarButton>
                    <SideBarButton onClick={handleShowTransferencia}  ><AiOutlineBank size={35} />Transferir</SideBarButton>
                    <SideBarButton onClick={handleShowPlanos}><AiOutlineBank size={35} />Planos</SideBarButton>
                    <SideBarButton><AiOutlineBank size={35} />Transações</SideBarButton>
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
                 }

                    
                </MainContent>
            </DashContainer>
        </>
    );
}

export default Dashboard;