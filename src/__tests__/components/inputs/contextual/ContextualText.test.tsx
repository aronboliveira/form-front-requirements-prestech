import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContextualText from "../../../../components/inputs/contextual/ContextualText";
import useCustomDataList from "../../../../lib/client/hooks/useCustomDataList";
jest.mock("@/lib/client/hooks/useCustomDataList", () => ({
  __esModule: true,
  default: jest.fn(),
}));
describe("ContextualText Component", () => {
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
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("renders a label and a textarea with the provided label text", () => {
    render(
      <ContextualText
        role='marketing'
        topic='MainTasks'
        required={true}
        label='Main tasks label'
      />
    );
    const labelEl = screen.getByText("Main tasks label");
    expect(labelEl).toBeInTheDocument();
    expect(labelEl).toHaveAttribute("for", "textMarketingMainTasks");
    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;
    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveAttribute("id", "textMarketingMainTasks");
    expect(textarea).toHaveAttribute("name", "marketing_main_tasks");
    expect(textarea).toBeRequired();
  });
  it("defaults to showDl=false and no suggestion list is rendered", () => {
    render(
      <ContextualText
        role='marketing'
        topic='MainTasks'
        required={false}
        label='Main tasks label'
      />
    );
    const list = screen.queryByRole("listbox");
    expect(list).not.toBeInTheDocument();
  });
  it("renders suggestion list if showDl=true", () => {
    mockUseCustomDataList.mockReturnValueOnce({
      inpRef: { current: null },
      v: "current value",
      dl: ["task1", "task2"],
      showDl: true,
      cursor: 0,
      setV: jest.fn(),
      handleClick: jest.fn(),
      handleKeyDown: jest.fn(),
    });
    render(
      <ContextualText
        role='financeiro'
        topic='DailyTasks'
        required
        label='Daily tasks label'
      />
    );
    const list = screen.getByRole("listbox");
    expect(list).toBeInTheDocument();
    const items = screen.getAllByRole("option");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("task1");
    expect(items[1]).toHaveTextContent("task2");
  });
  it("updates the input value onChange using setV", () => {
    const setVMock = jest.fn();
    mockUseCustomDataList.mockReturnValueOnce({
      inpRef: { current: null },
      v: "initial",
      dl: [],
      showDl: false,
      cursor: 0,
      setV: setVMock,
      handleClick: jest.fn(),
      handleKeyDown: jest.fn(),
    });
    render(
      <ContextualText
        role='development'
        topic='Optimize'
        required={false}
        label='Optimize label'
      />
    );
    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;
    fireEvent.change(textarea, { target: { value: "new text" } });
    expect(setVMock).toHaveBeenCalledWith("new text");
  });

  it("calls handleKeyDown on keyDown in the textarea", () => {
    const handleKeyDownMock = jest.fn();
    mockUseCustomDataList.mockReturnValueOnce({
      inpRef: { current: null },
      v: "",
      dl: [],
      showDl: false,
      cursor: 0,
      setV: jest.fn(),
      handleClick: jest.fn(),
      handleKeyDown: handleKeyDownMock,
    });
    render(
      <ContextualText
        role='marketing'
        topic='Challenges'
        required={false}
        label='Challenges label'
      />
    );
    const textarea = screen.getByRole("textbox");
    fireEvent.keyDown(textarea, { key: "Enter" });
    expect(handleKeyDownMock).toHaveBeenCalled();
  });
  it("calls handleClick if a suggestion item is clicked", () => {
    const handleClickMock = jest.fn();
    mockUseCustomDataList.mockReturnValueOnce({
      inpRef: { current: null },
      v: "",
      dl: ["suggest1"],
      showDl: true,
      cursor: 0,
      setV: jest.fn(),
      handleClick: handleClickMock,
      handleKeyDown: jest.fn(),
    });
    render(
      <ContextualText
        role='financeiro'
        topic='MainSw'
        required={false}
        label='Main SW label'
      />
    );
    const option = screen.getByRole("option", { name: "suggest1" });
    fireEvent.click(option);
    expect(handleClickMock).toHaveBeenCalledWith(option);
  });
});
