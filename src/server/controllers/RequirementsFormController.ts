import {
  HTTPResponseCode,
  PostController,
  RequestOpts,
} from "@/lib/definitions/foundations";
import { NextResponse } from "next/server";
export default class RequirementFormController implements PostController {
  static _instance: RequirementFormController;
  static defMsg: string = "Undefined response message";
  defStatus: HTTPResponseCode;
  readonly max: number;
  _reqs: Array<RequestOpts> | null;
  constructor(_reqs: Array<RequestOpts>, _max: number = 64) {
    this.max = _max;
    Object.defineProperty(this, "max", {
      value: _max,
      writable: false,
      configurable: false,
    });
    this._reqs = this === RequirementFormController._instance ? null : _reqs;
    this.defStatus = this === RequirementFormController._instance ? 500 : 422;
    this._reqs?.forEach(req => {
      if (!req.priority && req.priority !== 0) req.priority = _reqs.length;
      this._reqs?.push(req);
    });
    this._reqs &&
      this._reqs.sort(
        (a, b) =>
          (a.priority ?? this._reqs!.length) -
          (b.priority ?? this._reqs!.length)
      );
  }
  public static construct(
    _reqs: Array<RequestOpts>,
    _max: number = 64
  ): RequirementFormController {
    if (!RequirementFormController._instance) {
      RequirementFormController._instance = new RequirementFormController(
        _reqs,
        64
      );
      RequirementFormController._instance._clearRequests();
    }
    return RequirementFormController._instance;
  }
  #checkQueue(checkLength: boolean = false): {
    ok: boolean;
    msg: string;
    status: HTTPResponseCode;
  } {
    if (!this._reqs) {
      const msg = `No Requests List available for the instance`;
      console.warn(msg);
      return { ok: false, msg, status: 410 };
    }
    if (checkLength && this._reqs.length > this.max) {
      const msg = `The current Requests List available for the instance has a length larger than the accepted.`;
      console.warn(msg);
      return { ok: false, msg, status: 429 };
    }
    return { ok: true, msg: "Enqueuing is available.", status: 100 };
  }
  public post(n: number = 1): NextResponse<{ message: string }> {
    let idx = NaN,
      msg = RequirementFormController.defMsg,
      status = this.defStatus;
    try {
      const { ok, msg: message, status: code } = this.#checkQueue();
      msg = message;
      status = code;
      if (!ok)
        throw new ReferenceError(
          `No requests are available for this instance.`
        );
      for (let i = 0; i < n; i++) {
        this._reqs?.[this._reqs?.length].request
          .json()
          .then(d => console.log(d));
        const p = this._reqs?.pop();
        idx = i;
        console.log(`Popped ${p?.id ?? "undefined request"}`);
      }
      return NextResponse.json({ message: "Request Posted!" });
    } catch (e) {
      console.error(
        `Error posting request ${idx} in ${
          RequirementFormController._instance.constructor.name
        }:\n${(e as Error).message}`
      );
      return NextResponse.json({
        message: `Error: ${status} — ${msg}. Failed to POST.`,
      });
    }
  }
  public postImmediately(id: string): NextResponse<{ message: string }> {
    let msg = RequirementFormController.defMsg,
      status = this.defStatus;
    try {
      const { ok, msg: message, status: code } = this.#checkQueue();
      msg = message;
      status = code;
      if (!ok)
        throw new ReferenceError(
          `No requests are available for this instance.`
        );
      const _req = this._reqs?.find(r => r.id === id);
      if (!_req || !this._reqs?.some(r => r.request === _req.request))
        throw new ReferenceError(
          `Request or Controller Instance not validated. Aborting POST.`
        );
      const i = this._reqs?.indexOf(_req);
      if (!i) throw new RangeError(`Index of Request could not be found.`);
      _req.request.json().then(d => console.log(d));
      this._reqs?.splice(i, 1);
      return NextResponse.json({ message: "Request received!" });
    } catch (e) {
      console.error(
        `Request or Controller Instance not validated. Aborting POST.`
      );
      return NextResponse.json({
        message: `Error: ${status} — ${msg}. Failed to POST.`,
      });
    }
  }
  public setRequest(...reqs: RequestOpts[]): NextResponse<{ message: string }> {
    let msg = RequirementFormController.defMsg,
      status = this.defStatus;
    try {
      const { ok, msg: message, status: code } = this.#checkQueue();
      msg = message;
      status = code;
      if (!ok)
        throw new ReferenceError(`Error: Failed to enqueue Requests: ${msg}`);
      reqs.forEach(r => this._reqs?.push(r));
      return NextResponse.json({ message: `Successfully set Requests` });
    } catch (e) {
      console.error(`Error:\n${(e as Error).message}`);
      return NextResponse.json({
        message: `Error: ${status} — ${msg}. Failed to enqueue Requests.`,
      });
    }
  }
  _clearRequests(): NextResponse<{ message: string }> {
    let msg = RequirementFormController.defMsg,
      status = this.defStatus;
    try {
      const { ok, msg: message, status: code } = this.#checkQueue();
      (msg = message), (status = code);
      if (!ok)
        throw new ReferenceError(`Could not validate instance Request List`);
      this._reqs?.splice(0, this._reqs?.length || 0);
      return NextResponse.json({
        message: "The instance queue was correctly cleared.",
      });
    } catch (e) {
      console.error(`Error clearing requests list:\n${(e as Error).message}`);
      return NextResponse.json({
        message: `Error: ${status} — ${msg}. Failed to clear Requests.`,
      });
    }
  }
}
