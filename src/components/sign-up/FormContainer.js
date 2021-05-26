import styled from "styled-components";

export default styled.div` 
width: 30vw;
background: #333;
font-weight: 700;
padding-top: 30vh; 
display: flex;
justify-content: center;   
padding-left: 0;

form{
    width: 429px;
    height: 65px;
}
h1{
    font-weight: 400;
    font-size:20px;
    line-height: 24px;
    color: #fff;
    text-align: center;  
    text-decoration: underline;          
}
input{
    width: 429px;
    height: 65px;
    margin-bottom: 13px;
    border-radius: 6px;
    background: #fff;
    color: #9F9F9F;  
    padding-left: 13px; 
    font-size: 27px;
}    
button{
    width: 429px;
    height: 65px;
    border-radius: 6px;
    background: #1877F2;
    color: #fff;
    font-size: 27px;
    border: none;
    margin-bottom: 13px;        
}

@media(max-width: 600px) {
    width: 100vw;
    padding-top: 10px;
    background: #333;
    height: auto;
    display flex;
    flex-direction: column;  
    align-itens: center;     
    padding-top: 40px;

    form{
        width: 330px;
        height: auto;
        margin-left: auto;
        margin-right: auto;
    
    input{
        width: 330px;
        height: 55px;
        margin-bottom: 13px;  
        border-radius: 6px;
        background: #fff;
        color: #9F9F9F;   
        padding-left: 13px;
        font-size: 22px;
        
        }
    button{
        width: 330px;
        height: 55px;
        border-radius: 6px;
        background: #1877F2;
        color: #fff;
        font-size: 22px;
        border: none;
        margin-bottom: 21px;        
        }
    h1{            
        font-size: 17px;
        align-itens: center;
        margin-bottom: 10px;
        }
    }
  }
`;