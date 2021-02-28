import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    height:100vh;
    background-color:#8C52E5;

   
    @media(max-width: 800px){
        flex-direction:column;
        padding: 150px 0px;
    }
  
`
export const BoxAnuidade= styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
    justify-content: center;
    width: 50%;



h1{

    padding-bottom: 30px;
    text-align:left;
    font-size:42px; 
    font-weight: bold;
    font-style:normal;
    align-items:center;
    color:#FFFFFF;   
    
}


h3{
    

    margin:0;

    font-style: normal;
    font-weight: 500;
    font-size: 186px;
    align-items: center;
    color:#68DE5A;

}

    @media(max-width: 800px){
        width: 100%;

        
    }
`
export const BoxText= styled.div`
    width:60%;
    font-family:'Roboto';

h2{
    line-height:27px;
    text-align:justify;
    font-size:23px; 
    font-weight: bold;
    font-style:normal;
    align-items:center;
    color:#FFFFFF;   

}
`