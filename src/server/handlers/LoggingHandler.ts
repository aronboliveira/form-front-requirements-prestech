import fs from "fs/promises";
import path from "path";
export default class LoggingHandler {
  static async logDefault(
    payload: any,
    id: string = "Undefined"
  ): Promise<void> {
    const logDir = path.join(__dirname, "logs");
    try {
      await fs.mkdir(logDir, { recursive: true });
    } catch (err) {
      console.error("Error creating logs directory:", err);
      return;
    }
    const logF = path.join(logDir, "server.log");
    try {
      await fs.stat(logF);
    } catch {
      try {
        await fs.writeFile(logF, "", {
          encoding: "utf-8",
          mode: 0o660,
        });
      } catch (err) {
        console.error("Error creating log file:", err);
        return;
      }
    }
    try {
      await fs.appendFile(
        logF,
        `[${new Date().toISOString()}] ID: ${id}, Payload: ${payload}}\n`,
        { encoding: "utf-8", mode: 0o660 }
      );
    } catch (err) {
      console.error("Error appending to log file:", err);
    }
  }
}
