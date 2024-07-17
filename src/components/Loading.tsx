import styled from "styled-components";

const Container = styled.div`
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoadingBar = styled.div`
  color: white;
`;

export default function Loading() {
  return (
    <Container>
      <LoadingBar>Loaing...</LoadingBar>
    </Container>
  );
}
