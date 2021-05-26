import { useState } from "react";
import styled from "styled-components";
import PostLike from "./PostLike";

export default function Post() {
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [text, setText] = useState(
    " Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material"
  );
  return (
    <Div>
      <div>
        <img
          src="https://midias.folhavitoria.com.br/files/2017/02/estopinha-2.jpg"
          alt="Jailson"
        />
        <PostLike
          likes="13"
          isPostLiked={isPostLiked}
          setIsPostLiked={setIsPostLiked}
        />
      </div>
      <div>
        <Name>Jailson Catioro</Name>
        <Text
          value={text}
          disabled={true}
          onChange={(e) => setText(e.target.value)}
        />
        <LinkInfo>
          <div>
            <p>Como aplicar o Material UI em um projeto React</p>

            <p>
              Hey! I have moved this tutorial to my personal blog. Same content,
              new location. Sorry about making you click through to another
              page.
            </p>

            <a>https://medium.com/@pshrmn/a-simple-react-router</a>
          </div>
          <img src="https://conteudo.imguol.com.br/c/entretenimento/24/2020/09/15/banana-1600197261350_v2_450x337.jpg"></img>
        </LinkInfo>
      </div>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;

  min-height: 276px;
  width: 611px;

  background-color: #171717;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);

  border-radius: 16px;

  padding: 16px 18px;

  margin-top: 29px;

  & > div:first-child {
    display: flex;
    width: 50px;
    flex-direction: column;
    align-items: center;

    img {
      width: 50px;
      height: 50px;

      border-radius: 50%;

      margin-bottom: 19px;
    }

    svg {
      width: 20px;
      height: 18px;
      color: #fff;
      margin-bottom: 4px;
    }

    svg.liked {
      color: #ac0000;
    }

    p {
      width: 50px;

      font-family: "Lato";
      font-size: 11px;

      color: #fff;
      text-align: center;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: 100%;
    }
  }

  div:last-child {
    width: 503px;
  }

  @media (max-width: 611px) {
    min-height: 232px;
    width: 100%;
    min-width: 350px;

    padding: 9px 15px;

    margin-top: 16px;

    & > div:first-child {
      width: 50px;

      img {
        width: 40px;
        height: 40px;

        margin-bottom: 17px;
      }

      svg {
        width: 17px;
        height: 15px;

        margin-bottom: 12px;
      }

      p {
        font-size: 9px;
      }
    }

    div:last-child {
      width: 100%;
    }
  }
`;

const Name = styled.p`
  font-family: "Lato";
  font-size: 19px;
  color: #fff;

  margin-bottom: 10px;

  @media (max-width: 611px) {
    font-size: 17px;
    margin-bottom: 7px;
  }
`;

const Text = styled.textarea`
  height: 44px;
  width: 503px;

  font-family: "Lato";
  font-size: 17px;

  background-color: #fff;

  border: none;
  border-radius: 7px;
  margin-bottom: 5px;
  &:disabled {
    background-color: inherit;
    color: #b7b7b7;

    border: none;

    resize: none;
  }

  @media (max-width: 611px) {
    height: 53px;
    width: 100%;

    font-size: 15px;
    margin-bottom: 13px;
  }
`;

const LinkInfo = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  height: 155px;
  width: 503px;

  border: 1px solid #4d4d4d;
  border-radius: 4px 12px 13px 4px;

  padding-left: 19px;

  img {
    height: 155px;
    width: 153px;
  }

  div {
    p:first-child {
      width: calc(100% -100px);
      font-family: "Lato";
      font-size: 16px;
      color: #cecece;

      margin-top: 24px;
    }

    p {
      width: calc(100% -100px);

      font-family: "Lato";
      font-size: 11px;
      color: #9b9595;

      margin-top: 5px;
    }
    a {
      display: block;

      font-family: "Lato";
      font-size: 11px;
      color: #cecece;

      margin-top: 13px;
    }
  }

  @media (max-width: 611px) {
    height: 115px;
    width: 100%;

    border: 1px solid #4d4d4d;
    border-radius: 4px 12px 13px 4px;

    padding-left: 11px;

    img {
      height: 115px;
      width: 95px;
    }

    div {
      p:first-child {
        width: calc(100% -100px);

        font-size: 11px;

        margin-top: 7px;
      }

      p {
        width: calc(100% -100px);

        font-size: 9px;

        margin-top: 4px;
      }
      a {
        font-size: 9px;

        margin-top: 4px;
      }
    }
  }
`;
