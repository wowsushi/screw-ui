import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  color: "white";
`;
const App: React.VFC = (props) => {
  const find = [1, 2, 3];

  return <StyledDiv>My app {props.children}</StyledDiv>;
};

export default App;
