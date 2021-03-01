import styled from 'styled-components';


export const Container = styled.div`
    
    background-color: #fff;
    
    padding: 30px;
    display: flex;
    flex-direction:column;
    border-radius: 8px;
    margin-bottom: 40px;
    justify-content:center;
    align-items:center;
    background-color: #8C52E5;

    h1{
        background-color: purple;
        width: 60%;
        padding: 20px;
        text-align: center;
        border-radius: 10px 10px 0px 0px ;
        color: #fff;
    }

    @media(max-width: 1000px){

        width: 100%;
        h1{
        width: 100%;
        font-size: 1.0rem;
    }
}
    

`
export const Forms = styled.form`

    background-color:#fff;
    /* padding: 40px; */
    width:60%;

    display: flex;
    justify-content:center;
    flex-direction:column;
    box-shadow: 9px 12px 18px black;
    align-items:center;
    padding: 20px 0px;
    input {
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 15px;
        padding: 10px;
        font-weight: 300;
        text-align:center;
        width: 90%;
        margin-bottom: 15px;
        border-bottom: 1px solid #878686;
    }
    
    textarea{
        width: 90%;
        text-align: center;
        padding-top: 20px;
        resize:none;
    }

    button{
        color: #fff;
        margin-top: 15px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: none;
        border-radius: 25px;
        color: #9B9B9B;   
        padding: 15px 21px;
        width: 90%;
        background-color: purple;
        font-size: 15px;
        &:hover{
            background: #68DE5A;
            color: #fff;
        }

    }

    @media(max-width: 1000px){

        width: 100%;
        
    }


`