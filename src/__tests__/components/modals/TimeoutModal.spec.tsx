import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { redirect } from "next/navigation";
import DOMHandler from "../../../lib/client/handlers/DOMHandler";
import TimeoutModal from "../../../components/modals/TimeoutModal";
jest.mock("@/lib/client/handlers/DOMHandler", () => ({
  __esModule: true,
  default: {
    isClickOutside: jest.fn(),
  },
}));
jest.mock("@/lib/client/hooks/useDialog", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    mainRef: { current: null },
  }),
}));
jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));
describe("TimeoutModal Component", () => {
  let dispatchMock: jest.Mock;
  beforeEach(() => {
    dispatchMock = jest.fn();
    jest.clearAllMocks();
  });
  it("does not render dialog if state=false", () => {
    render(<TimeoutModal dispatch={dispatchMock} state={false} />);
    expect(screen.queryByRole("alertdialog")).toBeNull();
  });
  it("renders a dialog if state=true", () => {
    render(<TimeoutModal dispatch={dispatchMock} state={true} />);
    const dialog = screen.getByRole("alertdialog");
    expect(dialog).toBeInTheDocument();
    const reloadBtn = screen.getByRole("button", { name: /Recarregar/i });
    expect(reloadBtn).toBeInTheDocument();
  });
  it("calls redirect('/') on reload button click", () => {
    render(<TimeoutModal dispatch={dispatchMock} state />);
    const reloadBtn = screen.getByRole("button", { name: /Recarregar/i });
    fireEvent.click(reloadBtn);
    expect(redirect).toHaveBeenCalledWith("/");
  });
  it("closes dialog on outside click", () => {
    (DOMHandler.isClickOutside as jest.Mock).mockReturnValue([true]);
    render(<TimeoutModal dispatch={dispatchMock} state />);
    const dialog = screen.getByRole("alertdialog");
    fireEvent.click(dialog);
    expect(dispatchMock).toHaveBeenCalledWith(false);
  });
});
