import { useRouter } from "next/navigation";
import { renderHook, act } from "@testing-library/react";
import useDialog from "../../../../lib/client/hooks/useDialog";
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
describe("useDialog custom hook", () => {
  let routerPushMock: jest.Mock,
    mockAddEvent: jest.SpyInstance,
    mockRemoveEvent: jest.SpyInstance,
    originalLocation: Location;
  beforeEach(() => {
    routerPushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: routerPushMock });
    originalLocation = window.location;
    // @ts-ignore
    delete window.location;
    window.location = {
      ...originalLocation,
      search: "",
    };
    mockAddEvent = jest.spyOn(window, "addEventListener");
    mockRemoveEvent = jest.spyOn(window, "removeEventListener");
  });
  afterEach(() => {
    window.location = originalLocation;
    jest.clearAllMocks();
  });
  it("sets URL param if not present, and cleans up param on unmount", () => {
    const { unmount } = renderHook(() =>
      useDialog({ state: true, dispatch: jest.fn(), param: "timeout" })
    );
    expect(routerPushMock).toHaveBeenCalledWith("?timeout=open");
    unmount();
    expect(routerPushMock).toHaveBeenCalledWith("?");
  });
  it("adds a 'keypress' listener on mount, removes on unmount", () => {
    const { unmount } = renderHook(() =>
      useDialog({ state: false, dispatch: jest.fn(), param: "dlg" })
    );
    expect(mockAddEvent).toHaveBeenCalledWith("keypress", expect.any(Function));
    unmount();
    expect(mockRemoveEvent).toHaveBeenCalledWith(
      "keypress",
      expect.any(Function)
    );
  });
  it("handleKp toggles dispatch if 'escape' pressed", () => {
    const dispatchMock = jest.fn();
    const { result } = renderHook(() =>
      useDialog({ state: true, dispatch: dispatchMock, param: "dlg" })
    );
    const kpEvent = new KeyboardEvent("keypress", { key: "Escape" });
    act(() => {
      result.current.handleKp(kpEvent as any);
    });
    expect(dispatchMock).toHaveBeenCalledWith(false);
  });
});
