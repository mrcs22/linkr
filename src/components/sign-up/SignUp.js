import MainContainer from "./MainContainer";
import styled from "styled-components";
import React, { useState } from 'react';
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
// import UserContext from "./UserContext";

export default function SignUp(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [pictureUrl, setPictureurl] = useState("");
    const [disabled, setDisabled] = useState(false);
    let history = useHistory();

    function register(e){

        e.preventDefault();
        
        setDisabled(!disabled);
        
        const body = {email, password, username, pictureUrl};

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/sign-up", body);

        request.then((e) => history.push("/"));

        request.catch(e => {
            setDisabled(!disabled);
            if(e.response.status === 400){
                alert("O e-mail inserido já está cadastrado.");
            }            
        });

    }

    return(

        <MainContainer>    

            <PagePresentation>

                <h1>linkr</h1>
                <h2>save, share and discover the best links on the web</h2>

            </PagePresentation>

            <FormContainer>

                <form onSubmit={register}>

                    <input type="email" required placeholder="email" disabled={disabled} value={email} onChange={(e) => setEmail(e.target.value)} />

                    <input type="password" required placeholder="password" disabled={disabled} value={password} onChange={(e) => setPassword(e.target.value)} />

                    <input type="text" required placeholder="username" disabled={disabled} value={username} onChange={(e) => setUsername(e.target.value)} />

                    <input type="url" required placeholder="picture url" disabled={disabled} value={pictureUrl} onChange={(e) => setPictureurl(e.target.value)} />

                    <button type="submit" disabled={disabled}>Sign Up</button>

                    <Link to={"/"}> <h1>Switch back to log in</h1> </Link>

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
    @media(max-width: 600px) {
        width: 100vw;
        padding-top: 10px;
        display flex;
        flex-direction: column;
        align-itens: center;

        h1 {
            font-size: 76px;
            line-height: 84px;        
        }
        h2{
            font-size: 23px;
            line-height: 34px;
            width: 132px;
            height: 67px;
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
        margin-bottom: 13px;
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