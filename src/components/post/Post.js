import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost"
import PostLike from "./PostLike";

export default function Post(props) {
  const {
    postId,
    username,
    userId,
    avatar,
    text,
    link,
    linkTitle,
    linkDescription,
    linkImage,
    getPosts,
    likes
  } = props;

  const postText = highlightHashtags(text);

  const [isPostLiked, setIsPostLiked] = useState(false);

  return (
    <Div>
      <div>
        <Link to={`/user/${userId}`}>
          <img src={avatar} alt={username} />
        </Link>
        <PostLike
          likes={likes}
          postId={postId}
          isPostLiked={isPostLiked}
          setIsPostLiked={setIsPostLiked}
        />
      </div>

      <DeletePost ownerId={userId} postId={postId} getPosts={getPosts}/>

      <div>
        <Name>{username}</Name>

        <EditPost ownerId={userId} text={text} postText={postText} postId={postId} highlightHashtags={highlightHashtags}/>

        <LinkInfo>
          <div>
            <p>{linkTitle}</p>

            <p>{linkDescription}</p>

            <a href={link} target="_blank" rel="noreferrer">
              {link}
            </a>
          </div>
          <img src={linkImage} alt={linkTitle} />
        </LinkInfo>
      </div>
    </Div>
  );

  function highlightHashtags(text) {
    let newText = text.split(" ");

    newText = newText.map((h, i) => {
      if (h.startsWith("#")) {
        return (
          <Hashtag key={i} to={`hashtag/${h.replace("#", "")}`}>
            {h}
          </Hashtag>
        );
      }
      return <span key={i}>{" " + h + " "}</span>;
    });

    return newText;
  }
}

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
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

    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      width: calc(100% - 50px);
    }

    p {
      word-break: break-all;
      word-wrap: break-word;
    }
    a {
      word-break: break-all;
      word-wrap: break-word;
    }
  }

  @media (max-width: 611px) {
    min-height: 232px;
    width: 100%;
    min-width: 350px;

    padding: 9px 15px;
    border-radius: 0px;
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

    & > div:last-child {
      width: calc(100% - 55px);
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

const LinkInfo = styled.div`
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  min-height: 155px;
  width: 100%;
  max-width: 503px;

  border: 1px solid #4d4d4d;
  border-radius: 4px 12px 13px 4px;

  padding-left: 19px;

  img {
    height: 155px;
    width: 153px;

    margin: auto 0;
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
    min-height: 115px;
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
        width: calc(100% - 5px);

        font-size: 11px;

        margin-top: 7px;
      }

      p {
        width: calc(100% - 5px);

        font-size: 9px;

        margin-top: 4px;
      }
      a {
        display: block;
        word-wrap: break-word;
        word-break: break-all;
        width: calc(100% - 5px);
        font-size: 9px;

        margin-top: 4px;
      }
    }
  }
`;

const Hashtag = styled(Link)`
  font-family: "Lato";
  font-size: 17px;
  font-weight: bold;
  color: #fff;
`;
