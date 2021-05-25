import MainContainer from "./MainContainer";
import styled from "styled-components";
import React, { useContext, useState } from 'react';
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import UserContext from "./UserContext";

export default function SignUp(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [pictureUrl, setPictureurl] = useState("");

    const [disabled, setDisabled] = useState(false);

    function register(e){

        e.preventDefault();
        
        setDisabled(!disabled);
        
        const body = {email, password, username, pictureUrl};

        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/sign-up", body);

        request.then((e) => history.push("/"));

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

                <form onSubmit={register}>

                    <input type="email" required placeholder="email" disabled={disabled} value={email} onChange={(e) => setEmail(e.target.value)} />

                    <input type="password" required placeholder="password" disabled={disabled} value={password} onChange={(e) => setPassword(e.target.value)} />

                    <input type="text" required placeholder="username" disabled={disabled} value={username} onChange={(e) => setUsername(e.target.value)} />

                    <input type="url" required placeholder="picture url" disabled={disabled} value={image} onChange={(e) => setPicture(e.target.value)} />

                    <button type="submit">Sign Up</button>

                    <Link to={"/"}> <p>Switch back to log in</p> </Link>

                </form>
                
            </FormContainer>   

        </MainContainer>       
    );
}

const PagePresentation = styled.div` 
    background: #151515;
    font-weight: 700;
    padding-left: 144px;
    padding-top: 300px; 
    
    h1{
        font-size:106px;
        line-height: 117px;
    }
    h2{
        font-size: 43px;
        line-height: 64px;
    }
    @media(max-width: 800px) {
        h1 {
         margin-left: 0px;
         margin-top: 10px;
        }
      }
`;

const FormContainer = styled.div` 
    background: #151515;
    font-weight: 700;
    padding-left: 144px;
    padding-top: 300px; 
    
    h1{
        font-size:106px;
        line-height: 117px;
    }
    h2{
        font-size: 43px;
        line-height: 64px;
    }
    @media(max-width: 800px) {
        h1 {
         margin-left: 0px;
         margin-top: 10px;
        }
      }

`;