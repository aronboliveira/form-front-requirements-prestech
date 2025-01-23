import ObjectHelper from "@/lib/helpers/ObjectHelper";
import fs from "fs";
import path from "path";
export default class LoggingHandler {
  static logDefault(payload: any, id: string = "Undefined"): void {
    fs.appendFileSync(
      path.join(__dirname, "logs", "server.log"),
      `[${new Date().toISOString()}] ID: ${id}, Payload: ${ObjectHelper.JSONSafeStringify(
        payload
      )}\n`,
      { encoding: "utf-8", mode: 0o660 }
    );
  }
}
