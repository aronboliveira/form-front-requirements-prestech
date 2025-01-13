import { toast } from "react-hot-toast";
import axios, { AxiosResponse } from "axios";
import { PostHeaders } from "@/lib/definitions/foundations";
import ExceptionHandler from "./ErrorHandler";
export default class SubmissionHandler {
  static async sendToServerWithAxios(
    endpoint: string,
    data: { [k: string]: string },
    headers: PostHeaders = {
      "Content-Type": "application/json",
    }
  ): Promise<any> {
    try {
      const res = await axios.post(endpoint, data, {
        headers,
      });
      return res;
    } catch (e) {
      let status =
        axios.isAxiosError(e) && e.response
          ? e.response?.status || 500
          : ExceptionHandler.classify(e as Error);
      console.error(
        `Error sending data with Axios:\n${status}.${(e as Error).name} — ${
          (e as Error).message
        }`
      );
    }
  }
  static async fetchToServer(
    endpoint: string,
    data: { [k: string]: string },
    headers: PostHeaders = {
      "Content-Type": "application/json",
    }
  ) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers,
        body: JSON.stringify(data),
      });
      return res;
    } catch (e) {
      const status = ExceptionHandler.classify(e as Error);
      console.error(
        `Error fetching data:\n${status}.${(e as Error).name} — ${
          (e as Error).message
        }`
      );
    }
  }
  static handleResponse(res: Response | AxiosResponse, router: any) {
    if (res.status.toString().startsWith("2")) {
      toast.success("O formulário foi submetido com sucesso!");
      setTimeout(() => router.push("/"), 2000);
    } else {
      try {
        toast.error(
          `Houve um erro inesperado no envio do formulário. Status: ${res.status}`
        );
        throw new Error(
          `HTTP Error: ${res.status} — ${"text" in res ? res.text : res.data}`
        );
      } catch (e) {
        console.error(`Error handling HTTP Response:\n${(e as Error).message}`);
      }
    }
  }
  //TODO THROTLING
  private static instance: SubmissionHandler;
  private lastClickTime: number = 0;
  private attemptCount: number = 0;
  private lockedUntil: number | null = null;
  public static getInstance(): SubmissionHandler {
    if (!SubmissionHandler.instance) {
      SubmissionHandler.instance = new SubmissionHandler();
    }
    return SubmissionHandler.instance;
  }
  canSubmit(): boolean {
    const now = Date.now();
    if (this.lockedUntil && now < this.lockedUntil) {
      alert(
        "You've attempted too many submissions. " +
          "Please wait 10 minutes before trying again."
      );
      return false;
    }
    if (now - this.lastClickTime < 5000) {
      alert("Please wait 5 seconds between submissions.");
      return false;
    }
    if (this.attemptCount >= 3 && now - this.lastClickTime < 60000) {
      this.lockedUntil = now + 10 * 60 * 1000;
      alert(
        "You've attempted too many times. " +
          "You're locked out for 10 minutes."
      );
      return false;
    }
    this.lastClickTime = now;
    this.attemptCount++;
    return true;
  }
  resetAttempts(): void {
    this.attemptCount = 0;
    this.lockedUntil = null;
  }
}
