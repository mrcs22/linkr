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

  background-color: #333;
`;

const Content = styled.div`
  width: 937px;

  margin: 0 auto;
  margin-top: 53px;
`;
