import CacheProvider from "../../../../lib/client/providers/CacheProvider";
import DOMValidator from "../../../../lib/client/validators/DOMValidator";
const sessionStorageMock: { [key: string]: string | null } = {};
Object.defineProperty(window, "sessionStorage", {
  value: {
    getItem: (key: string) => sessionStorageMock[key] ?? null,
    setItem: (key: string, value: string) => (sessionStorageMock[key] = value),
    removeItem: (key: string) => delete sessionStorageMock[key],
    clear: () =>
      Object.keys(sessionStorageMock).forEach(
        key => delete sessionStorageMock[key]
      ),
  },
  writable: true,
});
jest.mock("../path/to/validators/DOMValidator", () => ({
  isEntry: jest.fn(),
  isDefaultEntry: jest.fn(),
  isCustomEntry: jest.fn(),
  isDefaultCheckable: jest.fn(),
  isCustomCheckable: jest.fn(),
}));
describe("CacheProvider Class", () => {
  let provider: CacheProvider, element: HTMLElement;
  beforeEach(() => {
    jest.clearAllMocks();
    for (const k in sessionStorageMock) delete sessionStorageMock[k];
    document.body.innerHTML = `
      <form id="testForm">
        <input id="inputOne" type="text" />
        <div id="divCheck" class="checkbox" data-checked="false"></div>
      </form>
    `;
    element = document.getElementById("testForm")!;
    provider = new CacheProvider(element);
  });
  describe("constructor", () => {
    it("should set refCache and #element", () => {
      expect(provider.refCache).toBeDefined();
      expect(provider.element).toBe(element);
    });
  });
  describe("setup", () => {
    it("should call private methods to setup identifier, links, etc.", () => {
      const spySetupIdentifier = jest
          .spyOn<any, any>(provider as any, "#setupIdentifier")
          .mockImplementation(() => {}),
        spySetupLinks = jest
          .spyOn<any, any>(provider as any, "#setupLinks")
          .mockImplementation(() => {});
      provider.setup();
      expect(spySetupIdentifier).toHaveBeenCalled();
      expect(spySetupLinks).toHaveBeenCalled();
      spySetupIdentifier.mockRestore();
      spySetupLinks.mockRestore();
      jest
        .spyOn<any, any>(provider as any, "#checkForPersisters")
        .mockResolvedValueOnce(false)
        .mockRestore();
    });
  });
  describe("verifyLinkBinding", () =>
    it("should return false if link does not exist", () =>
      expect(provider.verifyLinkBinding("doesNotExist")).toBe(false)));
  describe("#checkForPersisters", () => {
    it("should set up sessionStorage item and return true if found", async () => {
      sessionStorage.setItem("testForm", JSON.stringify({}));
      expect(await (provider as any)["#checkForPersisters"]()).toBe(true);
    });
    it("should catch errors if no item found and return false", async () =>
      expect(await (provider as any)["#checkForPersisters"]()).toBe(false));
  });
  describe("#fillPersisters", () => {
    it("should fill default entry values from sessionStorage", () => {
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
        true
      );
      (DOMValidator.isDefaultCheckable as unknown as jest.Mock).mockReturnValue(
        false
      );
      sessionStorage.setItem(
        "testForm",
        JSON.stringify({ inputOne: "testVal" })
      );
      (provider as any)["#fillPersisters"]();
      expect(
        (document.getElementById("inputOne") as HTMLInputElement).value
      ).toBe("testVal");
    });
    it("should fill custom entry dataset if custom entry", () => {
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
        false
      );
      (DOMValidator.isCustomEntry as unknown as jest.Mock).mockReturnValue(
        true
      );
      (DOMValidator.isCustomCheckable as unknown as jest.Mock).mockReturnValue(
        true
      );
      sessionStorage.setItem("testForm", JSON.stringify({ divCheck: "true" }));
      (provider as any)["#fillPersisters"]();
      expect(document.getElementById("divCheck")?.dataset.checked).toBe("true");
    });
  });
  describe("#setupPersisters", () => {
    it("should gather entries and store them in sessionStorage", () => {
      (DOMValidator.isEntry as unknown as jest.Mock).mockReturnValue(true);
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
        true
      );
      (DOMValidator.isDefaultCheckable as unknown as jest.Mock).mockReturnValue(
        false
      );
      const formEls = [
        document.getElementById("inputOne")!,
        document.getElementById("divCheck")!,
      ];
      (provider as any)["#setupPersisters"](formEls);
      const stored = sessionStorage.getItem("testForm");
      expect(stored).not.toBeNull();
      expect(JSON.parse(stored!)["inputOne"]).toBe("");
    });
  });
});
