import MainContainer from "./MainContainer";
import styled from "styled-components";

export default function LogIn(){
    return(

        <MainContainer>

            <PagePresentation>


            </PagePresentation>

            <FormContainer>

                
            </FormContainer>
            

            <form onSubmit={register}>

                <input type="email" required placeholder="email" disabled={disabled} value={email} onChange={(e) => setEmail(e.target.value)} />

                <input type="password" required placeholder="password" disabled={disabled} value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit"> {loading} </button>

                <Link to={"/"}> <p>First time? Create an account!</p> </Link>

            </form>

        </MainContainer> 
    );
}