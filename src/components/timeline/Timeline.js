import styled from "styled-components";
import Container from "../Container";
import NewPost from "./NewPost";

export default function Timeline() {
  return (
    <Container>
      <StyledP>timeline</StyledP>
      <NewPost />
    </Container>
  );
}

const StyledP = styled.p`
  font-family: "Oswald";

  font-size: 43px;
  color: #fff;

  margin-bottom: 45px;
`;
