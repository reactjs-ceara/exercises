import React, { useState } from "react";
import RandomTextContext from "./RandomTextContext";

const RandomTextContextProvider = ({ children }) => {
  const [randomText, setRandomText] = useState([]);
  const value = { randomText, setRandomText };
  return (
    <RandomTextContext.Provider value={value}>
      {children}
    </RandomTextContext.Provider>
  );
};

export default RandomTextContextProvider;
