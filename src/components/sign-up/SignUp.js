import MainContainer from "./MainContainer";
import styled from "styled-components";

export default function SignUp(){
    return(
        <MainContainer>    


            <PagePresentation>


            </PagePresentation>

            <FormContainer>

                
            </FormContainer>   

            <form onSubmit={register}>

                <input type="email" required placeholder="email" disabled={disabled} value={email} onChange={(e) => setEmail(e.target.value)} />

                <input type="password" required placeholder="password" disabled={disabled} value={password} onChange={(e) => setPassword(e.target.value)} />

                <input type="text" required placeholder="username" disabled={disabled} value={name} onChange={(e) => setName(e.target.value)} />

                <input type="url" required placeholder="picture url" disabled={disabled} value={image} onChange={(e) => setImage(e.target.value)} />

                <button type="submit"> {loading} </button>

                <Link to={"/"}> <p>Switch back to log in</p> </Link>

            </form>

        </MainContainer>       

    </Register>
    );
}