import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Timeline from "./components/timeline/Timeline";
import GlobalStyle from "./styles/GlobalStyles"

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact>
            <Header />
        </Route>
        <Route path="/sign-up" exact></Route>
        <Route path="/timeline" exact component={Timeline}></Route>
        <Route path="/my-posts" exact></Route>
        <Route path="/my-likes" exact></Route>
        <Route path="/hashtags/:hashtag" exact></Route>
        <Route path="/user/:id" exact></Route>
      </Switch>
    </BrowserRouter>
  );
}
