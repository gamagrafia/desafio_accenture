import styled from 'styled-components';

import backgroundImg from '../../../img/happyhome.png';

export const Container = styled.div`
    background-color: #8C52E5;    
    width:100%;
    height: 100vh;

    


    
`

export const Header = styled.div`
    height: 10vh;
    img{
        padding: 40px;

    }

    /* @media(max-width: 700px){        
        width:100vw;
        display: flex;
        justify-content: center;
        align-items:center;
        margin-top: 20px;        
    } */

`

export const SectionOne = styled.section`

    padding: 0 135px 0 180px;  
    //width:100vw;
    /* padding: 0px 100px; */

    background-image: url(${backgroundImg});
    background-repeat: no-repeat;
    background-position: bottom;
    /* background-size:contain; */
   
    height: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    /* @media(max-width: 700px){
        flex-wrap: wrap;
        justify-content:center;
        /* background-image: unset; */
        /* padding:0; */
    /* } */ 

    @media(max-width: 1301px){
        padding: 170px 90px;

    }
    @media(max-width: 1024px){
        padding: 170px 60px;

    }
    @media(max-width: 900px){
      display: flex;
      flex-direction: column;
      padding: 170px 100px;
      width: 100%;
      
    }
    @media(max-width: 480px){
      
    }
    

`

export const SideLeft = styled.div`

    width: 20%;

    h2{
        
        font-size: 29px;
        color: #fff;
        font-weight: 300;
        margin-bottom: 24px;
        text-align: left;
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
        //height:
        text-align: left;
        transition: 0.5s;
        color: #8C52E5;
        font-size: 16px;
        font-weight: 500;
        &:hover{
            background: #68DE5A;
            
        }
    }
       

        /* @media(max-width: 700px){
        margin: 50px 0;
        text-align: center;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    } */
    @media(max-width: 1301px){
        width: 30%;
        h2{
        
        font-size: 25px;
        
        }
        button {
            width: 100%;
        }
    }
    @media(max-width: 1024px){

        h2{
        
        font-size: 22px;
        
        }
        button {
            width: 100%;
        }
    }
    @media(max-width: 900px){
      width: 100%;
      margin-bottom: 20px;
      
      h2{
          /* display: none; */
          font-size: 18px;
          width: 50%;
          margin-bottom: 10px;
         
          
      }
      button {
          width: 40%;
          margin-bottom: 20px;
          /* text-align: right; */
      }
    }
    @media(max-width: 480px){
      
    }
    
`

export const SideRight = styled.div`
    
`


export const Form = styled.form`
    
    background-color:#fff;
    padding: 40px;
    width:30%;
    border-radius: 8px;
    display: flex;
    flex-direction:column;

    h4{
        font-size:25px;
        font-weight: 700;
        margin-bottom: 30px;

    }

    input{
        /* display:block; */
        border: none;
        font-size: 20px;
        padding: 8px;
        font-weight: 300;
        text-align:left;
        width: 100%;
        margin-bottom: 30px;
        border-bottom: 1px solid #878686;
    }
    
    button{
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* cursor: pointer; */
        border: none;
        border-radius: 25px;
        color: #9B9B9B;   
        padding: 15px 21px;
        text-align: left;
        width: 100%;
        font-size: 18px;
        &:hover{
            background: #68DE5A;
            color: #fff;
        }
    }

    img{
            width:16px;
            height: 16px;
        }

    /* @media(max-width: 700px){
    margin-bottom: 50px;

    } */
    @media(max-width: 1500px){
        width: 40%;

    }
    @media(max-width: 1024px){
        width: 50%;
        background-color: rgba(243, 243, 243, 0.85);

    }
    @media(max-width: 900px){
        width: 100%;
        padding:20px 20px;
        background-color: rgba(243, 243, 243, 0.70);
    
     h4{
        font-weight: 700;
        margin-bottom: 20px;
        font-size: 1.5rem;
    }

    input{
        font-size: 1.0rem;
        border-width: 0px 0px 1px 0px;
        padding: 8px;
        margin-bottom: 15px;
        border-color: #878686;
    }

    input + input {
         margin-top: 0px;
    }
    button{
        margin-top: 13px;
        padding: 10px;
            
           
        }

    }
    @media(max-width: 480px){
      
    }

`

