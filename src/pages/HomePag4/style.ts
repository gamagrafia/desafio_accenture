import styled from 'styled-components';

import img from '../../img/img.png';

export const Container =styled.div`
    background: url(${img});
    background-size:cover;
    background-repeat: no-repeat;
    width:100%;
    display:flex;
    height:100vh;
    padding-left: 150px;
    /* fill:Solid; */
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
    /* font-family:'Roboto'; */
    
    h5{
      padding-bottom: 20px;
      text-align:left; 
      font-size:42px; 
      font-weight:bold;
      font-style:normal;
      /* align-items:center; */
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
// export const BoxComplexidade = styled.div`
//     /* padding: 0 0 0 170px;
//     width:459px;
//     height:50px;
//     font-family:'Roboto'; */
//     display: flex;
//     flex-direction: column;
//     justify-content:center;
//     align-items:center;
//     width:50%;
//     height:100%;

// h5{
//     line-height:49,22px;
//     text-align:left; 
//     font-size:42px; 
//     font-weight:s bold;
//     font-style:normal;
//     align-items:center;
//     color:#FFFFFF;   
// }
// `
