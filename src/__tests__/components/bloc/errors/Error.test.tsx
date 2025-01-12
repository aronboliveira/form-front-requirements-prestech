/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import GenericErrorComponent from "../../../../components/bloc/errors/Error";
describe("GenericErrorComponent", () => {
  beforeEach(() => {
    jest.spyOn(global, "location", "get").mockReturnValue({
      ...window.location,
      reload: jest.fn(),
    });
  });
  afterEach(jest.clearAllMocks);
  it("renders with the default error message when no message is provided", () => {
    render(<GenericErrorComponent message={undefined as any} />);
    expect(screen.getByText("Oops, algo deu errado! 😨")).toBeInTheDocument();
    expect(screen.getByText("Erro indefinido")).toBeInTheDocument();
  });
  it("renders with a custom error message", () => {
    const customMessage = "Algo inesperado ocorreu.";
    render(<GenericErrorComponent message={customMessage} />);
    expect(screen.getByText("Oops, algo deu errado! 😨")).toBeInTheDocument();
    expect(screen.getByText(customMessage)).toBeInTheDocument();
  });
  it("displays a reload button", () => {
    render(<GenericErrorComponent message='Teste de erro.' />);
    const reloadButton = screen.getByRole("button", { name: /recarregar/i });
    expect(reloadButton).toBeInTheDocument();
    expect(reloadButton).toHaveClass("btn btn-info");
  });
  it("reloads the page when the reload button is clicked", () => {
    render(<GenericErrorComponent message='Teste de erro.' />);
    fireEvent.click(screen.getByRole("button", { name: /recarregar/i }));
    expect(global.location.reload).toHaveBeenCalledTimes(1);
  });
  it("applies the correct inline styles to the component", () => {
    render(<GenericErrorComponent message='Teste de erro.' />);
    const section = screen.getByRole("region");
    expect(section).toHaveStyle({
      display: "flex",
      flexFlow: "column nowrap",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      width: "100vw",
      height: "100vh",
      paddingInline: "10vw",
      backgroundColor: "#afa3a396",
    });
  });
  it("applies the correct styles to the heading and button", () => {
    render(<GenericErrorComponent message='Teste de erro.' />);
    const button = screen.getByRole("button", { name: /recarregar/i });
    expect(screen.getByRole("heading", { level: 2 })).toHaveClass(
      "mg__2bv widHalf"
    );
    expect(button).toHaveClass("btn btn-info");
    expect(button).toHaveStyle({ fontWeight: "bold" });
  });
});
