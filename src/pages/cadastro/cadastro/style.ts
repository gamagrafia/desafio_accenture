import styled, {css} from 'styled-components';
import happyFace from "../../../img/happy-face.png";

export const Container = styled.div`
    background-color: #8C52E5;
    height: 100%;
    min-height: 100vh;
    background-image: url(${happyFace});
    background-repeat: no-repeat;
    background-position: bottom;
`
export const Header = styled.div`
    img{ margin: 15px;}
`
export const Main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    
    }`

export const TitleForm = styled.h1`
    font-size: 19px;
    color: #1D1D1D;
`
export const Form= styled.form `
    display:flex;
    flex-direction: column;
    justify-content:space-around;
    background: red;
    width: 300px;
    height: 400px;
    border-radius: 3px;

`