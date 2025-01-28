import React from "react";
import { render, screen } from "@testing-library/react";
import AddFileInput from "../../../../../../../components/bloc/fieldsets/ranged/inc/foundation/AddFileInput";
describe("AddFileInput", () => {
  it("should render a file input", () => {
    render(<AddFileInput id='file' name='fileName' />);
    const input = screen.getByLabelText("fileName");
    expect(input).toHaveAttribute("type", "file");
  });
  it("should have the correct attributes", () => {
    render(<AddFileInput id='file' name='fileName' accept='image/*' />);
    const input = screen.getByLabelText("fileName");
    expect(input).toHaveAttribute("accept", "image/*");
  });
});
