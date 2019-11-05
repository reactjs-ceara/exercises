import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import Loading from "./Loading";
import { useLoadingContext } from "../LoadingContext";
import { useRandomTextContext } from "../RandomTextContext";

import useFetchApi from "../hooks/useFetchApi";
import { RANDOM_TEXT_URL } from "../api";

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
  const { showLoading, setShowLoading } = useLoadingContext();
  const { setRandomText } = useRandomTextContext();
  const { data, isLoading, fetchData } = useFetchApi(RANDOM_TEXT_URL);

  useEffect(() => {
    setShowLoading(isLoading);
  }, [isLoading, setShowLoading]);

  useEffect(() => {
    setRandomText(data);
  }, [data, setRandomText]);

  return (
    <Wrapper>
      <Title>React Hooks</Title>
      {showLoading && <Loading />}
      <Button onClick={fetchData} disabled={showLoading}>
        Fetch random text
      </Button>
    </Wrapper>
  );
};

export default Header;
