import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./components/sign-up/SignUp";
import LogIn from "./components/sign-up/LogIn";
import Timeline from "./components/timeline/Timeline";
import MyPosts from "./components/myPosts/MyPosts";
import UserPosts from "./components/userPosts/UserPosts";
import LikedPosts from "./components/likedPosts/LikedPosts";
import GlobalStyle from "./styles/GlobalStyles";
import UserContext from "./components/UserContext";
import { useState } from "react";
import Hashtag from "./components/hashtag/Hashtag";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  const initialUserState =  (localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null)
  
  const [user, setUser] = useState(initialUserState);

  return (
    <BrowserRouter>
      <GlobalStyle />

      <Switch>
        <UserContext.Provider value={{ user, setUser }}>
          <Route path="/" exact component={LogIn}></Route>
          <Route path="/sign-up" exact component={SignUp}></Route>
          <PrivateRoute path={"/timeline"} component={Timeline}/>
          <PrivateRoute path={"/my-posts"} component={MyPosts}/>
          <PrivateRoute path={"/my-likes"} component={LikedPosts}/>
          <PrivateRoute path={"/hashtag/:hashtag"} component={Hashtag}/>
          <PrivateRoute path={"/user/:id"} component={UserPosts}/>
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
