import axios from "axios";
import { useState, useContext } from "react";
import styled from "styled-components";

import UserContext from "../UserContext";

export default function NewPost({ getPosts, token }) {
  const { user } = useContext(UserContext);
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [isSavingPost, setIsSavingPost] = useState(false);

  return (
    <Post>
      <div>
        <img src={user.user.avatar} alt={user.user.username}></img>
      </div>
      <div>
        <Title>O que você tem pra favoritar hoje?</Title>
        <StyledForm onSubmit={saveNewPost}>
          <Input
            disabled={isSavingPost}
            value={link}
            onChange={(e) => setLink(e.target.value)}
            type="url"
            required
            small
            placeholder="http://..."
          />
          <TextArea
            disabled={isSavingPost}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Muito irado esse link falando de #javascript"
          />
          <Button
            disabled={isSavingPost}
            type="submit"
            value={isSavingPost ? "Publicando..." : "Publicar"}
          />
        </StyledForm>
      </div>
    </Post>
  );

  function saveNewPost(e) {
    e.preventDefault();
    setIsSavingPost(true);

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const req = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/linkr/posts",
      {
        text,
        link,
      },
      config
    );

    req.then((r) => {
      clearInputs();
      setIsSavingPost(false);
      getPosts();
    });

    req.catch((r) => {
      alert("Houve um erro ao publicar o seu link");
      setIsSavingPost(false);
    });
  }

  function clearInputs() {
    setLink("");
    setText("");
  }
}

const Post = styled.div`
  display: flex;
  justify-content: space-between;

  min-height: 209px;
  width: 611px;

  background-color: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 16px;

  padding: 16px 18px;

  div:first-child {
    img {
      width: 50px;
      height: 50px;

      border-radius: 50%;
    }
  }

  div:last-child {
    width: 503px;
  }

  @media (max-width: 611px) {
    min-height: 164px;
    width: 100%;
    min-width: 350px;
    border-radius: 0px;
    padding: 10px 16px;

    div:first-child {
      display: none;
    }

    div:last-child {
      width: 100%;
    }
  }
`;

const Title = styled.p`
  font-family: "Lato";
  font-size: 20px;
  font-weight: 300;
  color: #707070;

  margin-bottom: 15px;

  @media (max-width: 611px) {
    font-size: 17px;
    text-align: center;
    margin-bottom: 10px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Input = styled.input`
  width: 503px;
  height: 30px;

  background-color: #efefef;

  border-radius: 5px;
  border: none;

  padding: 8px 12px;

  margin-bottom: 5px;

  @media (max-width: 611px) {
    width: 100%;
  }
`;

const TextArea = styled.textarea`
  min-width: 503px;
  max-width: 503px;
  min-height: 66px;

  background-color: #efefef;

  border-radius: 5px;
  border: none;

  padding: 8px 12px;

  margin-bottom: 5px;

  @media (max-width: 611px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

const Button = styled.input`
  height: 31px;
  width: 112px;

  font-family: "Lato";
  font-size: 14px;
  font-weight: 700;
  color: #fff;

  background-color: #1877f2;

  border-radius: 5px;
  border: none;

  @media (max-width: 611px) {
    height: 22px;
    font-size: 13px;
  }
`;
