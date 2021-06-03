import axios from "axios";
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import useInterval from "../../helpers/useInterval";

import Container from "../Container";
import Header from "../header/Header";
import UserContext from "../UserContext";
import NewPost from "../post/NewPost";
import Post from "../post/Post";
import PuffLoader from "../Loader";
import HashtagTrend from "../hashtag/HashtagTrend";

export default function Timeline() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState(null);
  const [likedUsers, setLikedUsers] = useState(null)

  useEffect(() => {
    getPosts(user.token);
    getLikedUsers(user.token)
  }, [user.token]);

  useInterval(() => {
    getPosts(user.token);
  }, 15000);

  
  function getPosts(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const req = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/following/posts",
      config
    );

    req.then((r) => {
      setPosts(r.data.posts);
    });

    req.catch((r) => {
      alert("Houve uma falha ao obter os posts, por favor atualize a página!");
    });
  }

const getLikedUsers = (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/follows", config)
  request.then((res) => {
    setLikedUsers(res.data.users)
  })
  request.catch((err) => {
    alert("Houve uma falha ao obter os posts, por favor atualize a página!");
  })
}

  return (
    <>
      <Header avatar={user.user.avatar} />
      <Container>
        <Text>timeline</Text>
        <HashtagTrend></HashtagTrend>
        <NewPost getPosts={() => getPosts(user.token)} token={user.token} />
        {posts === null ? (
          <PuffLoader />
        ) : likedUsers.length === 0 ? (
          <Text noPosts>Você não segue ninguém ainda.</Text>
        ) : posts.length === 0 ? (
          <Text noPosts>Nenhuma publicação encontrada</Text>
        ) : (
          posts.map((p) => (
            <Post
              key={p.id}
              postId={p.id}
              username={p.user.username}
              userId={p.user.id}
              avatar={p.user.avatar}
              text={p.text}
              link={p.link}
              linkTitle={p.linkTitle}
              linkDescription={p.linkDescription}
              linkImage={p.linkImage}
              getPosts={getPosts}
              likes={p.likes}
              comments={p.commentCount}
              likedUsers={likedUsers}
              user={user}
            />
          ))
        )}
      </Container>
    </>
  );
}

const Text = styled.p`
  font-family: "Oswald";

  font-size: ${({ noPosts }) => (noPosts ? "30px" : "43px")};
  color: ${({ noPosts }) => (noPosts ? "#bababa" : "#fff")};

  margin-left: ${({ noPosts }) => (noPosts ? "130px" : 0)};
  margin-top: ${({ noPosts }) => (noPosts ? "20px" : 0)};
  margin-bottom: 45px;

  @media (max-width: 611px) {
    font-size: 33px;

    margin-bottom: 29px;
    margin-left: 17px;
  }
`;
