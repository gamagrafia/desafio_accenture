import styled from 'styled-components';


export const Container = styled.div`
height:100%;
width:100%;
display:flex;
padding: 30px;
background-color: #ededed;

    @media(max-width: 1024px){
        flex-direction: column;

    }
 
`
export const DivPreta = styled.div`
height:100vh;
width:50%;
display:flex;
flex-direction: column;
align-items:flex-start;
justify-content:center;
background-color: #000000;
    h1{ 
        color: #68DE5A;
        font-size: 34px;
        font-weight:500;
        text-align:center;
        width:100%;
        margin-bottom:90px;
;
    }
    p{ 
        color: #68DE5A;
        max-width:300px;
        max-height:100px;
        font-weight: 100px;
        font-size:21px;
        margin: 0px 107px 0px 107px;
;
    }
    img {
        max-height:450px;
    }

    @media(max-width: 1024px){
        width: 100%;

    }
`
export const DivBranca = styled.div`
height:100vh;
width:50%;
display:flex;
flex-direction: column;
align-items:center;
justify-content:center;
background-color: #F8F8F8;


h1{ 
        color:#1D1D1D;
        font-size: 34px;
        font-weight:500;
        width:100%;
        margin-bottom:90px;
        text-align:center;

    }
    p{ 
        color:#1D1D1D;
        max-width:300px;
        max-height:100px;
        font-weight: 100px;
        font-size:21px;
        padding-top:15px;
        margin-right: 50px;
;
;
    }

    @media(max-width: 1024px){
        flex-direction: column;
        width:100%;
    }
`
