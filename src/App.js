import "./App.css";
import styled from "styled-components";
import Ball from "./components/ball";

const Container = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
`;

function App() {
  return (
    <Container>
      <Ball />
    </Container>
  );
}

export default App;
