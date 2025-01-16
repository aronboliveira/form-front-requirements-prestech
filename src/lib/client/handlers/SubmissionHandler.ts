import { toast } from "react-hot-toast";
import axios, { AxiosResponse } from "axios";
import { PostHeaders } from "@/lib/definitions/foundations";
import ExceptionHandler from "./ErrorHandler";
import { entryElement, voidish } from "@/lib/definitions/client/helpers";
import DOMValidator from "../validators/DOMValidator";
import SubmissionProcessor from "../processors/SubmissionProcessor";
import DOMHandler from "./DOMHandler";
import { flags } from "../vars";
export default class SubmissionHandler {
  private static _instance: SubmissionHandler;
  readonly #processor: SubmissionProcessor;
  #form: HTMLFormElement;
  #attempts: number;
  formId: string;
  constructor(_form: HTMLFormElement, _processor?: SubmissionProcessor) {
    if (!SubmissionHandler._instance) SubmissionHandler._instance = this;
    this.#processor = _processor || new SubmissionProcessor();
    this.#form = _form;
    this.#attempts = 0;
    this.formId = _form.id || _form.name || "";
  }
  public static construct(
    _form: HTMLFormElement,
    _processor?: SubmissionProcessor
  ): SubmissionHandler {
    return SubmissionHandler._instance
      ? SubmissionHandler._instance
      : new SubmissionHandler(_form, _processor);
  }
  public canSubmit(caller: HTMLElement): boolean {
    this.#attempts += 1;
    if (this.#attempts > 4) {
      const id = DOMHandler.getIdentifier(caller);
      if (DOMValidator.isDefaultDisableable(caller)) {
        caller.disabled = true;
        setTimeout(() => {
          if (!id) return;
          const caller = DOMHandler.queryByUniqueName(id);
          if (!caller || !DOMValidator.isDefaultDisableable(caller)) return;
          caller.disabled = false;
        }, 3000);
      } else if (DOMValidator.isCustomDisableable(caller)) {
        caller.dataset.disabled = "true";
        if (!caller.classList.contains("disabled"))
          caller.classList.add("disabled");
        setTimeout(() => {
          if (!id) return;
          const caller = document.getElementById(id);
          if (!caller || !DOMValidator.isCustomDisableable(caller)) return;
          caller.hasAttribute("dataset-disabled") &&
            caller.removeAttribute("dataset-disabled");
        }, 3000);
      }
      toast(
        navigator.language.startsWith("pt-")
          ? "Tentativas excedidas para o intervalo de tempo. Aguarde para tentar novamente."
          : "Attempts exceded for the time interval. Please wait and try again.",
        { icon: "⏳" }
      );
      setTimeout(() => {
        const submitBtn =
          document.getElementById("submitBtn") ||
          document.querySelector('a[href*="/base"]');
        if (
          submitBtn instanceof HTMLButtonElement ||
          submitBtn instanceof HTMLInputElement
        )
          submitBtn.disabled = false;
      }, 3000);
      return false;
    } else if (this.#attempts === 1) {
      setTimeout(() => {
        this.#attempts = 0;
      }, 10000);
    }
    return true;
  }
  public submit(
    endpoint: string,
    axios: boolean = true
  ): { ok: boolean; cause: string } {
    this.#setForm();
    if (this.#form.noValidate)
      return { ok: false, cause: "Form noValidate attribute active" };
    const { successful, failed, successfulCustom, failedCustom } = this.scan();
    for (const fail of failed) {
      if (!fail.required) continue;
      fail.scrollIntoView({ block: "center", inline: "center" });
      return {
        ok: false,
        cause: flags.pt
          ? "Falha na validação de entrada exigida"
          : "Failed to validate a required entry",
      };
    }
    for (const fail of failedCustom) {
      if (!fail.dataset.required) continue;
      fail.scrollIntoView({ block: "center", inline: "center" });
      return {
        ok: false,
        cause: flags.pt
          ? "Falha na validação de entrada exigida"
          : "Failed to validate a required entry",
      };
    }
    const ss = [...successful, ...successfulCustom];
    if (
      ss.length <
      [...this.#form.elements].filter(e => DOMValidator.isEntry(e)).length
    )
      return {
        ok: false,
        cause: flags.pt
          ? "Foram capturadas menos entradas do que o exigido"
          : "The read number of entries was less than the mininum",
      };
    const data: { [k: string]: string } = {};
    for (const s of ss) {
      if (DOMValidator.isDefaultEntry(s))
        data[s.name || s.id] = DOMHandler.extractValue(s);
      else if (!(s.dataset.name || s.dataset.id)) continue;
      data[(s.dataset.name as string) || (s.dataset.id as string)] =
        DOMHandler.extractValue(s);
    }
    axios
      ? this.#sendToServerWithAxios(endpoint, data)
      : this.#fetchToServer(endpoint, data);
    return { ok: true, cause: "Form correctly submitted" };
  }
  public scan(): {
    successful: entryElement[];
    failed: entryElement[];
    successfulCustom: HTMLElement[];
    failedCustom: HTMLElement[];
  } {
    this.#setForm();
    const els = [
        ...[...this.#form.elements].filter(e => DOMValidator.isDefaultEntry(e)),
        ...[...this.#form.querySelectorAll(".customRole")].filter(
          e => e instanceof HTMLElement && DOMValidator.isCustomEntry(e)
        ),
      ],
      successful: entryElement[] = [],
      failed: entryElement[] = [],
      successfulCustom: HTMLElement[] = [],
      failedCustom: HTMLElement[] = [];
    if (!els.length)
      return { successful, failed, successfulCustom, failedCustom };
    for (let i = 0; i < els.length; i++) {
      const el = els[i];
      if (!(el instanceof HTMLElement)) continue;
      const res = this.#processor.process(el);
      switch (res) {
        case 0:
          failed.push(el as entryElement);
          continue;
        case 1:
          successful.push(el as entryElement);
          continue;
        case 2:
          failedCustom.push(el);
          continue;
        case 3:
          successfulCustom.push(el);
          continue;
        default:
          continue;
      }
    }
    return { successful, failed, successfulCustom, failedCustom };
  }
  async #sendToServerWithAxios(
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
      return new Response("", {
        status: typeof status === "number" ? status : status.status,
        statusText:
          typeof status === "number"
            ? status.toString().startsWith("4")
              ? flags.pt
                ? "Erro localizando recursos"
                : "Failed locating resources"
              : flags.pt
              ? "Erro interno"
              : "Internal Error"
            : ExceptionHandler.getFriendlyErrorMessage(status.type),
      });
    }
  }
  async #fetchToServer(
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
      return new Response("", {
        status: typeof status === "number" ? status : status.status,
        statusText: ExceptionHandler.getFriendlyErrorMessage(status.type),
      });
    }
  }
  public handleResponse(res: Response | AxiosResponse, router: any) {
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
  public getInstance(): SubmissionHandler | void {
    return SubmissionHandler._instance;
  }
  public get form(): HTMLFormElement | voidish {
    return this.#form;
  }
  #setForm(): boolean {
    if (this.#form && this.#form.isConnected) return true;
    const form = DOMHandler.queryByUniqueName(this.formId) as any;
    if (!(form instanceof HTMLFormElement)) return false;
    this.#form = form;
    return true;
  }
  public get processor(): SubmissionProcessor {
    return this.#processor;
  }
  public get attemps(): number {
    return this.#attempts;
  }
}