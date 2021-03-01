import styled from 'styled-components';

import img from '../../../img/img.png';

export const Container =styled.div`
    background: url(${img});
    background-size:cover;
    background-repeat: no-repeat;
    width:100%;
    display:flex;
    height:100vh;
    padding-left: 150px;
    background-color: #68DE5A;

    div{
      width:100%;
    }
    @media(max-width: 900px){
    
    padding:0px 100px;
  }
`
export const BoxTecnologia= styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:flex-start;
    
    width:50%;
    height:100%;
    
    h5{
      padding-bottom: 20px;
      text-align:left; 
      font-size:42px; 
      font-weight:bold;
      font-style:normal;
      color:#FFFFFF;   
    }
  h4{
    line-height:30px; 
    text-align:left;
    font-size:23px;
    height:27px;
    width:40%;
    font-style:normal;
    align-items:center;
    color:#FFFFFF;   
  }

  @media(max-width: 900px){
    
    
    h5{
      font-size: 40px;
    }
    h4{
      width: 70%;
    }
  }
`