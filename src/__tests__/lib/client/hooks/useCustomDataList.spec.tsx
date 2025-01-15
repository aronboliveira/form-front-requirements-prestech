import useCustomDataList from "../../../../lib/client/hooks/useCustomDataList";
import IOHandler from "../../../../lib/client/handlers/IOHandler";
import DOMValidator from "../../../../lib/client/validators/DOMValidator";
import { act, renderHook } from "@testing-library/react";
jest.mock("../../../../lib/client/handlers/IOHandler", () => ({
  selectCustomDataListSuggestions: jest.fn(),
}));
jest.mock("../../../../lib/client/validators/DOMValidator", () => {
  return {
    ...jest.requireActual("../../../../lib/client/validators/DOMValidator"),
    isTextbox: jest.fn(),
  };
});
describe("useCustomDataList Hook", () => {
  beforeEach(jest.clearAllMocks);
  it("should initialize states correctly", () => {
    const { result } = renderHook(useCustomDataList);
    expect(result.current.v).toBe("");
    expect(result.current.dl).toEqual([]);
    expect(result.current.showDl).toBe(false);
    expect(result.current.cursor).toBe(0);
    expect(result.current.inpRef.current).toBeNull();
  });
  it("should call IOHandler.selectCustomDataListSuggestions when v changes", () => {
    (IOHandler.selectCustomDataListSuggestions as jest.Mock).mockReturnValue([
      "abc",
      "def",
    ]);
    const { result, rerender } = renderHook(useCustomDataList, {
      initialProps: { query: "" },
    });
    act(() => result.current.setV("abc"));
    rerender({ query: "abc" });
    expect(IOHandler.selectCustomDataListSuggestions).toHaveBeenCalledWith(
      "abc"
    );
    expect(result.current.dl).toEqual(["abc", "def"]);
    expect(result.current.showDl).toBe(true);
  });
  it("should unmount list if IOHandler returns no suggestions", () => {
    (IOHandler.selectCustomDataListSuggestions as jest.Mock).mockReturnValue(
      null
    );
    const { result, rerender } = renderHook(useCustomDataList);
    act(() => result.current.setV("xyz"));
    rerender();
    expect(result.current.dl).toEqual([]);
    expect(result.current.showDl).toBe(false);
  });
  it("handleClick should call selectOpt and clear list", () => {
    const { result } = renderHook(useCustomDataList);
    act(() => result.current.setV("foo"));
    const fakeOpt = document.createElement("li");
    document.createElement("li").innerText = "bar";
    act(() => result.current.handleClick(fakeOpt));
    expect(result.current.v).toBe("foobar");
    expect(result.current.dl).toEqual([]);
    expect(result.current.showDl).toBe(false);
  });
  it("handleKeyDown should select option if Enter is pressed", () => {
    const isTextboxMock = DOMValidator.isTextbox as jest.MockedFunction<
      typeof DOMValidator.isTextbox
    >;
    isTextboxMock.mockReturnValue(false);
    const { result } = renderHook(useCustomDataList);
    act(() => result.current.setV("input"));
    const liEl = document.createElement("li");
    liEl.innerText = "option2";
    const keyboardEvent = {
      key: "Enter",
      currentTarget: liEl,
      preventDefault: jest.fn(),
    } as any;
    act(() => result.current.handleKeyDown(keyboardEvent));
    expect(result.current.v).toBe("inputoption2");
    expect(result.current.showDl).toBe(false);
    expect(result.current.dl).toEqual([]);
  });
});
