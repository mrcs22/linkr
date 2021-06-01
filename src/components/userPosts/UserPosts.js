import axios from "axios";
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import Container from "../Container";
import Header from "../header/Header";
import UserContext from "../UserContext";

import Post from "../post/Post";
import PuffLoader from "../Loader";
import { useParams } from "react-router";
import FollowButton from "./FollowButton";
import HashtagTrend from "../hashtag/HashtagTrend";

export default function UserPosts() {
  const { user } = useContext(UserContext);
  const [selectedUserInfo, setSelectedUserInfo] = useState([]);
  const { id } = useParams();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    getPostsAndSelectedUserInfo(user.token);
  }, [user.token]);

  return (
    <>
      <Header avatar={user.user.avatar} />
      <Container>
        <Text>
          {selectedUserInfo.length === 0
            ? ""
            : ` ${selectedUserInfo.username}'s posts`}
        </Text>
        <FollowButton/>
        <HashtagTrend/>
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
              likes={p.likes}
            />
          ))
        )}
      </Container>
    </>
  );

  function getPostsAndSelectedUserInfo(token) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    getSelectedUserInfo(config);
    getPosts(config);
  }

  function getPosts(config) {
    const req = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/${id}/posts`,
      config
    );

    req.then((r) => {
      setPosts(r.data.posts);
    });

    req.catch((r) => {
      alert(
        "Houve uma falha ao obter os post do usuário, por favor atualize a página!"
      );
    });
  }

  function getSelectedUserInfo(config) {
    const req = axios.get(
      `https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/users/${id}`,
      config
    );

    req.then((r) => {
      setSelectedUserInfo(r.data.user);
    });

    req.catch((r) => {
      alert(
        "Houve uma falha ao obter dados do usuário, por favor atualize a página!"
      );
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
