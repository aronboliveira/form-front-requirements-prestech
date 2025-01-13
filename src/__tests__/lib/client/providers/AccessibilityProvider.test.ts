import { JSDOM } from "jsdom";
import AccessibilityProvider, {
  setRole,
} from "../../../../lib/client/providers/AccessibilityProvider";
describe("AccessibilityProvider", () => {
  let dom: JSDOM;
  let document: Document;
  beforeEach(() => {
    dom = new JSDOM(`
      <html>
        <body>
          <div id="test1"></div>
          <section id="test2"></section>
          <button id="test3" class="btn">Click me</button>
          <img id="test4" alt="Example image" />
        </body>
      </html>
    `);
    document = dom.window.document;
  });
  describe("constructor", () => {
    it("should filter out non-Element objects and store only valid Elements in #elements", () => {
      const el1 = document.getElementById("test1");
      const el2 = document.getElementById("test2");
      const provider = new AccessibilityProvider([el1, {}, el2] as any);
      expect(provider.elements.length).toBe(2);
      expect(provider.elements[0]).toBe(el1);
      expect(provider.elements[1]).toBe(el2);
    });
  });
  describe("setRole", () => {
    it("should set the role attribute on an element", () => {
      const el = document.getElementById("test1");
      setRole(el!, "button");
      expect(el?.getAttribute("role")).toBe("button");
    });
  });
  describe("setup", () => {
    it("should not throw if #elements is empty", () => {
      const provider = new AccessibilityProvider([]);
      expect(() => provider.setup()).not.toThrow();
    });
    it("should call methods for each accessible element", () => {
      const provider = new AccessibilityProvider([
        document.getElementById("test1"),
        document.getElementById("test2"),
        document.getElementById("test3"),
        document.getElementById("test4"),
      ]);
      const applyRoleSpy = jest.spyOn<any, any>(provider, "applyRole");
      const applyAriaLabelSpy = jest.spyOn<any, any>(
        provider,
        "applyAriaLabel"
      );
      const applyAriaDescriptionSpy = jest.spyOn<any, any>(
        provider,
        "applyAriaDescription"
      );
      const clearRedundantSpy = jest.spyOn<any, any>(
        provider,
        "clearRedundant"
      );
      provider.setup();
      expect(applyRoleSpy).toHaveBeenCalled();
      expect(applyAriaLabelSpy).toHaveBeenCalled();
      expect(applyAriaDescriptionSpy).toHaveBeenCalled();
      expect(clearRedundantSpy).toHaveBeenCalled();
      applyRoleSpy.mockRestore();
      applyAriaLabelSpy.mockRestore();
      applyAriaDescriptionSpy.mockRestore();
      clearRedundantSpy.mockRestore();
    });
  });
  describe("isAccessibleRich", () => {
    it("should return false for <head> or <meta> or .watcher, otherwise true", () => {
      const watcherDiv = document.createElement("div");
      watcherDiv.classList.add("watcher");
      const provider = new AccessibilityProvider([]);
      expect(provider.isAccessibleRich(document.createElement("head"))).toBe(
        false
      );
      expect(provider.isAccessibleRich(document.createElement("meta"))).toBe(
        false
      );
      expect(provider.isAccessibleRich(watcherDiv)).toBe(false);
      expect(provider.isAccessibleRich(document.createElement("div"))).toBe(
        true
      );
    });
  });
  describe("isRedundant", () => {
    it("should return true if element tagName is in redundant array", () => {
      const provider = new AccessibilityProvider([]);
      expect(provider.isRedundant(document.createElement("footer"))).toBe(true);
      expect(provider.isRedundant(document.createElement("div"))).toBe(false);
    });
  });
  describe("clearRedundant", () => {
    it("should remove role if element class does not contain customRole and role is a known redundant type", () => {
      const provider = new AccessibilityProvider([]);
      const footer = document.createElement("footer");
      footer.setAttribute("role", "contentinfo");
      provider.clearRedundant(footer);
      expect(footer.hasAttribute("role")).toBe(false);
    });
    it("should not remove role if classList has customRole", () => {
      const provider = new AccessibilityProvider([]);
      const section = document.createElement("section");
      section.setAttribute("role", "region");
      section.classList.add("customRole");
      provider.clearRedundant(section);
      expect(section.getAttribute("role")).toBe("region");
    });
  });
  describe("applyAriaLabel", () => {
    it("should set aria-label for a button that has text content", () => {
      const provider = new AccessibilityProvider([]);
      const btn = document.createElement("button");
      btn.id = "myButton";
      btn.textContent = "Search";
      document.body.appendChild(btn);
      provider["applyAriaLabel"](btn);
      expect(btn.getAttribute("aria-label")).toBe("Search");
    });
    it("should not overwrite existing aria-label", () => {
      const provider = new AccessibilityProvider([]);
      const btn = document.createElement("button");
      btn.textContent = "Search";
      btn.setAttribute("aria-label", "Already Labeled");
      document.body.appendChild(btn);
      provider["applyAriaLabel"](btn);
      expect(btn.getAttribute("aria-label")).toBe("Already Labeled");
    });
  });
  describe("applyAriaDescription", () => {
    it("should set aria-describedby when descriptor does not exist", () => {
      const provider = new AccessibilityProvider([]);
      const btn = document.createElement("button");
      document.body.appendChild(btn);
      provider["applyAriaDescription"](btn);
      expect(btn.getAttribute("aria-describedby")).toBeDefined();
    });
    it("should not set aria-describedby if the element already has one", () => {
      const provider = new AccessibilityProvider([]);
      const btn = document.createElement("button");
      btn.setAttribute("aria-describedby", "someDescriptor");
      document.body.appendChild(btn);
      provider["applyAriaDescription"](btn);
      expect(btn.getAttribute("aria-describedby")).toBe("someDescriptor");
    });
  });
  describe("applyRole", () => {
    it("should assign a default role to certain elements if none is set", () => {
      const provider = new AccessibilityProvider([]);
      const div = document.createElement("div");
      expect(div.getAttribute("role")).toBeNull();
      provider["applyRole"](div);
      expect(div.getAttribute("role")).not.toBeNull();
    });
    it("should not override an existing role", () => {
      const provider = new AccessibilityProvider([]);
      const div = document.createElement("div");
      div.setAttribute("role", "button");
      provider["applyRole"](div);
      expect(div.getAttribute("role")).toBe("button");
    });
  });
});
