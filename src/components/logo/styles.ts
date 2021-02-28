import styled from 'styled-components';

export const LogoImg = styled.img`
    position: absolute;
    width: 291px;
    height: 65px;
    left: 73px;
    top: 64px;

    @media (max-width: 750px){
        width:210px;
        height: 51px;
        left: 60px;
        top: 80px
    }
    @media(max-width: 480px){
        width:130px;
        height: 31px;
        left: 19px;
        top:23px;
    }
`;
