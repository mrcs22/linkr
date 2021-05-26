import MainContainer from "./MainContainer";
import PagePresentation from "./PagePresentation";
import FormContainer from "./FormContainer";
import React, { useContext, useState } from 'react';
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../UserContext";

export default function LogIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    let history = useHistory();
    const {setUser} = useContext(UserContext);

    function login(e) {

        e.preventDefault();
        setDisabled(!disabled);  

        const body = {email, password};
    
        const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", body);

        request.then((response) => {
            setUser(response.data);
            history.push("/timeline");
        });

        request.catch(e => {
            setDisabled(!disabled);
            if(e.response.status === 400){
                alert("E-mail ou senha incorreta.");
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

                <form onSubmit={login}>

                    <input type="email" required placeholder="email" disabled={disabled} value={email} onChange={(e) => setEmail(e.target.value)} />

                    <input type="password" required placeholder="password" disabled={disabled} value={password} onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit" disabled={disabled}>Log In</button>

                    <Link to={"/sign-up"}> <h1>First time? Create an account!</h1> </Link>

                </form>
                
            </FormContainer>   

        </MainContainer>      
    );    
}


