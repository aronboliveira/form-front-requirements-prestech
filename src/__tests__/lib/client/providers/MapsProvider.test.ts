/**
 * @jest-environment jsdom
 */
import MapsProvider from "../../../../lib/client/providers/MapsProvider";
describe("MapsProvider", () => {
  let mockMaps: Map<any, Map<any, any>>;
  beforeEach(() => {
    mockMaps = new Map([
      [
        "map1",
        new Map([
          ["default", "defaultValue"],
          ["key1", "value1"],
          ["key2", ""],
        ]),
      ],
      [
        "map2",
        new Map([
          ["default", "anotherDefault"],
          ["keyA", ""],
        ]),
      ],
    ]);
  });
  it("should initialize with provided maps", () =>
    expect(new MapsProvider(mockMaps).maps).toBe(mockMaps));
  it("should correctly setup maps with default values", () => {
    const provider = new MapsProvider(mockMaps).setup();
    expect(provider.maps.get("map1")?.get("key2")).toBe("defaultValue");
    expect(provider.maps.get("map2")?.get("keyA")).toBe("anotherDefault");
  });
  it("should not modify entries that already have values", () =>
    expect(
      new MapsProvider(mockMaps).setup().maps.get("map1")?.get("key1")
    ).toBe("value1"));
  it("should return the same instance after setup", () => {
    const provider = new MapsProvider(mockMaps);
    const setupProvider = provider.setup();
    expect(provider).toBe(setupProvider);
  });
  it("should handle empty or undefined inner maps gracefully", () => {
    const emptyMockMaps = new Map([
      ["map1", new Map()],
      ["map2", undefined],
    ]);
    const provider = new MapsProvider(emptyMockMaps as any).setup();
    expect(provider.maps.get("map1")?.size).toBe(0);
    expect(provider.maps.get("map2")).toBeUndefined();
  });
  it("should not modify maps without a 'default' key", () =>
    expect(
      new MapsProvider(
        new Map([
          [
            "map1",
            new Map([
              ["key1", "value1"],
              ["key2", ""],
            ]),
          ],
        ])
      )
        .setup()
        .maps.get("map1")
        ?.get("key2")
    ).toBe(""));
});
