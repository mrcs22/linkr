import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Timeline from "./components/timeline/Timeline";
import GlobalStyle from "./styles/GlobalStyles"
import UserContext from "./components/UserContext";
import { useState } from "react";

export default function App() {

  const [user, setUser] = useState(null);
  
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <UserContext.Provider value={{user, setUser}}>
          <Route path="/" exact component={LogIn} />
          <Route path="/sign-up" exact />
          <Route path="/timeline" exact component={Timeline} />
          <Route path="/my-posts" exact />
          <Route path="/my-likes" exact />
          <Route path="/hashtags/:hashtag" exact />
          <Route path="/user/:id" exact />
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
