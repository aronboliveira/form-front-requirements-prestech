import CacheProvider from "../../../../lib/client/providers/CacheProvider";
import DOMValidator from "../../../../lib/client/validators/DOMValidator";
import DOMHandler from "../../../../lib/client/handlers/DOMHandler";
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
jest.mock("../path/to/validators/DOMValidator", () => ({
  isEntry: jest.fn(),
  isDefaultEntry: jest.fn(),
  isDefaultCheckable: jest.fn(),
  isCustomEntry: jest.fn(),
  isCustomCheckable: jest.fn(),
}));
jest.mock("../path/to/handlers/DOMHandler", () => ({
  queryByUniqueName: jest.fn(),
}));
jest.mock("../path/to/components/bloc/toasts/ClickToast", () => jest.fn());
describe("CacheProvider (Refactored)", () => {
  let formEl: HTMLFormElement;
  let provider: CacheProvider;
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
  describe("construct()", () => {
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
  describe("setup()", () => {
    beforeEach(() => {
      provider = CacheProvider.construct(formEl);
    });
    it("should set up identifier and links, then check persisters and call clickToast", async () => {
      const spySetupIdentifier = jest
        .spyOn<any, any>(provider as any, "#setupIdentifier")
        .mockImplementation(() => {});
      const spySetupLinks = jest
        .spyOn<any, any>(provider as any, "#setupLinks")
        .mockImplementation(() => {});
      const spyCheckPersisters = jest
        .spyOn<any, any>(provider as any, "#checkForPersisters")
        .mockResolvedValue(true);
      (clickToast as jest.Mock).mockResolvedValue(true);
      provider.setup();
      expect(spySetupIdentifier).toHaveBeenCalled();
      expect(spySetupLinks).toHaveBeenCalled();
      await Promise.resolve();
      expect(spyCheckPersisters).toHaveBeenCalled();
      expect(clickToast).toHaveBeenCalledTimes(1);
      spySetupIdentifier.mockRestore();
      spySetupLinks.mockRestore();
      spyCheckPersisters.mockRestore();
    });
    it("should exit early if document.body.dataset.checking === 'true'", () => {
      document.body.dataset.checking = "true";
      const spyCheckPersisters = jest.spyOn<any, any>(
        provider as any,
        "#checkForPersisters"
      );
      provider.setup();
      expect(spyCheckPersisters).not.toHaveBeenCalled();
    });
    it("should call #fillPersisters if clickToast resolves to true", async () => {
      (clickToast as jest.Mock).mockResolvedValue(true);
      const fillPersistersSpy = jest
        .spyOn<any, any>(provider as any, "#fillPersisters")
        .mockImplementation(() => {});
      provider.setup();
      await Promise.resolve();
      expect(fillPersistersSpy).toHaveBeenCalled();
      fillPersistersSpy.mockRestore();
    });
    it("should NOT call #fillPersisters if clickToast resolves to false", async () => {
      (clickToast as jest.Mock).mockResolvedValue(false);
      const fillPersistersSpy = jest
        .spyOn<any, any>(provider as any, "#fillPersisters")
        .mockImplementation(() => {});
      provider.setup();
      await Promise.resolve();

      expect(fillPersistersSpy).not.toHaveBeenCalled();
      fillPersistersSpy.mockRestore();
    });
    it("should eventually call #setupPersisters twice if #checkForPersisters => false and user says yes", async () => {
      jest.useFakeTimers();
      (clickToast as jest.Mock).mockResolvedValue(true);
      const spyCheckPersisters = jest
        .spyOn<any, any>(provider as any, "#checkForPersisters")
        .mockResolvedValue(false);
      const spySetupPersisters = jest
        .spyOn<any, any>(provider as any, "#setupPersisters")
        .mockImplementation(() => {});
      provider.setup();
      await Promise.resolve();
      expect(spyCheckPersisters).toHaveBeenCalled();
      jest.advanceTimersByTime(300);
      expect(spySetupPersisters).toHaveBeenCalledTimes(1);
      await Promise.resolve();
      jest.advanceTimersByTime(300);
      expect(spySetupPersisters).toHaveBeenCalledTimes(2);
      jest.useRealTimers();
      spyCheckPersisters.mockRestore();
      spySetupPersisters.mockRestore();
    });
  });
  describe("#checkForPersisters()", () => {
    beforeEach(() => {
      provider = CacheProvider.construct(formEl);
    });
    it("should return true if sessionStorage has an item for the form's ID", async () => {
      sessionStorage.setItem("testForm", JSON.stringify({}));
      const result = await (provider as any)["#checkForPersisters"]();
      expect(result).toBe(true);
    });
    it("should return false if no sessionStorage item found", async () => {
      const result = await (provider as any)["#checkForPersisters"]();
      expect(result).toBe(false);
    });
    it("should catch error and return false if #element has no valid id or name", async () => {
      const noIdEl = document.createElement("div");
      (CacheProvider as any)._instance = undefined;
      const providerNoId = CacheProvider.construct(noIdEl as HTMLElement);
      const result = await (providerNoId as any)["#checkForPersisters"]();
      expect(result).toBe(false);
    });
  });
  describe("#fillPersisters()", () => {
    beforeEach(() => {
      provider = CacheProvider.construct(formEl);
    });
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
      (provider as any)["#fillPersisters"]("testForm");
      const inputOne = document.getElementById("inputOne") as HTMLInputElement;
      expect(inputOne.value).toBe("testVal");
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
      (provider as any)["#fillPersisters"]("testForm");
      const divCheck = document.getElementById("divCheck");
      expect(divCheck?.dataset.checked).toBe("true");
    });
    it("should look up element by unique name if not found by ID", () => {
      (DOMValidator.isDefaultEntry as unknown as jest.Mock).mockReturnValue(
        true
      );
      (DOMValidator.isDefaultCheckable as unknown as jest.Mock).mockReturnValue(
        false
      );
      sessionStorage.setItem(
        "testForm",
        JSON.stringify({ missingId: "someVal" })
      );
      const fakeElem = document.createElement("input");
      fakeElem.value = "";
      (DOMHandler.queryByUniqueName as unknown as jest.Mock).mockReturnValue(
        fakeElem
      );
      (provider as any)["#fillPersisters"]("testForm");
      expect(fakeElem.value).toBe("someVal");
    });
  });
  describe("#setupPersisters()", () => {
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
  describe("verifyLinkBinding()", () => {
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
    it("should return the #element from get element()", () => {
      provider = CacheProvider.construct(formEl);
      expect(provider.element).toBe(formEl);
    });
    it("should return the #elementIdf from get idf()", () => {
      provider = CacheProvider.construct(formEl);
      expect(provider.idf).toBe("testForm");
    });
  });
});
