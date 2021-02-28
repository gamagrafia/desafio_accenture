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
    

`
export const Forms = styled.form`

    background-color:#fff;
    padding: 40px;
    width:60%;
    border-radius: 8px;
    display: flex;
    justify-content:center;
    flex-direction:column;

    input {
        border: none;
        font-size: 15px;
        padding: 10px;
        font-weight: 300;
        text-align:center;
        width: 90%;
        margin-bottom: 15px;
        border-bottom: 1px solid #878686;
    }

    button{
        margin-top: 15px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: none;
        border-radius: 25px;
        color: #9B9B9B;   
        padding: 15px 21px;
        width: 90%;
        font-size: 15px;
        &:hover{
            background: #68DE5A;
            color: #fff;
        }



`