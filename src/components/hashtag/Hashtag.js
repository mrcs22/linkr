import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "../UserContext";
import styled from "styled-components";

import Container from "../Container";
import Header from "../header/Header";

import Post from "../post/Post";
import PuffLoader from "../Loader";

export default function Hashtag() {
  const { hashtag } = useParams();
  const [tags, setTags] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const config = { headers: { Authorization: `Bearer ${user.token}` } };

    const promise = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/hashtags/${hashtag}/posts`,
      config
    );

    promise.then((answer) => {
      setTags(answer.data.posts);
    });
  }, [hashtag, user]);

  return (
    <>
      <Header avatar={user.user.avatar} />

      <Container>
        <Text># {hashtag}</Text>

        {tags === null ? (
          <PuffLoader />
        ) : tags.length === 0 ? (
          <Text noPosts>Nenhum Post encontrado</Text>
        ) : (
          tags.map((p) => (
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
