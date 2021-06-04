import { BrowserRouter, Route, Switch } from "react-router-dom";
import SignUp from "./components/sign-up/SignUp";
import LogIn from "./components/sign-up/LogIn";
import Timeline from "./components/timeline/Timeline";
import MyPosts from "./components/myPosts/MyPosts";
import UserPosts from "./components/userPosts/UserPosts";
import LikedPosts from "./components/likedPosts/LikedPosts";
import GlobalStyle from "./styles/GlobalStyles";
import UserContext from "./components/UserContext";
import { useEffect, useState } from "react";
import Hashtag from "./components/hashtag/Hashtag";
import PrivateRoute from "./components/PrivateRoute";
import FollowedContext from "./components/FollowedContext";
import axios from "axios";

const getFollowedUsers = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const request = axios.get(
    "https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/follows",
    config
  );

  request.catch((err) => {
    alert("Houve uma falha ao obter os posts, por favor atualize a página!");
  });
  return request;
};

export default function App() {
  const initialUserState = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  const [user, setUser] = useState(initialUserState);
  const [followedUsers, setFollowedUsers] = useState([]);

  useEffect(() => {
    if (initialUserState) {
      getFollowedUsers(user.token).then((res) => {
        setFollowedUsers(res.data.users);
      });
    }
  }, [initialUserState, user.token]);

  return (
    <BrowserRouter>
      <GlobalStyle />

      <Switch>
        <UserContext.Provider value={{ user, setUser }}>
          <FollowedContext.Provider value={{ followedUsers, setFollowedUsers }}>
            <Route path="/" exact component={LogIn}></Route>
            <Route path="/sign-up" exact component={SignUp}></Route>
            <PrivateRoute path={"/timeline"} component={Timeline} />
            <PrivateRoute path={"/my-posts"} component={MyPosts} />
            <PrivateRoute path={"/my-likes"} component={LikedPosts} />
            <PrivateRoute path={"/hashtag/:hashtag"} component={Hashtag} />
            <PrivateRoute path={"/user/:id"} component={UserPosts} />
          </FollowedContext.Provider>
        </UserContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
