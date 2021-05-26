import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import SignUp from "./components/sign-up/SignUp";
import LogIn from "./components/sign-up/LogIn";
import Timeline from "./components/timeline/Timeline";
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
   font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    text-decoration: none;
    
  }`;

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Switch>
        <Route path="/" exact component={LogIn}></Route>
        <Route path="/sign-up" exact ></Route>
        <Route path="/timeline" exact component={Timeline}></Route>
        <Route path="/my-posts" exact></Route>
        <Route path="/my-likes" exact></Route>
        <Route path="/hashtags/:hashtag" exact></Route>
        <Route path="/user/:id" exact></Route>
      </Switch>
    </BrowserRouter>
  );
}
