import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

import Container from "../Container";
import NewPost from "./NewPost";
import Post from "../timeline/Post";
import PuffLoader from "./Loader";

export default function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Container>
      <StyledP>timeline</StyledP>
      <NewPost getPosts={getPosts} />
      {posts.length === 0 ? (
        <PuffLoader />
      ) : (
        posts.map((p) => (
          <Post
            key={p.id}
            username={p.user.username}
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
  );

  function getPosts() {
    const token = "7aec3998-8be0-451f-b134-c9044f0a4abb";

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
      console.log(r.data);
      setPosts(r.data.posts);
    });

    req.catch((r) => {
      alert("Houve uma falha ao obter os posts, por favor atualize a página!");
    });
  }
}

const StyledP = styled.p`
  font-family: "Oswald";

  font-size: 43px;
  color: #fff;

  margin-bottom: 45px;

  @media (max-width: 611px) {
    font-size: 33px;

    margin-bottom: 29px;
    margin-left: 17px;
  }
`;
