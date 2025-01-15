import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContextualText from "../../../../components/inputs/contextual/ContextualText";
import useCustomDataList from "../../../../lib/client/hooks/useCustomDataList";
jest.mock("../../../../lib/client/hooks/useCustomDataList", () => ({
  __esModule: true,
  default: jest.fn(),
}));
describe("ContextualText component", () => {
  let mockUseCustomDataList: jest.Mock;
  beforeEach(() => {
    mockUseCustomDataList = useCustomDataList as jest.Mock;
    mockUseCustomDataList.mockReturnValue({
      inpRef: { current: null },
      v: "",
      dl: [],
      showDl: false,
      cursor: 0,
      setV: jest.fn(),
      handleClick: jest.fn(),
      handleKeyDown: jest.fn(),
    });
  });
  it("renders a label and a textarea with the provided label text", () => {
    render(
      <ContextualText
        role={"Suporte TecnicoN1"}
        topic={"MainTasks"}
        required={true}
        label={"Some label"}
      />
    );
    expect(screen.getByText("Some label")).toBeInTheDocument();
    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;
    expect(textarea).toBeInTheDocument();
    expect(textarea.required).toBe(true);
  });
  it("displays a list of suggestions if showDl is true", () => {
    mockUseCustomDataList.mockReturnValue({
      inpRef: { current: null },
      v: "",
      dl: ["Alpha", "Beta"],
      showDl: true,
      cursor: 0,
      setV: jest.fn(),
      handleClick: jest.fn(),
      handleKeyDown: jest.fn(),
    });
    render(
      <ContextualText
        role={"Financeiro"}
        topic={"Priorization"}
        required={false}
        label={"Test label"}
      />
    );
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getByText("Alpha")).toBeInTheDocument();
    expect(screen.getByText("Beta")).toBeInTheDocument();
  });
  it("calls setV on textarea change", () => {
    const setVMock = jest.fn();
    mockUseCustomDataList.mockReturnValue({
      inpRef: { current: null },
      v: "",
      dl: [],
      showDl: false,
      cursor: 0,
      setV: setVMock,
      handleClick: jest.fn(),
      handleKeyDown: jest.fn(),
    });
    render(
      <ContextualText
        role={"Marketing"}
        topic={"Challenges"}
        required={false}
        label={"Challenges?"}
      />
    );
    fireEvent.change(screen.getByRole("textbox") as HTMLTextAreaElement, {
      target: { value: "new text" },
    });
    expect(setVMock).toHaveBeenCalledWith("new text");
  });
});
