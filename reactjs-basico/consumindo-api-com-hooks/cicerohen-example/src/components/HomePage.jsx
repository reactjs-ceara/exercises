import React, { useEffect } from "react";
import List from "./List";
import Header from "./Header";
import { useLoadingContext } from "../LoadingContext";
import { useRandomTextContext } from "../RandomTextContext";

import useFetchApi from "../hooks/useFetchApi";
import { RANDOM_TEXT_URL } from "../api";

const HomePage = () => {
  const { setShowLoading } = useLoadingContext();
  const { setRandomText } = useRandomTextContext();
  const { data, isLoading, fetchData } = useFetchApi(RANDOM_TEXT_URL);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setShowLoading(isLoading);
  }, [isLoading, setShowLoading]);

  useEffect(() => {
    setRandomText(data);
  }, [data, setRandomText]);
  return (
    <>
      <Header />
      <List />
    </>
  );
};
export default HomePage;
