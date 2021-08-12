import styled from "styled-components";

export default function Container({ children }) {
  return (
    <Div>
      <Content>{children}</Content>
    </Div>
  );
}

const Div = styled.div`
  min-height: 100vh;
  width: 100%;

  padding-top: 72px;
  padding-bottom: 20px;

  background-color: #333;
`;

const Content = styled.div`
  position: relative;
  width: 937px;

  margin: 0 auto;
  margin-top: 53px;

  @media (max-width: 950px) {
    width: 611px;
  }

  @media (max-width: 611px) {
    width: 100vw;
  }
`;
