/**
 * @jest-environment jsdom
 */
import StyleHandler from "../../../../lib/client/handlers/StyleHandler";
describe("StyleHandler", () => {
  let element: HTMLElement;
  beforeEach(() => document.body.appendChild(document.createElement("div")));
  afterEach(() => document.body.removeChild(element));
  describe("toggleVisibility", () => {
    it("sets display to 'block' if condition is true", () => {
      StyleHandler.toggleVisibility(element, true, "block");
      expect(element.style.display).toBe("block");
    });
    it("leaves display as '' (or 'none') if condition is false", () => {
      StyleHandler.toggleVisibility(element, false, "block");
      expect(element.style.display).toBe("");
    });
  });
  describe("blurOnChange", () => {
    jest.useFakeTimers();
    it("transitions opacity to 0.8 then back to 1", () => {
      StyleHandler.blurOnChange(element, 0.8, 1);
      expect(element.style.transition).toMatch(/opacity 0.5s ease-in-out/);
      jest.advanceTimersByTime(50);
      expect(element.style.opacity).toBe("0.8");
      jest.advanceTimersByTime(50);
      expect(element.style.opacity).toBe("1");
    });
  });
});
