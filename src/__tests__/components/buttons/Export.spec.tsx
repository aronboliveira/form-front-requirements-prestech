import React from "react";
import {
  render,
  fireEvent,
  screen,
} from "@testing-library/react";
import Export from "../../../components/buttons/Export";
import SpreadsheetMapper from "../../../lib/client/mappers/SpreadsheetMapper";
import "@testing-library/jest-dom";
jest.mock(
  "../../../lib/client/mappers/SpreadsheetMapper",
  () => ({
    construct: jest.fn().mockReturnValue({
      processExportData: jest.fn(),
    }),
    extractData: jest.fn(() => ({})),
  })
);
jest.mock("../../../lib/client/handlers/DOMHandler", () => {
  return jest.fn().mockImplementation(() => ({
    evaluateClickMovements: () => ["valid", false],
  }));
});
describe("Export component", () => {
  beforeEach(() => {
    document.body.innerHTML = `<form id="testForm"></form>`;
  });
  afterEach(() => {
    document.body.innerHTML = "";
  });
  test("renders export button and triggers export on click", () => {
    render(
      <Export
        form={
          document.getElementById(
            "testForm"
          ) as HTMLFormElement
        }
      />
    );
    const button = screen.getByRole("button", {
      name: /Exportar/i,
    });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(SpreadsheetMapper.construct).toHaveBeenCalled();
  });
});
