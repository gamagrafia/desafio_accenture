import styled from 'styled-components';

export const ErrorContainer = styled.main`
    background-color: #8C52E5;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Error = styled.div`
    background-color: #fff;
    width: 25%;
    height: 422px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;

    h3{
        margin-top: 40px;
        margin-bottom: 40px;
        text-align: center;
        font-size: 1.4rem;
        color: #8C52E5;
        width: 70%;

    }
    
    a{
        background-color: #68DE5A;
        border-radius: 35px;
        font-size: 1.5rem;
        width: 78%;
        border:0;
        margin-top: 40px;
        padding: 10px 50px;
        text-align: start;
        display: flex;
        justify-content: space-between;
        align-items:center;
        transition: 0.5s;
        color: #fff;
        text-decoration:none;

        &:hover{
            transform: 0.5s;
            background: #90ee90;
            color: #000;
        }
                
    }

    //Medias Queries
    
    @media(max-width: 1301px){
        width: 40%;
    }
    @media(max-width: 1024px){
        width: 50%;
        h3{
            width: 60%;
        }
    }
    @media(max-width: 768px){
        width: 60%;
    }
    @media(max-width: 480px){
        width: 70%;
        margin-top: 30px;
        h3{
            font-size: 0.9rem;
        }
    }
    
  

    
`
