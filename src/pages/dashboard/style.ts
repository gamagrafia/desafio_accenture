import styled from 'styled-components';

export const DashContainer = styled.div`
    display: flex;
    background-color: #8C52E5;
    width: 100%;
    
    
    @media(max-width: 1024px){
        height: fit-content;
    }
    @media(max-width: 768px){
        height: fit-content;
    }


`

export const SideBar =  styled.aside`
    display: flex;
    flex-direction: column;
    width: 10%;
    height: 100vh;
    background: #68DE5A;
    justify-content: start;
    align-items: center;
    padding: 20px;

    @media(max-width: 1301px){
        width:15%;
    }
    @media(max-width: 1024px){
        width: 17%;
        position: fixed;
    }
    @media(max-width: 768px){
        width: 25%;
        position: fixed;
    }
    @media(max-width: 480px){
      
    }

`
export const SideBarButton = styled.button`
    width: 90px;
    height: 90px;
    margin-top: 40px;
    color: #fff;
    font-size: 0.8rem;
    background-color: #8C52E5;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: space-between;
    padding: 8px 8px ;
    border-color: none;
    box-shadow: inset -9px -8px 20px 8px #7030d2;
    border: 0px solid #8C52E5; 
    border-radius: 5px; 

    
`


export const Button = styled.button`
    width: 90px;
    height: 90px;
    margin-top: 40px;
    color: #fff;
    font-size: 0.8rem;
    background-color: #8C52E5;
    display: flex;
    flex-direction: column;
    align-items:flex-start;
    justify-content: space-between;
    padding: 8px 8px ;
    border-color: none;
    box-shadow: inset -9px -8px 20px 8px #7030d2;
    border: 0px solid #8C52E5; 
    border-radius: 5px; 

    
`

export const MainContent = styled.main`
    width: 80%;
    height: 100%;
    padding: 70px 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    svg {
        cursor:pointer;
    }

    h2{
        width: 100%;
        color: #fff;
        margin-bottom: 40px;
        
        
    }
    div{
        width:90%;
        display:flex;
        justify-content: space-between;
    }
    
        @media(max-width: 1301px){
            width:100%;

            
        div{
            width: 100%;
            height:fit-content;
        }
    }
        @media(max-width: 1024px){
            padding-left: 300px;
            svg{
                display:none;
            }

        div{
            flex-direction: column;
            width: 100%;
            height:fit-content;
        }
    }
        @media(max-width: 768px){
            padding-left: 240px;

            svg{
                display:none;
            }
        div{
            flex-direction: column;
            width: 100%;
            height:fit-content;
        }
    }
        @media(max-width: 480px){
      
    }

 
`

export const BoxAccount = styled.section`

    background-color: #fff;
    background-color: #fff;
    width: 40%;
    padding: 30px 15px ;
    display: flex;
    flex-direction:column;
    border-radius: 8px;
    margin-bottom: 40px;

    .dash_ttl_acc{

        display: flex;
        margin-bottom: 30px;
        align-items: center;
        justify-content: flex-start;

        h4{
            margin: 0px 10px;
            padding:0;
            font-size: 1.2rem;
            color: #9B9B9B;
            
        }

    }

    h1{
        margin-top: 10px;
        margin-bottom: 30px;


    }

    div{
        display: flex;
        width:100%;
        justify-content: space-between;
        align-items: center;
        h1{
            color: #68DE5A;
            padding:0;
            margin:0;

        }
        h4{
            padding:0;
            margin:0;
            color: #9B9B9B;

        }
    
    }

    .dash_balance_acc{
        color: #000;

  

    }
    .dash_balance_acc_credit{
        color:#1783E7;

  

    }

    @media(max-width: 1301px){
    }
    @media(max-width: 1024px){
        width: 100%;
        align-items:center;

    }
    @media(max-width: 768px){
        width: 100%;
        align-items:center;
    }
    @media(max-width: 480px){
      
    }

  
`

export const BankPostBox = styled.section`
    background-color: #fff;
    border-radius: 10px;
    width: 90%;
    height: 100%;
    padding: 30px;
   

    .ttl-componente{
        display: flex;
        margin-bottom: 30px;
        align-items: center;
        justify-content: flex-start;

        h4{
            margin: 0px 10px;
            padding:0;
            font-size: 1.2rem;
            color: #9B9B9B;
            

            
        }
    }

    p{
        margin-bottom: 20px;
    }

    h1{
        margin-top: 10px;
        margin-bottom: 30px;

    }
    h3{
        margin-bottom: 8px;
    }
   
    div{
        display: flex;
        width:100%;

        div{
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-left: 40px;


            

            .lancamentos{
                display: flex;
                width: 100%;
                flex-direction: row;
                line-height: 52px;
                justify-content: space-between;
                margin:0;
                h1{
                color: #000;
                padding:0;
                margin: 0;
                

            }
            h4{
                padding:0;
                margin:0;
                
            }
              
            }

          
            
           
        }
        
    }

    @media(max-width: 1301px){
        width:100%;
    }
    @media(max-width: 1024px){
        width:100%;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        .dash_post_icon{
            display:none;
        }
        .lancamentos{
            p{
                margin-right:25px;
            }
        }
    }
    @media(max-width: 768px){
        width:100%;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        .dash_post_icon{
            display:none;
        }
        .lancamentos{
            p{
                margin-right:25px;
            }
        }
        
    }
    @media(max-width: 480px){
      
    }

`