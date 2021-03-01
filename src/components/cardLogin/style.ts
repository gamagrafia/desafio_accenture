import styled from 'styled-components';

export const Container = styled.div`
    width:430px;
    height:450px;
    background-color:#FBFBFB;
    margin:auto;
    border-radius:5px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;  

    h1{ 
        font-size: 23px;
        font-weight:300px;
        margin:18px 0 5px;
        text-align: center;
    }

    input {
        display: initial;
                    border: none;
                    font-size: 16px;
                    padding: 8px;
                    font-weight: 300;
                    text-align:left;
                    width: 85%;
                    margin: 30px 25px;
                    border-bottom: 2px solid #666;
                    transition: 0.5s;
                    &:focus{
                        border-bottom: 3px solid #8C52E5;
                    }

    }  

    button{
                margin: auto;
                margin-top: 45px;
                display: flex;
                justify-content: space-between;
                cursor: pointer;
                border: none;
                border-radius: 100px;
                padding: 15px 30px;
                width: 80%;
                text-align: left;
                transition: 0.5s;
                color: #8C52E5;
                font-size: 20px;
                font-weight: 300;
                border: 3px solid #8C52E5;
                margin: 0 auto;
                &:hover{
                    background: #68DE5A;
                }
    }
`
export const LinkSections = styled.div`
    display: block;
    text-align: center;
    margin: 25px auto 15px;
    a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`