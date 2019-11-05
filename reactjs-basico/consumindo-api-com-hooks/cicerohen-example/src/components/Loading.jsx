import React from "react";
import styled from "styled-components";
import { FadingCircle } from "styled-spinkit";

const Wrapper = styled(FadingCircle)`
  margin: 0;
`;

const Loading = React.memo(() => <Wrapper size={32} />);

export default Loading;
