import { utils, writeFile } from "xlsx";
import SpreadsheetMapper from "../../../../lib/client/mappers/SpreadsheetMapper";
jest.spyOn(console, "log").mockImplementation(() => {});
jest.spyOn(console, "error").mockImplementation(() => {});
jest.mock("xlsx", () => ({
  utils: {
    book_new: jest.fn(() => ({})),
    json_to_sheet: jest.fn(() => ({})),
    book_append_sheet: jest.fn(),
    encode_cell: jest.fn(() => "A1"),
  },
  writeFile: jest.fn(),
}));
const mockFile = jest.fn();
const mockGenerateAsync = jest.fn(
  async () => new Blob(["dummy zip"])
);
jest.mock("jszip", () => {
  return jest.fn().mockImplementation(() => ({
    file: mockFile,
    generateAsync: mockGenerateAsync,
  }));
});
describe("SpreadsheetMapper", () => {
  beforeEach(() => {
    (SpreadsheetMapper as any)._instance = undefined;
    document.body.innerHTML = "";
  });
  describe("extractData", () => {
    beforeEach(() => {
      const input = document.createElement("input");
      input.id = "input1";
      input.value = "dummy value";
      input.dataset.xls = "titulo_do_input";
      const textarea = document.createElement("textarea");
      textarea.id = "textarea1";
      textarea.value = "texto da área";
      const select = document.createElement("select");
      select.id = "select1";
      const opt = document.createElement("option");
      opt.value = "opcao1";
      opt.textContent = "opcao1";
      select.appendChild(opt);
      document.body.appendChild(input);
      document.body.appendChild(textarea);
      document.body.appendChild(select);
    });
    test("extractData returns an object with elsDefs and imageEls", () => {
      const extracted =
        SpreadsheetMapper.extractData(document);
      expect(extracted).toHaveProperty("elsDefs");
      expect(typeof extracted.elsDefs).toBe("object");
      expect(
        Object.keys(extracted.elsDefs).length
      ).toBeGreaterThan(0);
      expect(extracted).toHaveProperty("imageEls");
      expect(typeof extracted.imageEls).toBe("object");
    });
  });
  describe("processExportData", () => {
    let dummyData: {
      elsDefs: {
        [k: string]: {
          title: string | undefined;
          v: string | undefined;
          type: "s" | "b" | "n" | "d" | "i" | undefined;
        };
      };
      imageEls: {
        [k: string]: HTMLCanvasElement | HTMLInputElement;
      };
    };
    beforeEach(() => {
      dummyData = {
        elsDefs: {
          input1: {
            title: "Input 1",
            v: "valor",
            type: "s",
          },
        },
        imageEls: {},
      };
      (writeFile as jest.Mock).mockClear();
      (utils.book_new as jest.Mock).mockClear();
      (utils.json_to_sheet as jest.Mock).mockClear();
      (utils.book_append_sheet as jest.Mock).mockClear();
    });
    test("processExportData writes a file when namer is provided as a string", () => {
      const mapper = SpreadsheetMapper.construct(dummyData);
      mapper.processExportData(
        "testContext",
        document,
        "exportName"
      );
      expect(writeFile).toHaveBeenCalled();
      const callArgs = (writeFile as jest.Mock).mock.calls;
      const fileNameArg = callArgs[0][1];
      expect(typeof fileNameArg).toBe("string");
      expect(fileNameArg).toMatch(/testContext/);
    });
    test("processExportData triggers image processing when imageEls exist", async () => {
      const dummyCanvas = document.createElement("canvas");
      dummyCanvas.id = "canvas1";
      dummyCanvas.toDataURL = jest.fn(
        () => "data:image/png;base64,dummy"
      );
      dummyData.imageEls = { canvas1: dummyCanvas };
      const mapper = SpreadsheetMapper.construct(dummyData);
      global.fetch = jest.fn(() =>
        Promise.resolve({
          blob: () =>
            Promise.resolve(new Blob(["dummy image"])),
        } as Response)
      );
      const createElementSpy = jest.spyOn(
        document,
        "createElement"
      );
      mapper.processExportData(
        "imgContext",
        document,
        "exportName"
      );
      await Promise.resolve();
      expect(mockGenerateAsync).toHaveBeenCalled();
      expect(createElementSpy).toHaveBeenCalledWith("a");
      (global.fetch as jest.Mock).mockRestore();
    });
  });
});
