import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import LinkInfo from "./LinkInfo";
import PostLike from "./PostLike";
import YoutubePlayer from "./YoutubePlayer";
import getYoutubeId from "get-youtube-id";
import { IoMdPin } from "react-icons/io";
import Modal from "react-modal";
import MapContainer from "./MapContainer";
import LinkPreview from "../linkPreview/LinkPreview";

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
    likes,
    geolocation,
  } = props;

  const youtubeId = link.includes("youtube") ? getYoutubeId(link) : null;
  const [showModal, setShowModal] = useState(false);
  const postText = highlightHashtags(text);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [showLinkPreview, setShowLinkPreview] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = (e) => {
    setShowModal(false);
  };

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

      <DeletePost ownerId={userId} postId={postId} getPosts={getPosts} />

      <div>
        <UserLocation>
          <Link to={`/user/${userId}`}>
            <Name>{username}</Name>
          </Link>
          {geolocation !== undefined ? (
            <LocationIcon onClick={openModal} />
          ) : (
            ""
          )}
        </UserLocation>

        <EditPost
          ownerId={userId}
          text={text}
          postText={postText}
          postId={postId}
          highlightHashtags={highlightHashtags}
        />

        {youtubeId !== null ? (
          <YoutubePlayer
            linkTitle={linkTitle}
            link={link}
            youtubeId={youtubeId}
          />
        ) : (
          <>
            <LinkInfo
              linkTitle={linkTitle}
              linkDescription={linkDescription}
              link={link}
              linkImage={linkImage}
              setShowModal={setShowLinkPreview}
            />
            <LinkPreview
              title={linkTitle}
              link={link}
              showModal={showLinkPreview}
              setShowModal={setShowLinkPreview}
            />
          </>
        )}
      </div>

      <Modal
        isOpen={showModal}
        style={modalStyle}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <Title>
          <p>{username}'s location</p>
          <X onClick={(e) => closeModal(e)}>X</X>
        </Title>

        <MapContainer geolocation={geolocation} />
      </Modal>
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
const modalStyle = {
  overlay: {
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    zIndex: "2",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    top: "20vh",
    margin: "0 auto",
    width: "790px",
    height: "354px",
    backgroundColor: "#333",
    borderRadius: "20px",
    color: "#fff",
    fontSize: "38px",
    fontWeight: "700",
  },
};
const X = styled.h1`
  color: #fff;
  font-size: 25px;
  position: absolute;
  left: 735px;
  top: 23px;
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 38px;
  width: 100%;
  p {
    position: absolute;
    left: 40px;
    top: 20px;
  }
`;
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

  & > div:last-child {
    width: 502px;
  }

  @media (max-width: 611px) {
    min-height: 232px;
    width: 100%;
    min-width: 320px;

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
const LocationIcon = styled(IoMdPin)`
  width: 16px;
  height: 19px;
  margin-right: 5px;
  color: #ffffff;
  margin-left: 8px;
  margin-top: 2px;
`;
const UserLocation = styled.div`
  height: 23px;
  display: flex;
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
const Hashtag = styled(Link)`
  font-family: "Lato";
  font-size: 17px;
  font-weight: bold;
  color: #fff;
`;
