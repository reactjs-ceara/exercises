import React from "react";
import {
  render,
  cleanup,
  getByTestId,
  getByText,
  fireEvent
} from "@testing-library/react";

import Button from "../Button";

const props = {
  disabled: false,
  children: <div>text</div>,
  onClick: jest.fn()
};

let component;

describe("<Button />", () => {
  beforeEach(() => {
    cleanup();
    component = render(<Button {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("deve renderizar", () => {
    const buttonElement = getByTestId(component.container, "button");
    expect(getByText(buttonElement, "text")).toBeDefined();
  });

  it("deve executar onClick quando o botão for clicado", () => {
    const buttonElement = getByTestId(component.container, "button");
    fireEvent.click(buttonElement);
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it("não deve executar onClick quando o botão for clicado e estiver desabilitado", () => {
    component.rerender(<Button {...props} disabled />);
    const buttonElement = getByTestId(component.container, "button");
    fireEvent.click(buttonElement);
    expect(props.onClick).toHaveBeenCalledTimes(0);
  });
});
