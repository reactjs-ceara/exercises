import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  background-color: #53a642;
  color: #fff;
  border: 1px solid #49933a;
  padding: 10px 12px;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 5px;
  cursor: pointer;
  ${props =>
    props.disabled &&
    `
    opacity: 0.5;
    cursor: not-allowed;
  `}
`;

const Button = React.memo(({ disabled, children, onClick }) => (
  <Wrapper disabled={disabled} onClick={onClick} data-testid="button">
    {children}
  </Wrapper>
));

export default Button;
