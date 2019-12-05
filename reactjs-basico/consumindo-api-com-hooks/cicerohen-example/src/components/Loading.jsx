import React from "react";
import styled from "styled-components";
import { FadingCircle } from "styled-spinkit";

const Wrapper = styled.div``;

const StyledFadingCircle = styled(FadingCircle)`
  margin: 0;
`;

const Loading = React.memo(() => (
  <Wrapper data-testid="loading">
    <StyledFadingCircle size={32} />
  </Wrapper>
));

export default Loading;
