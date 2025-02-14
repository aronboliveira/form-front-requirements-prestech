import LoggingHandler from "../../../server/handlers/LoggingHandler";
import fs from "fs/promises";
import path from "path";
jest.mock("fs/promises");
describe("LoggingHandler.logDefault", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test("creates log directory and file if they do not exist, then appends log", async () => {
    (fs.mkdir as jest.Mock).mockResolvedValue(undefined);
    (fs.stat as jest.Mock).mockRejectedValue(
      new Error("not exist")
    );
    (fs.writeFile as jest.Mock).mockResolvedValue(
      undefined
    );
    (fs.appendFile as jest.Mock).mockResolvedValue(
      undefined
    );
    const payload = "Test payload";
    const id = "TestID";
    await LoggingHandler.logDefault(payload, id);
    const logDir = path.join(__dirname, "logs");
    const logF = path.join(logDir, "server.log");
    expect(fs.mkdir).toHaveBeenCalledWith(logDir, {
      recursive: true,
    });
    expect(fs.stat).toHaveBeenCalledWith(logF);
    expect(fs.writeFile).toHaveBeenCalledWith(logF, "", {
      encoding: "utf-8",
      mode: 0o660,
    });
    expect(fs.appendFile).toHaveBeenCalled();
  });
  test("appends log if file already exists", async () => {
    (fs.mkdir as jest.Mock).mockResolvedValue(undefined);
    (fs.stat as jest.Mock).mockResolvedValue({});
    (fs.appendFile as jest.Mock).mockResolvedValue(
      undefined
    );
    const payload = "Another payload";
    const id = "AnotherID";
    await LoggingHandler.logDefault(payload, id);
    expect(fs.writeFile).not.toHaveBeenCalled();
    expect(fs.appendFile).toHaveBeenCalled();
  });
});
