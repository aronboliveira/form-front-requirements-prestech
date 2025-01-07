/**
 * @jest-environment jsdom
 */
import CompabilityValidator from "../../../../lib/client/validators/CompabilityValidator";
describe("CompabilityValidator", () => {
  let originalNavigator: Navigator;
  beforeEach(() => (originalNavigator = { ...navigator }));
  afterEach(() =>
    Object.defineProperty(window, "navigator", {
      value: originalNavigator,
      configurable: true,
    })
  );
  it("detects Safari browser", () => {
    Object.defineProperty(window, "navigator", {
      value: {
        userAgent: "Safari/537.36",
        userAgentData: {
          brands: [{ brand: "Safari", version: "15.4" }],
        },
      },
      configurable: true,
    });
    expect(CompabilityValidator.isSafari()).toBe(true);
  });
  it("detects Chromium browsers", () => {
    Object.defineProperty(window, "navigator", {
      value: {
        userAgent: "Chrome/91.0.4472.124",
        userAgentData: {
          brands: [{ brand: "Chrome", version: "91.0" }],
        },
      },
      configurable: true,
    });
    expect(CompabilityValidator.isChromium()).toBe(true);
  });
  it("detects Firefox browser", () => {
    Object.defineProperty(window, "navigator", {
      value: {
        userAgent: "Mozilla/5.0 Firefox/89.0",
        userAgentData: {
          brands: [{ brand: "Firefox", version: "89.0" }],
        },
      },
      configurable: true,
    });
    expect(CompabilityValidator.isFirefox()).toBe(true);
  });
  it("detects Internet Explorer browser", () => {
    Object.defineProperty(window, "navigator", {
      value: {
        userAgent: "MSIE 10.0; Windows NT 6.1; Trident/6.0",
      },
      configurable: true,
    });
    expect(CompabilityValidator.isExplorer()).toBe(true);
  });
  it("detects Webkit browser (Safari or Chromium)", () => {
    Object.defineProperty(window, "navigator", {
      value: {
        userAgent: "Chrome/91.0.4472.124",
        userAgentData: {
          brands: [{ brand: "Chrome", version: "91.0" }],
        },
      },
      configurable: true,
    });
    expect(CompabilityValidator.isWebkit()).toBe(true);
  });
  it("returns false for unsupported browsers", () => {
    Object.defineProperty(window, "navigator", {
      value: {
        userAgent: "UnknownBrowser/1.0",
        userAgentData: {
          brands: [{ brand: "Unknown", version: "1.0" }],
        },
      },
      configurable: true,
    });
    expect(CompabilityValidator.isSafari()).toBe(false);
    expect(CompabilityValidator.isChromium()).toBe(false);
    expect(CompabilityValidator.isFirefox()).toBe(false);
    expect(CompabilityValidator.isExplorer()).toBe(false);
    expect(CompabilityValidator.isWebkit()).toBe(false);
  });
});
