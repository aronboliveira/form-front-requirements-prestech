import { nlHtEl, rMouseEvent } from "@/lib/definitions/client/helpers";

export default class DOMHandler {
  #shouldEvaluateTime: boolean = false;
  #shouldEvaluateClient: boolean = false;
  #clientAttempt: number = 0;
  #lastClickTime: number = 0;
  #lastClickX: number = 0;
  #lastClickY: number = 0;
  constructor(public ev: React.UIEvent | React.MouseEvent | Event) {
    this.ev = ev;
  }
  static isClickOutside(
    event: MouseEvent | React.MouseEvent,
    dlgInBtn: Element
  ): boolean[] {
    try {
      if (!document.querySelector(`#${dlgInBtn.id}` || "dialog"))
        throw new Error(`Modal for outside click not in screen anymore.`);
      const rect = dlgInBtn.getBoundingClientRect(),
        { clientX, clientY } = event;
      return [
        clientX < rect.left,
        clientX > rect.right,
        clientY < rect.top,
        clientY > rect.bottom,
      ];
    } catch (e) {
      return [false, false, false, false];
    }
  }
  static queryByUniqueName(idf: string): nlHtEl {
    const names = document.getElementsByName(idf);
    if (names.length === 1) return names[0];
    else return null;
  }
  public get shouldEvaluateTime(): boolean {
    return this.#shouldEvaluateTime;
  }
  public get shouldEvaluateClient(): boolean {
    return this.#shouldEvaluateClient;
  }
  public get clientAttempt(): number {
    return this.#clientAttempt;
  }
  public get lastClickTime(): number {
    return this.#lastClickTime;
  }
  public get lastClickX(): number {
    return this.#lastClickX;
  }
  public get lastClickY(): number {
    return this.#lastClickY;
  }
  #setLastClickTime(time: number): void {
    this.#lastClickTime = time;
  }
  #setLastClickCoordinates(x: number, y: number): void {
    this.#lastClickX = x;
    this.#lastClickY = y;
  }
  #incrementClientAttempt(): void {
    this.#clientAttempt += 1;
  }
  #enableEvaluateTime(): void {
    this.#shouldEvaluateTime = true;
  }
  #enableEvaluateClient(): void {
    this.#shouldEvaluateClient = true;
  }
  #isTrustedEvent(ev: rMouseEvent): boolean {
    return ev.isTrusted;
  }
  #isMouseMovementZero(ev: rMouseEvent): boolean {
    return ev.movementX === 0 && ev.movementY === 0;
  }
  #isSuspiciousTimeInterval(): boolean {
    return new Date().getTime() - this.#lastClickTime < 100;
  }
  #isSuspiciousClientMovement(ev: rMouseEvent): boolean {
    return (
      this.#clientAttempt > 1 &&
      ev.clientX === this.#lastClickX &&
      ev.clientY === this.#lastClickY
    );
  }
  public evaluateClickMovements(): [string, boolean] {
    let suspicious = true;
    const pt = navigator.language.startsWith("pt-");
    try {
      if (!("movementX" in this.ev))
        throw new Error("Invalid instance for Event");
      if (
        !this.#isTrustedEvent(this.ev) &&
        !(
          window &&
          localStorage.getItem("shouldTrustNavigate") &&
          localStorage.getItem("shouldTrustNavigate") === "true"
        )
      ) {
        return [
          pt
            ? "Evento de mouse não confiável. Por favor aguarde para tentar novamente."
            : "Mouse event not trusted. Please wait and try again.",
          suspicious,
        ];
      }
      if (!this.#isMouseMovementZero(this.ev)) {
        return [
          pt
            ? "Movimento de mouse não confiável. Por favor aguarde para tentar novamente."
            : "Mouse movement not trusted. Please wait and try again.",
          suspicious,
        ];
      }
      if (this.#shouldEvaluateTime && this.#isSuspiciousTimeInterval()) {
        return [
          pt
            ? "Intervalo de movimento do mouse não confiável. Por favor aguarde para tentar novamente."
            : "Mouse interval tracked as suspicious. Please retry later.",
          suspicious,
        ];
      }
      this.#enableEvaluateTime();
      this.#setLastClickTime(new Date().getTime());
      if (
        this.#shouldEvaluateClient &&
        this.#isSuspiciousClientMovement(this.ev)
      ) {
        return [
          pt
            ? "Deslocamento de mouse não confiável. Por favor aguarde para tentar novamente."
            : "Mouse pattern tracked as suspicious. Please wait and try again.",
          suspicious,
        ];
      }
      this.#enableEvaluateClient();
      this.#incrementClientAttempt();
      this.#setLastClickCoordinates(this.ev.clientX, this.ev.clientY);
      suspicious = false;
      localStorage.getItem("shouldTrustNavigate") &&
        localStorage.removeItem("shouldTrustNavigate");
      return ["Attempt validated.", suspicious];
    } catch (e) {
      return [
        pt
          ? "Não foi possível validar a solicitação. Por favor aguarde para tentar novamente."
          : "It wasn't possible to validate the request. Please wait for trying again.",
        suspicious,
      ];
    }
  }
}
