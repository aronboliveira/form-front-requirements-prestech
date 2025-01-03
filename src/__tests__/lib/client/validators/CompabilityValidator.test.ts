import CompabilityValidator from "../../../../lib/client/validators/CompabilityValidator";
describe("CompabilityValidator", () => {
  it("checks if Safari is detected via userAgentData (brands)", () => {
    const originalNavigator = { ...global.navigator };
    Object.defineProperty(global.navigator, "userAgentData", {
      value: {
        brands: [{ brand: "Safari", version: "15" }],
      },
      configurable: true,
    });
    expect(CompabilityValidator.isSafari()).toBe(true);
    Object.defineProperty(global.navigator, "userAgentData", {
      value: originalNavigator.userAgentData,
      configurable: true,
    });
  });
  it("checks using the fallback userAgent if userAgentData is unavailable", () => {
    const originalNavigator = { ...global.navigator };
    Object.defineProperty(global.navigator, "userAgentData", {
      value: undefined,
      configurable: true,
    });
    Object.defineProperty(global.navigator, "userAgent", {
      value:
        "Mozilla/5.0 (Macintosh; Intel Mac OS X) AppleWebKit/605.1.15 Safari/605.1.15",
      configurable: true,
    });
    expect(CompabilityValidator.isSafari()).toBe(true);
    Object.defineProperty(global.navigator, "userAgent", {
      value: originalNavigator.userAgent,
      configurable: true,
    });
  });
});
