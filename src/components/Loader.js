import styled from "styled-components";
import Loader from "react-loader-spinner";

export default function PuffLoader() {
  return (
    <LoaderContainer>
      <Loader type="Puff" color="#00BFFF" height={120} width={120} />
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  width: 611px;

  @media (max-width: 937px) {
    width: 100%;
  }
`;
