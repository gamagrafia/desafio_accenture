import styled from 'styled-components';


export const Container = styled.div`
    
    background-color: #fff;
    padding: 55px;
    display: flex;
    flex-direction:row;
    border-radius: 8px;
    justify-content:space-aroud;
    align-items:center;

    h1{
        padding:8px;
        font-size: 58px;
        font-weight:700px;
        margin:18px 0 5px;
        text-align: center;
        font-family: 'Roboto', sans-serif;
    }
    

`
export const Forms = styled.form`

    width:500px;
    height:500px;
    /* background-color:#FBFBFB; */
    margin:auto;
    border-radius:3px;
    display:flex;
    flex-direction:column;
    justify-content: space-between;  

    textarea{
        resize:none;
        width:400px;
        height:100px;
        margin: 10px;
        &:focus{
        border: 3px solid #8C52E5;
    
                } 
         &::placeholder{
         font-size:18px;
         padding:10px;
         text-align:center;
           

}
        
    }

    h1{ 
        
        font-size: 23px;
        font-weight:300px;
        margin:18px 0 5px;
        text-align: center;
    }

    input {
                    display: initial;
                    border: none;
                    font-size: 20px;
                    padding: 7px;
                    font-weight: 300;
                    text-align:center;
                    width: 400px;
                    margin: 10px;
                    border: 2px solid #666;
                    border-radius:8px;
                    transition: 0.5s;
                    &:focus{
                        border: 3px solid #8C52E5;    
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