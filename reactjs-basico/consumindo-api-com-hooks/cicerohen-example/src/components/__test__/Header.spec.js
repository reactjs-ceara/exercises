import React from "react";
import {
  render,
  cleanup,
  getByTestId,
  fireEvent,
  queryByTestId,
  act
} from "@testing-library/react";

import * as LoadingContext from "../../LoadingContext";
import * as RandomTextContext from "../../RandomTextContext";
import * as api from "../../api";

import Header from "../Header";

const wait = (amount = 0) =>
  new Promise(resolve => setTimeout(resolve, amount));

jest.mock("../../api", () => ({
  RANDOM_TEXT_URL: "http://www.google.com"
}));

global.fetch = jest.fn();

describe("<Header/>", () => {
  let component;

  beforeEach(() => {
    cleanup();
    component = render(
      <LoadingContext.LoadingContextProvider>
        <RandomTextContext.RandomTextContextProvider>
          <Header />
        </RandomTextContext.RandomTextContextProvider>
      </LoadingContext.LoadingContextProvider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar", () => {
    expect(getByTestId(component.container, "header")).toBeDefined();
  });

  it("deve requisitar os textos randômicos quando o botao for clicado", async () => {
    const button = getByTestId(component.container, "button");
    await act(async () => {
      fireEvent.click(button);
      expect(fetch).toHaveBeenNthCalledWith(1, api.RANDOM_TEXT_URL);
    });
  });

  it("deve exibir um loading ao durante a requisição dos textos randômicos", async () => {
    const button = getByTestId(component.container, "button");

    jest.useFakeTimers();

    fetch.mockImplementationOnce(
      () =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve({
              json: () => Promise.resolve(["ramdom text"])
            });
          }, 200);
        })
    );

    fireEvent.click(button);
    jest.advanceTimersByTime(200);

    jest.useRealTimers();

    expect(queryByTestId(component.container, "loading")).toBeDefined();
    expect(fetch).toHaveBeenNthCalledWith(1, api.RANDOM_TEXT_URL);

    await act(async () => {
      await wait();
    });

    expect(queryByTestId(component.container, "loading")).toBeDefined();
  });
});
