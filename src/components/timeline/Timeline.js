import axios from "axios";
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import Container from "../Container";
import Header from "../header/Header";
import UserContext from "../UserContext";
import NewPost from "./NewPost";
import Post from "../timeline/Post";
import PuffLoader from "./Loader";

export default function Timeline() {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState(null);
  console.log(user);

  useEffect(() => {
    getPosts(user.token);
  }, []);

  return (
    <>
      <Header avatar={user.user.avatar} />
      <Container>
        <Text>timeline</Text>
        <NewPost getPosts={() => getPosts(user.token)} token={user.token} />
        {posts === null ? (
          <PuffLoader />
        ) : posts.length === 0 ? (
          <Text noPosts>Nenhum Post encontrado</Text>
        ) : (
          posts.map((p) => (
            <Post
              key={p.id}
              username={p.user.username}
              userId={p.user.id}
              avatar={p.user.avatar}
              text={p.text}
              link={p.link}
              linkTitle={p.linkTitle}
              linkDescription={p.linkDescription}
              linkImage={p.linkImage}
            />
          ))
        )}
      </Container>
    </>
  );

  function getPosts(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const req = axios.get(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts",
      config
    );

    req.then((r) => {
      setPosts(r.data.posts);
    });

    req.catch((r) => {
      console.log(r.message);
      alert("Houve uma falha ao obter os posts, por favor atualize a página!");
    });
  }
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
