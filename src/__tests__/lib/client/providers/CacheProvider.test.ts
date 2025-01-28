import CacheProvider from "../../../../lib/client/providers/CacheProvider";
import clickToast from "../../../../components/bloc/toasts/ClickToast";
jest.mock("@/path/to/DOMHandler", () => ({
  queryByUniqueName: jest.fn(),
  extractValue: jest.fn(() => "mockValue"),
  getIdentifier: jest.fn(el => el.id || el.name),
}));
jest.mock("@/path/to/DOMValidator", () => ({
  isEntry: jest.fn(el => el instanceof HTMLElement),
  isDefaultEntry: jest.fn(el => el instanceof HTMLInputElement),
  isDefaultCheckable: jest.fn(
    el => el instanceof HTMLInputElement && el.type === "checkbox"
  ),
  isCustomEntry: jest.fn(() => false),
  isCustomCheckable: jest.fn(() => false),
}));
jest.mock("@/components/bloc/toasts/ClickToast", () =>
  jest.fn(() => Promise.resolve(true))
);
describe("CacheProvider", () => {
  let cacheProvider: CacheProvider;
  let mockElement: HTMLElement;
  beforeEach(() => {
    mockElement = document.createElement("div");
    mockElement.id = "testElement";
    document.body.appendChild(mockElement);
    cacheProvider = CacheProvider.construct(mockElement);
  });
  afterEach(() => {
    document.body.innerHTML = "";
    jest.clearAllMocks();
  });
  test("should create a singleton instance", () => {
    const anotherInstance = CacheProvider.construct(mockElement);
    expect(anotherInstance).toBe(cacheProvider);
  });
  test("should set up identifier for an element without id", () => {
    const elementWithoutId = document.createElement("div");
    document.body.appendChild(elementWithoutId);
    const provider = CacheProvider.construct(elementWithoutId);
    provider.setup();
    expect(elementWithoutId.id).toContain("_automatically_identified");
  });
  test("should set up links for elements with 'linked' class", () => {
    const linkedElement = document.createElement("div");
    linkedElement.classList.add("linked");
    linkedElement.dataset.linkedto = "targetElement";
    const targetElement = document.createElement("div");
    targetElement.id = "targetElement";
    document.body.append(linkedElement, targetElement);
    cacheProvider["#setupLinks"]([...document.querySelectorAll("*")]);
    expect(cacheProvider.refCache?.links.get("targetElement")).toBe(
      targetElement
    );
  });
  test("should verify link binding", () => {
    const linkedElement = document.createElement("div");
    linkedElement.id = "linkedElement";
    linkedElement.dataset.linkedto = "targetElement";
    const targetElement = document.createElement("div");
    targetElement.id = "targetElement";
    document.body.append(linkedElement, targetElement);
    cacheProvider.refCache?.links.set("linkedElement", targetElement);
    const result = cacheProvider.verifyLinkBinding("linkedElement");
    expect(result).toBe(true);
  });
  test("should fill persisters when session data exists", () => {
    sessionStorage.setItem(
      "testElement",
      JSON.stringify({ field1: "value1", field2: "value2" })
    );
    const input1 = document.createElement("input");
    input1.id = "field1";
    const input2 = document.createElement("input");
    input2.id = "field2";
    document.body.append(input1, input2);
    cacheProvider["#fillPersisters"]("testElement");
    expect(input1.value).toBe("value1");
    expect(input2.value).toBe("value2");
  });
  test("should not fill persisters if no session data is available", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});
    cacheProvider["#fillPersisters"]("nonExistentId");
    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining("Could not find element data")
    );
  });
  test("should clean up persisters with disconnected elements", () => {
    const idf = "testElement";
    sessionStorage.setItem(
      idf,
      JSON.stringify({ field1: "value1", field2: "value2" })
    );
    const input1 = document.createElement("input");
    input1.id = "field1";
    document.body.append(input1);
    cacheProvider["#setupPersisters"]([input1]);
    expect(sessionStorage.getItem(idf)).toContain("field1");
    expect(sessionStorage.getItem(idf)).not.toContain("field2");
  });
  test("should display toast and fill persisters if user agrees", async () => {
    const clickToastMock = clickToast as jest.Mock;
    clickToastMock.mockResolvedValueOnce(true);
    sessionStorage.setItem(
      "testElement",
      JSON.stringify({ field1: "value1", field2: "value2" })
    );
    const input1 = document.createElement("input");
    input1.id = "field1";
    const input2 = document.createElement("input");
    input2.id = "field2";
    document.body.append(input1, input2);
    cacheProvider.setup();
    expect(clickToastMock).toHaveBeenCalled();
    expect(input1.value).toBe("value1");
    expect(input2.value).toBe("value2");
  });
});
