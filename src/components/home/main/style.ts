import styled from 'styled-components';

import backgroundImg from '../../../img/happyhome.png';

export const Container = styled.div`
    background-color: #8C52E5;    
    width:100%;

    
`

export const Header = styled.div`
  
    img{
        padding: 40px;
    }
    @media(max-width: 1024px){  
        height:100px;      
        width:100%;
        display: flex;
        justify-content: center;
        align-items:center;
        margin-top: 20px;        
    }
`

export const SectionOne = styled.section`
    padding: 0 135px 0 180px;
    
    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 800px;   
    height: 90vh;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 1024px){
        width:100;
        height:900px;
        background-image: unset;
        padding:0;
        flex-direction: column;
        justify-content:center;
        Form{
            margin-top:40px;
        }
        
        
    }
    
`

export const SideLeft = styled.div`
    h2{
        width: 280px;
        font-size: 29px;
        color: #fff;
        font-weight: 300;
        margin-bottom: 24px;
    }
    button{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        cursor: pointer;
        border: none;
        border-radius: 20px;
        padding: 12px 21px;
        width: 250px;
        text-align: left;
        transition: 0.5s;
        color: #8C52E5;
        font-size: 16px;
        font-weight: 500;
        &:hover{
            background: #68DE5A;
        }
    }
        img{
            width:16px;
            height: 16px;
        }
        @media(max-width: 700px){
        
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h2{
            display:none;
        }
        button{
            margin-top:80px;
        }
    }
    
`

export const SideRight = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    
`


export const Form = styled.form`
    
    background-color:#fff;
    padding: 30px;
    width: 360px;
    border-radius: 8px;
    margin-bottom: 40px;
    h2{
        font-size:19px;
        font-weight: 500;
    }
    input{
        display:block;
        border: none;
        font-size: 1.4rem;
        padding: 10px;
        font-weight: 300;
        text-align:left;
        width: 100%;
        margin: 25px 0;
        border-bottom: 1px solid #878686;
    }
    
    button{
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
        border: none;
        border-radius: 20px;
        color: #fff;

        background-color:#8C52E5;
        width: 100%; 
        padding: 12px 21px;
        text-align: left;
        width: 270px;
        font-size: 1.0rem;
        &:hover{
            background: #68DE5A;
        }
    }
    img{
            width:16px;
            height: 16px;
        }
    @media(max-width: 1024px){
        margin-bottom: 50px;
    }
`