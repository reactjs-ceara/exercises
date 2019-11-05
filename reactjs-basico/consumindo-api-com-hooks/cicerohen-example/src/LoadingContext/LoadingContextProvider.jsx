import React, { useState } from "react";
import LoadingContext from "./LoadingContext";

const LoadingContextProvider = ({ children }) => {
  const [showLoading, setShowLoading] = useState(true);
  const value = { showLoading, setShowLoading };
  return (
    <LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
