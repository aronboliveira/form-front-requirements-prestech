/**
 *@jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Range from "../../../components/inputs/Range";
describe("Range input component", () => {
  it("renders a div with a input of type range and its label", () => {
    render(<Range />);
  });
});
