import React, { useContext, useState } from 'react';
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
// import UserContext from "./UserContext";
import MainContainer from "./MainContainer";
import styled from "styled-components";

export default function LogIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    let history = useHistory();

    function login(e) {

        e.preventDefault();

        setDisabled(!disabled);
  

        const body = {
          email,
          password
        };
    
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);

        request.then((response) => {
            // setUser(response.data);
            history.push("/habitos");
        });

        request.catch(e => {
            setDisabled(!disabled);
            alert("Dados incorretos, insira os dados corretos.");
        });
      } 



    return(

        
       

        <MainContainer>    

            <PagePresentation>

                <h1>linkr</h1>
                <h2>save, share and discover the best links on the web</h2>

            </PagePresentation>

            <FormContainer>

                <form onSubmit={login}>

                    <input type="email" required placeholder="email" disabled={disabled} value={email} onChange={(e) => setEmail(e.target.value)} />

                    <input type="password" required placeholder="password" disabled={disabled} value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit">Log In</button>

                    <Link to={"/sign-up"}> <h1>First time? Create an account!</h1> </Link>

                </form>
                
            </FormContainer>   

        </MainContainer>  
    
    );    
}

const PagePresentation = styled.div` 
    min-width: 70vw;
    background: #151515;
    font-weight: 700;
    padding-left: 10vw;
    padding-top: 30vh; 
    color: #fff;
    padding-left: 10vw;
    
    h1{
        font-family: 'Passion One', cursive;
        font-size:106px;
        line-height: 117px;        
    }
    h2{
        font-size: 43px;
        line-height: 64px;
        font-family: 'Oswald', sans-serif;
        width: 442px;
        height: 128px;
    }
    @media(max-width: 800px) {
        h1 {
         margin-left: 0px;
         margin-top: 10px;
        }
      }
`;

const FormContainer = styled.div` 
    width: 30vw;
    background: #333;
    font-weight: 700;
    padding-top: 30vh; 
    display: flex;
    justify-content: center;
    
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
        
    }
    input{
        width: 429px;
        height: 65px;
        margin-bottom: 13px;
        border-radius: 6px;
        background: #fff;
        color: #9F9F9F;
        padding-left: 17px;
        font-size: 27px;
        border: none;
    }
    button{
        width: 429px;
        height: 65px;
        border-radius: 6px;
        background: #1877F2;
        color: #fff;
        font-size: 27px;
        border: none;
    }
    h1{

        text-decoration: underline;
        align-itens: center;
        margin: 0 auto;
    }
    @media(max-width: 600px) {
        h1 {
         margin-left: 0px;
         margin-top: 10px;
         width: 429px;
         height: 65px;
         text-decoration: underline;
         align-text: center;
        }
      }

`;