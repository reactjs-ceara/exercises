import React from "react";
import { Provider } from "react-redux";

import ReactDOM from "react-dom";
import "./styles.css";

import HomePage from "./components/HomePage";

import { createReduxStore } from "./store";
const store = createReduxStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HomePage />
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
