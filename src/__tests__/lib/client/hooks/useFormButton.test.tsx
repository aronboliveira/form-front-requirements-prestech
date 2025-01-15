import { renderHook } from "@testing-library/react";
import useFormButton from "../../../../lib/client/hooks/useFormButton";
import DOMValidator from "../../../../lib/client/validators/DOMValidator";
jest.mock("../../../../lib/client/validators/DOMValidator", () => ({
  isDefaultPressable: jest.fn(),
}));
describe("useFormButton Hook", () => {
  it("should return a ref object", () => {
    const { result } = renderHook(() =>
      useFormButton({ form: undefined, idf: "testId" })
    );
    expect(result.current.current).toBeNull();
  });
  it("should check if the ref is defaultPressable in useEffect", () => {
    (DOMValidator.isDefaultPressable as unknown as jest.Mock).mockReturnValue(
      true
    );
    renderHook(() => useFormButton({ form: undefined, idf: "testId" }));
    expect(DOMValidator.isDefaultPressable).toHaveBeenCalledTimes(1);
  });
  it("should set form from ref.current.form if not provided", () => {
    (DOMValidator.isDefaultPressable as unknown as jest.Mock).mockReturnValue(
      true
    );
    renderHook(() => useFormButton({ form: undefined, idf: "testId" }));
  });
});
