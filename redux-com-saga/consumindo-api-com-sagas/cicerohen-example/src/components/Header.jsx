import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "./Button";
import Loading from "./Loading";

const Wrapper = styled.header`
  background-color: #f5f5f5;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 10px;
  text-transform: uppercase;
  margin-right: 10px;
`;

const Header = () => {
  const showLoading = useSelector(state => state.showLoading);
  const dispatch = useDispatch();
  const fetchRandomText = useCallback(() => {
    dispatch({ type: "FETCH_RANDOM_TEXT" });
  }, [dispatch]);

  return (
    <Wrapper>
      <Title>Redux-Saga & Hooks</Title>
      {showLoading && <Loading />}
      <Button onClick={fetchRandomText} disabled={showLoading}>
        Fetch random text
      </Button>
    </Wrapper>
  );
};

export default Header;
