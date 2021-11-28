import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: "white";
`;
const App: React.FC = (props) => {
  return <StyledDiv>My app {props.children}</StyledDiv>;
};

export default App;
