import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    /* align-items: center;
    justify-content:center; */
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

    /* padding: 170px;
    width:100%;
    height:50px;
    font-family:'Roboto'; */

h1{
    /* line-height:90px; */
    /* margin-bottom: 40px; */
    padding-bottom: 30px;
    text-align:left;
    font-size:42px; 
    font-weight: bold;
    font-style:normal;
    align-items:center;
    color:#FFFFFF;   
    
}


h3{
    
    /* line-height:217,97px; */
    margin:0;
    /* text-align:left; */
    font-style: normal;
    font-weight: 500;
    font-size: 186px;
    align-items: center;
    color:#68DE5A;

}

    @media(max-width: 800px){
        width: 100%;

        /* h1{
            padding-top: 150px;
        }
        h3{
            padding-bottom: 100px;
        } */

        
    }
`
export const BoxText= styled.div`
    /* padding: 0 0 0 170px; */
    width:60%;
    /* height:50px; */
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
// export const BoxZero= styled.div`
//     /* padding: 0 0 0 242px;
//     width:100%;
//     height:200px;
//     font-family:'Roboto'; */
//     display: flex;
//     flex-direction: column;
//     height: 100%;
//     align-items: center;
//     justify-content: center;
//     width: 50%;

// h3{
    
//     /* line-height:217,97px; */
//     margin:0;
//     /* text-align:left; */
//     font-style: normal;
//     font-weight: 500;
//     font-size: 186px;
//     align-items: center;
//     color:#68DE5A;

// }

// @media(max-width: 1024px){
//         width: 100%;
//         /* background-color: red; */
//     }
// `