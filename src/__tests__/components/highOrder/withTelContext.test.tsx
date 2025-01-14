/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import withTelContext, {
  TelCtx,
} from "../../../components/highOrder/withTelContext";
function MockChild({ label, required }: { label: string; required: boolean }) {
  return (
    <div>
      <span data-testid='label'>{label}</span>
      <span data-testid='required'>{required ? "Required" : "Optional"}</span>
    </div>
  );
}
describe("withTelContext", () => {
  it("provides default context if none is passed", () => {
    const Enhanced = withTelContext(MockChild);
    render(<Enhanced label='unique' required={true} />);
    expect(screen.getByTestId("label")).toHaveTextContent("Telefone");
    expect(screen.getByTestId("required")).toHaveTextContent("Optional");
  });
  it("overrides label for 'prim', 'sec', or 'unique'", () => {
    const Enhanced = withTelContext(MockChild);
    render(<Enhanced label='prim' required={true} />);
    expect(screen.getByTestId("label")).toHaveTextContent("Telefone Primário");
    expect(screen.getByTestId("required")).toHaveTextContent("Required");
  });
  it("overrides label for 'prim', 'sec', or 'unique'", () => {
    const Enhanced = withTelContext(MockChild);
    render(<Enhanced label='second' required={false} />);
    expect(screen.getByTestId("label")).toHaveTextContent(
      "Telefone Secundário"
    );
    expect(screen.getByTestId("required")).toHaveTextContent("Required");
  });
});
