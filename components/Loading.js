import React from "react";
import styled from "styled-components";

const Loading = () => <LoadingContainer>
  <LoadingStyle />
</LoadingContainer>

export default Loading;


const LoadingContainer = styled.View`
  background-color: ${props => props.theme.container.backgroundColor};
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoadingStyle = styled.ActivityIndicator.attrs(
  {
    size: "large"
  }
)`
`;
