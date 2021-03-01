import styled from 'styled-components';

export const Container = styled.main`
display:flex;
height:100vh;
width:100%;
background-color: #fff;

    

    .titlePage{
        margin:150px 0px 50px;
        font-size:50px;
        font-weight:900;
        
    } 



    
    @media(max-width: 1024px){
       flex-direction:column;
    }
   


    
`

export const BxHomeFive = styled.div`
    width:50%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height: 100%;

    h1,p {
        width: 50%;
        
       
    }

    h1{
        font-size:44px;
        font-weight:700;
        padding-bottom: 50px;
        text-align:left;
    }

    p {
        font-weight:400px;
        font-size:20px;
        line-height: 40px;
    }

    @media(max-width: 1024px){
       width: 100%;
       margin: 10px 0px 0px 0px;

       h1{
        font-size:25px;
        font-weight:900;
        padding-bottom: 20px;
    }

    p {
        font-weight:400px;
        font-size:16px;
        line-height: 20px;
    }
    div{
        display:flex;
        justify-content:center;
        img{
            width: 65%;
        }
    }
       
    }

`

