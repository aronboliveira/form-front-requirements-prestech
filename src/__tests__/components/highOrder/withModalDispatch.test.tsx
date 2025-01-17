import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import withModalDispatch from "../../../components/highOrder/withModalDispatch";
import { DlgProps } from "../../../lib/definitions/client/interfaces/components";
function MockModal({ state, dispatch }: DlgProps) {
  return (
    <div>
      <p data-testid='modalState'>{String(state)}</p>
      <button data-testid='toggleBtn' onClick={() => dispatch(!state)}>
        Toggle
      </button>
    </div>
  );
}
const Enhanced = withModalDispatch(MockModal);
describe("withModalDispatch HOC", () => {
  it("provides `state` defaulting to true, and a `dispatch` function to the wrapped component", () => {
    render(<Enhanced />);
    const modalState = screen.getByTestId("modalState");
    expect(modalState).toHaveTextContent("true");
    const toggleBtn = screen.getByTestId("toggleBtn");
    fireEvent.click(toggleBtn);
    expect(modalState).toHaveTextContent("false");
  });
  it("passes all other props through to the wrapped component", () => {
    function MockWithProp({
      state,
      dispatch,
      title,
    }: DlgProps & { title: string }) {
      return (
        <div>
          <h1 data-testid='title'>{title}</h1>
          <p data-testid='modalState'>{String(state)}</p>
          <button onClick={() => dispatch(!state)}>Toggle</button>
        </div>
      );
    }
    const EnhancedWithProp = withModalDispatch(MockWithProp);
    render(<EnhancedWithProp title='Hello Modal' />);
    expect(screen.getByTestId("title")).toHaveTextContent("Hello Modal");
  });
});
