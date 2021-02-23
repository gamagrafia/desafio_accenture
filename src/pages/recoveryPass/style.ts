import styled, {css} from "styled-components";

export const RecoveryContainer = styled.div`    
    background-color: #8C52E5;    
    width:100%;
    //height: 100vh;
    
`
export const Header = styled.div`
    height: 10vh;
    img{
        padding: 40px;
    }
    
    @media(max-width: 700px){
        width:100%;
        display: flex;
        justify-content: center;
        align-items:center;
        margin-top: 20px;        
    }
`
export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`
export const Form = styled.form`

    display: flex;
    justify-content:space-between;
    flex-direction:column;
    
    background-color:#fff;
    padding: 40px;
    width: 455px;
    height: 422px;
    border-radius: 8px;
    text-align: center;

    h4{
        font-size:20px;
        font-weight: 700px;
        padding: 5px;
    }

    p{
        font-size: 14px;
        font-weight: 300;
    }

    input{
        display:block;
        border: none;
        font-size: 14px;
        padding: 8px;
        font-weight: 500;
        text-align:left;
        width: 100%;
        margin: 25px 0;
        border-bottom: 1px solid #878686;
    }
    
    button{
        background-color:#68DE5A;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        border: none;
        border-radius: 20px;
        color: #fff;   
        width: 100%; 
        padding: 12px 30px;
        text-align: left;
       
        font-size: 16px;
        font-weight: 500;
        &:hover{
            background: #9B9B9B;            
        }
    }

    img{
        width:16px;
        height: 16px;
        }

    @media(max-width: 700px){
    display:flex;
    justify-content: center;
    align-items: center;  
    width:80%;     
    
}
`


