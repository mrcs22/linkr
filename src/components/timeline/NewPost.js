import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export default function NewPost() {
  const [text, setText] = useState("");
  const [link, setLink] = useState("");
  const [isSavingPost, setIsSavingPost] = useState(false);

  return (
    <Post>
      <div>
        <img
          src="https://midias.folhavitoria.com.br/files/2017/02/estopinha-2.jpg"
          alt="Jailson"
        ></img>
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
    const token = "7aec3998-8be0-451f-b134-c9044f0a4abb";

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
      console.log(r.data);
      clearInputs();
      setIsSavingPost(false);
    });

    req.catch((r) => {
      console.log(r.data);
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
`;

const Title = styled.p`
  font-family: "Lato";
  font-size: 20px;
  color: #707070;

  margin-bottom: 15px;
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

  position: relative;
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
`;
