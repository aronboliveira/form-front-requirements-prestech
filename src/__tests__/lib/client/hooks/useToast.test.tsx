import { renderHook } from "@testing-library/react";
import { act } from "@testing-library/react";
import useToast from "../../../../lib/client/hooks/useToast";
import { toast } from "react-hot-toast";
import DOMValidator from "../../../../lib/client/validators/DOMValidator";
import DOMHandler from "../../../../lib/client/handlers/DOMHandler";
jest.mock("react-hot-toast", () => ({
  toast: {
    dismiss: jest.fn(),
  },
}));
jest.mock("../path/to/validators/DOMValidator", () => ({
  isButton: jest.fn(),
}));
jest.mock("../path/to/handlers/DOMHandler", () => ({
  isClickOutside: jest.fn(),
}));
describe("useToast Hook", () => {
  let addEventSpy: jest.SpyInstance,
    removeEventSpy: jest.SpyInstance,
    bodyAddEventSpy: jest.SpyInstance,
    bodyRemoveEventSpy: jest.SpyInstance;
  beforeEach(() => {
    jest.clearAllMocks();
    addEventSpy = jest.spyOn(window, "addEventListener");
    removeEventSpy = jest.spyOn(window, "removeEventListener");
    bodyAddEventSpy = jest.spyOn(document.body, "addEventListener");
    bodyRemoveEventSpy = jest.spyOn(document.body, "removeEventListener");
  });
  afterEach(() => {
    addEventSpy.mockRestore();
    removeEventSpy.mockRestore();
    bodyAddEventSpy.mockRestore();
    bodyRemoveEventSpy.mockRestore();
  });
  it("should register event listeners on mount and remove on unmount", () => {
    const { unmount } = renderHook(() =>
      useToast({ id: "abc", enterBtnId: "enterBtn" })
    );
    expect(addEventSpy).toHaveBeenCalledWith("keyup", expect.any(Function));
    expect(addEventSpy).toHaveBeenCalledWith("keydown", expect.any(Function));
    expect(bodyAddEventSpy).toHaveBeenCalledWith("click", expect.any(Function));
    unmount();
    expect(removeEventSpy).toHaveBeenCalledWith("keyup", expect.any(Function));
    expect(removeEventSpy).toHaveBeenCalledWith(
      "keydown",
      expect.any(Function)
    );
    expect(bodyRemoveEventSpy).toHaveBeenCalledWith(
      "click",
      expect.any(Function)
    );
  });
  it("should call toast.dismiss on Escape key", () => {
    renderHook(() => useToast({ id: "abc", enterBtnId: "enterBtn" }));
    act(() =>
      window.dispatchEvent(new KeyboardEvent("keyup", { key: "Escape" }))
    );
    expect(toast.dismiss).toHaveBeenCalledWith("abc");
  });
  it("should click enterBtn if Enter is pressed and is a button", () => {
    const fakeButton = document.createElement("button");
    fakeButton.id = "enterBtn";
    document.body.appendChild(fakeButton);
    (DOMValidator.isButton as unknown as jest.Mock).mockReturnValue(true);
    renderHook(() => useToast({ id: "xyz", enterBtnId: "enterBtn" }));
    const spyClick = jest.spyOn(fakeButton, "click");
    act(() =>
      window.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter" }))
    );
    expect(spyClick).toHaveBeenCalledTimes(1);
  });
  it("should dismiss toast if user clicks outside #activeToast", () => {
    const toastBox = document.createElement("div");
    toastBox.id = "activeToast";
    document.body.appendChild(toastBox);
    (DOMHandler.isClickOutside as jest.Mock).mockReturnValue([true]);
    renderHook(() => useToast({ id: "xyz", enterBtnId: "enterBtn" }));
    act(() => document.body.dispatchEvent(new MouseEvent("click")));
    expect(toast.dismiss).toHaveBeenCalled();
  });
});
