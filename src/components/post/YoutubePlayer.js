import styled from "styled-components";

export default function YoutubePlayer({ linkTitle, link, youtubeId }) {
  return (
    <Content>
      <Player
        src={`https://www.youtube.com/embed/${youtubeId}`}
        title={linkTitle}
      />
      <a href={link} target="_blank" rel="noreferrer">
        {link}
      </a>
    </Content>
  );
}

const Player = styled.iframe`
  height: 281px;
  width: 100%;
  max-width: 502px;

  margin-bottom: 6px;

  @media (max-width: 450px) {
    height: 162px;
  }
`;

const Content = styled.div`
  a {
    font-family: "Lato";
    font-size: 17px;
    color: #b7b7b7;

    @media (max-width: 450px) {
      font-size: 12px;
    }
  }
`;
