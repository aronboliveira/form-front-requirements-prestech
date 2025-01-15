import CacheProvider from "../../../../lib/client/providers/CacheProvider";
import DOMValidator from "../../../../lib/client/validators/DOMValidator";
import clickToast from "../../../../components/bloc/toasts/ClickToast";
const sessionStorageMock: { [key: string]: string | null } = {};
Object.defineProperty(window, "sessionStorage", {
  value: {
    getItem: (key: string) => sessionStorageMock[key] ?? null,
    setItem: (key: string, value: string) => {
      sessionStorageMock[key] = value;
    },
    removeItem: (key: string) => {
      delete sessionStorageMock[key];
    },
    clear: () => {
      Object.keys(sessionStorageMock).forEach(
        k => delete sessionStorageMock[k]
      );
    },
  },
  writable: true,
});
jest.mock("../../../../lib/client/validators/DOMValidator", () => ({
  isEntry: jest.fn(),
  isDefaultEntry: jest.fn(),
  isDefaultCheckable: jest.fn(),
  isCustomEntry: jest.fn(),
  isCustomCheckable: jest.fn(),
}));
jest.mock("../../../../lib/client/handlers/DOMHandler", () => ({
  queryByUniqueName: jest.fn(),
}));
jest.mock("../../../../components/bloc/toasts/ClickToast", () => jest.fn());
describe("CacheProvider (Refactored)", () => {
  let formEl: HTMLFormElement, provider: CacheProvider;
  beforeEach(() => {
    jest.clearAllMocks();
    for (const k in sessionStorageMock) {
      delete sessionStorageMock[k];
    }
    (CacheProvider as any)._instance = undefined;
    CacheProvider.persisters = {};
    document.body.innerHTML = `
      <form id="testForm">
        <input id="inputOne" type="text" name="someName" value="initialVal" />
        <div id="divCheck" class="checkbox" data-checked="false"></div>
      </form>
    `;
    formEl = document.getElementById("testForm") as HTMLFormElement;
    document.body.dataset.checking = "";
  });
  describe("construct", () => {
    it("should create a new CacheProvider instance if none exists", () => {
      provider = CacheProvider.construct(formEl);
      expect(provider).toBeInstanceOf(CacheProvider);
    });
    it("should return the same instance if already constructed", () => {
      const first = CacheProvider.construct(formEl);
      const second = CacheProvider.construct(formEl);
      expect(first).toBe(second);
    });
  });
  describe("setup", () => {
    beforeEach(() => {
      provider = CacheProvider.construct(formEl);
    });
    it("should set up identifier, links, and skip early if dataset.checking='true'", () => {
      document.body.dataset.checking = "true";
      const spyCheckPersisters = jest.spyOn<any, any>(
        provider as any,
        "#checkForPersisters"
      );
      provider.setup();
      expect(spyCheckPersisters).not.toHaveBeenCalled();
    });
    it("should call #checkForPersisters and handle notFirstSession logic", async () => {
      sessionStorage.setItem("notFirstSession", "true");
      const spyCheckPersisters = jest
        .spyOn<any, any>(provider as any, "#checkForPersisters")
        .mockResolvedValue(true);
      (clickToast as jest.Mock).mockResolvedValue(true);
      provider.setup();
      await Promise.resolve();
      expect(spyCheckPersisters).toHaveBeenCalled();
      expect(clickToast).toHaveBeenCalledTimes(1);
    });
    it("should skip clickToast if 'notFirstSession' is not set", async () => {
      const spyCheckPersisters = jest
        .spyOn<any, any>(provider as any, "#checkForPersisters")
        .mockResolvedValue(true);
      provider.setup();
      await Promise.resolve();
      expect(spyCheckPersisters).toHaveBeenCalled();
      expect(clickToast).not.toHaveBeenCalled();
    });
  });
  describe("#checkForPersisters", () => {
    beforeEach(() => {
      provider = CacheProvider.construct(formEl);
    });
    it("should return false if no persister data or no non-empty values", async () => {
      sessionStorage.setItem("testForm", JSON.stringify({ role: "" }));
      const result = await (provider as any)["#checkForPersisters"]();
      expect(result).toBe(false);
    });
    it("should return true if there's some non-empty data", async () => {
      sessionStorage.setItem(
        "testForm",
        JSON.stringify({ role: "Desenvolvimento" })
      );
      const result = await (provider as any)["#checkForPersisters"]();
      expect(result).toBe(true);
    });
  });
  describe("#fillPersisters", () => {
    beforeEach(() => {
      provider = CacheProvider.construct(formEl);
    });
    it("should set 'roleChanged' if 'role' is in the data", () => {
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
        true
      );
      (DOMValidator.isDefaultCheckable as unknown as jest.Mock).mockReturnValue(
        false
      );
      sessionStorage.setItem(
        "testForm",
        JSON.stringify({ role: "Financeiro", inputOne: "testVal" })
      );
      (provider as any)["#fillPersisters"]("testForm");
      expect(sessionStorage.getItem("roleChanged")).toBe("true");
      const inputOne = document.getElementById("inputOne") as HTMLInputElement;
      expect(inputOne.value).toBe("testVal");
    });
  });
  describe("#setupPersisters", () => {
    beforeEach(() => {
      provider = CacheProvider.construct(formEl);
    });
    it("should gather entry values, store in static persisters, and put in sessionStorage", () => {
      (DOMValidator.isEntry as unknown as jest.Mock).mockReturnValue(true);
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
        true
      );
      (DOMValidator.isDefaultCheckable as unknown as jest.Mock).mockReturnValue(
        false
      );
      const els = [
        document.getElementById("inputOne")!,
        document.getElementById("divCheck")!,
      ];
      (provider as any)["#setupPersisters"](els);
      const stored = sessionStorage.getItem("testForm");
      expect(stored).not.toBeNull();
      const parsed = JSON.parse(stored!);
      expect(parsed["inputOne"]).toBe("initialVal");
    });
    it("should throw error if #element is missing", () => {
      (provider as any)["#element"] = null;
      const els = [document.getElementById("inputOne")!];
      expect(() => (provider as any)["#setupPersisters"](els)).toThrow(
        "HierarchyRequestError"
      );
    });
  });
  describe("verifyLinkBinding", () => {
    beforeEach(() => {
      provider = CacheProvider.construct(formEl);
    });
    it("should return false if link does not exist in refCache", () => {
      expect(provider.verifyLinkBinding("someId")).toBe(false);
    });
    it("should return true if link is already in refCache", () => {
      const refCache = provider.refCache!;
      refCache.links.set("myLink", document.createElement("span"));
      expect(provider.verifyLinkBinding("myLink")).toBe(true);
    });
  });
  describe("getters", () => {
    it("should return the #element from get element", () => {
      provider = CacheProvider.construct(formEl);
      expect(provider.element).toBe(formEl);
    });
    it("should return the #elementIdf from get idf", () => {
      provider = CacheProvider.construct(formEl);
      expect(provider.idf).toBe("testForm");
    });
  });
});
