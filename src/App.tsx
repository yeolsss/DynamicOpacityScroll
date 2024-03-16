import styled from "styled-components";
import DynamicOpacityScroll from "./components/DynamicOpacityScroll.tsx";

const App = () => {
  return (
    <StContainer>
      <StTitleWrapper>
        <div>
          <StTitle>화면 중앙 하이라이팅</StTitle>
        </div>
      </StTitleWrapper>
      <DynamicOpacityScroll />
    </StContainer>
  );
};

const StContainer = styled.section`
  height: auto;
  display: flex;
  flex-direction: column;
`;

const StTitleWrapper = styled.div`
  height: 100vh;
  display: flex;

  > div {
    margin: auto;
  }
`;
const StTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin: auto;
`;
export default App;
