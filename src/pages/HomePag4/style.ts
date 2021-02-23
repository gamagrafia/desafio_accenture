import styled from 'styled-components';

import img from '../../img/img.png';

export const Containe =styled.div`
    background: url(${img});
    background-position: center;
    align-items:center;
    display:flex;
    height:700px;
    fill:Solid;
    background-color: #68DE5A;

    div{
      width:100%;
    }
`
export const BoxTecnologia= styled.div`
    padding: 170px;
    width:459px;
    height:50px;
    font-family:'Roboto';
  h4{
    line-height:27px; 
    text-align:left;
    font-size:23px;
    height:27px;
    font-style:normal;
    align-items:center;
    color:#FFFFFF;   
  }
`
export const BoxComplexidade = styled.div`
    padding: 0 0 0 170px;
    width:459px;
    height:50px;
    font-family:'Roboto';

h5{
    line-height:49,22px;
    text-align:left; 
    font-size:42px; 
    font-weight:s bold;
    font-style:normal;
    align-items:center;
    color:#FFFFFF;   
}
`
