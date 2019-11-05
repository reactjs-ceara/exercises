import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import { LoadingContextProvider } from "./LoadingContext";
import { RandomTextContextProvider } from "./RandomTextContext";

import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <LoadingContextProvider>
        <RandomTextContextProvider>
          <HomePage />
        </RandomTextContextProvider>
      </LoadingContextProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
