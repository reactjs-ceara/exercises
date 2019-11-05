import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import List from "./List";
import Header from "./Header";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "FETCH_RANDOM_TEXT" });
  }, [dispatch]);
  return (
    <>
      <Header />
      <List />
    </>
  );
};
export default HomePage;
