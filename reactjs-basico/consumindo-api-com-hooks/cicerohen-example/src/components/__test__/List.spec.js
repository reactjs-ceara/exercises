import React from "react";
import {
  render,
  cleanup,
  getByTestId,
  queryByTestId,
  queryAllByText,
  act
} from "@testing-library/react";
import * as LoadingContext from "../../LoadingContext";
import * as RandomTextContext from "../../RandomTextContext";

import List from "../List";

describe("<List /> tests", () => {
  let component;

  beforeEach(() => {
    jest.resetModules();
    cleanup();
    component = render(
      <LoadingContext.LoadingContextProvider>
        <RandomTextContext.RandomTextContextProvider>
          <List />
        </RandomTextContext.RandomTextContextProvider>
      </LoadingContext.LoadingContextProvider>
    );
  });

  it("deve renderizar", () => {
    expect(getByTestId(component.container, "list")).toBeDefined();
  });

  it("deve alternar a exibição do loading corretamente", async () => {
    let loadingContext = {};

    function HookWrapper() {
      loadingContext = LoadingContext.useLoadingContext();
      return null;
    }

    component.rerender(
      <LoadingContext.LoadingContextProvider>
        <RandomTextContext.RandomTextContextProvider>
          <HookWrapper />
          <List />
        </RandomTextContext.RandomTextContextProvider>
      </LoadingContext.LoadingContextProvider>
    );

    await act(async () => {
      loadingContext.setShowLoading(true);
    });

    expect(queryByTestId(component.container, "loading")).toBeTruthy();

    await act(async () => {
      loadingContext.setShowLoading(false);
    });

    expect(queryByTestId(component.container, "loading")).not.toBeTruthy();
  });

  it("deve renderizar a lista de textos randômicos", async () => {
    let randomTextContext = {};

    const randomText = ["text", "text"];

    function HookWrapper() {
      randomTextContext = RandomTextContext.useRandomTextContext();
      return null;
    }

    component.rerender(
      <LoadingContext.LoadingContextProvider>
        <RandomTextContext.RandomTextContextProvider>
          <HookWrapper />
          <List />
        </RandomTextContext.RandomTextContextProvider>
      </LoadingContext.LoadingContextProvider>
    );

    await act(async () => {
      randomTextContext.setRandomText(randomText);
    });

    expect(queryAllByText(component.container, /text/)).toHaveLength(
      randomText.length
    );

    await act(async () => {
      randomTextContext.setRandomText([]);
    });

    expect(queryAllByText(component.container, /text/)).toHaveLength(0);
  });
});
