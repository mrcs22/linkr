import styled from "styled-components";

export default function LinkInfo(props) {
  const { linkTitle, linkDescription, link, linkImage } = props;

  return (
    <Content>
      <div>
        <p>{linkTitle}</p>

        <p>{linkDescription}</p>

        <a href={link} target="_blank" rel="noreferrer">
          {link}
        </a>
      </div>
      <img src={linkImage} alt={linkTitle} />
    </Content>
  );
}

const Content = styled.div`
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
