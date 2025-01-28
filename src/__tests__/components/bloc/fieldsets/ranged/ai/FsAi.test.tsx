import React from "react";
import { render, screen } from "@testing-library/react";
import FsAi from "../../../../../../components/bloc/fieldsets/ranged/ai/FsAi";
describe("FsAi", () => {
  it("should render a fieldset with the correct attributes", () => {
    const props = {
      id: "testFsAi",
      p: { controller: "testController" },
      children: <div>Child Content</div>,
    };
    render(<FsAi {...props} />);
    const fieldset = screen.getByRole("group", { name: /testfsai/i });
    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toHaveAttribute("id", "fstestfsai");
    expect(fieldset).toHaveAttribute("data-controlledby", "testController");
  });
  it("should render child content", () => {
    const props = {
      id: "testFsAi",
      p: { controller: "testController" },
      children: <div>Child Content</div>,
    };
    render(<FsAi {...props} />);
    const childContent = screen.getByText(/child content/i);
    expect(childContent).toBeInTheDocument();
  });
});
