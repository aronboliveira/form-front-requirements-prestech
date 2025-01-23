import {
  HTTPResponseCode,
  HTTPResponseLabel,
  PostController,
  PseudoNum,
  RequestOpts,
} from "@/lib/definitions/foundations";
import { NextResponse } from "next/server";
import ResourcesProvider from "../providers/ResourcesProvider";
import LoggingHandler from "../handlers/LoggingHandler";
import ExceptionHandler from "@/lib/client/handlers/ErrorHandler";
import { HTTPRes, StartingHTTPDigits } from "@/lib/vars";
import chalk from "chalk";
export default class RequirementFormController implements PostController {
  static _instance: RequirementFormController;
  static defMsg: string = "Undefined response message";
  readonly max: number;
  defStatus: HTTPResponseCode;
  _reqs: Array<RequestOpts> | null;
  constructor(
    _reqs: Array<RequestOpts>,
    _max: number = ResourcesProvider.sharedResources[
      RequirementFormController.constructor.name
    ] ?? 102
  ) {
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
      chalk.yellow(console.warn(msg));
      LoggingHandler.logDefault(msg, "RequirementFormController.checkQueue");
      return { ok: false, msg, status: 410 };
    }
    if (checkLength && this._reqs.length > this.max) {
      const msg = `The current Requests List available for the instance has a length larger than the accepted.`;
      LoggingHandler.logDefault(msg, "RequirementFormController.checkQueue");
      chalk.yellow(console.warn(msg));
      return { ok: false, msg, status: 429 };
    }
    return { ok: true, msg: "Enqueuing is available.", status: 100 };
  }
  public async post(
    n: number = 1
  ): Promise<NextResponse<{ message: string; status: string }>> {
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
      const results: Array<{
        id: string;
        status: number;
        message: HTTPResponseLabel;
      }> = [];
      for (let i = 0; i < n; i++) {
        const last = this._reqs?.[this._reqs?.length - 1];
        if (!last) break;
        //PLACEHOLDER
        const s = (await last.request.json()) ? 201 : 400;
        let label: HTTPResponseLabel = ExceptionHandler.isOkishCode(s)
          ? "OK"
          : "Internal Server Error";
        const dict =
          HTTPRes[
            StartingHTTPDigits[s.toString().charAt(0) as PseudoNum] ??
              "serverError"
          ].get(s);
        if (dict) label = dict.en;
        LoggingHandler.logDefault(label, "RequirementFormController.post");
        results.push({ id: last.id, status: s, message: label });
        const p = this._reqs?.pop();
        idx = i;
        chalk.grey(console.log(`Popped ${p?.id ?? "undefined request"}`));
      }
      if (!results?.length)
        return NextResponse.json({ message: "Length Required", status: "411" });
      else if (results.length === 1)
        return NextResponse.json({
          message: results[results.length - 1].message,
          status: "200",
        });
      else
        return NextResponse.json({
          message: results.reduce(
            (acc, r, i) => acc + (i === 0 ? r.message : `\t${r.message}`),
            ""
          ),
          status: results.reduce(
            (acc, r, i) => acc + (i === 0 ? r.status : `\t${r.status}`),
            ""
          ),
        });
    } catch (e) {
      const errMsg = `Error posting request ${idx} in ${
        RequirementFormController._instance.constructor.name
      }:\n${(e as Error).message}`;
      chalk.red(console.error(errMsg));
      LoggingHandler.logDefault(
        `${errMsg} — ${msg}`,
        "RequirementFormController.post"
      );
      return NextResponse.json({
        message: `Error: ${status} — ${msg}. Failed to POST.`,
        status: status.toString(),
      });
    }
  }
  public async postImmediately(
    id: string
  ): Promise<NextResponse<{ message: string; status: HTTPResponseCode }>> {
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
      if (i === -1)
        throw new RangeError(`Index of Request could not be found.`);
      //PLACEHOLDER
      status = (await _req.request.json()) ? 201 : 400;
      if (!ExceptionHandler.isOkishCode(status))
        throw new Error(`Service failed with status ${status}`);
      this._reqs?.splice(i, 1);
      LoggingHandler.logDefault(msg, "RequirementFormController.post");
      chalk.grey(console.log(`Processed request with ID: ${id}`));
      return NextResponse.json({
        message: "Request processed successfully!",
        status,
      });
    } catch (e) {
      const errMsg = `Error processing request with ID: ${id}:\n${
        (e as Error).message
      }`;
      chalk.red(console.error(errMsg));
      LoggingHandler.logDefault(
        `${errMsg} — ${msg}`,
        "RequirementFormController.postImmediately"
      );
      return NextResponse.json({
        message: `Error: ${status} — ${msg}. Failed to process request.`,
        status,
      });
    }
  }
  public setRequest(
    ...reqs: RequestOpts[]
  ): NextResponse<{ message: string; status: HTTPResponseCode }> {
    let msg = RequirementFormController.defMsg,
      status = this.defStatus;
    try {
      const { ok, msg: message, status: code } = this.#checkQueue();
      msg = message;
      status = code;
      if (!ok)
        throw new ReferenceError(`Error: Failed to enqueue Requests: ${msg}`);
      reqs.forEach(r => this._reqs?.push(r));
      return NextResponse.json({
        message: `Successfully set Requests`,
        status,
      });
    } catch (e) {
      chalk.red(console.error(`Error: \n${(e as Error).message}`));
      LoggingHandler.logDefault(msg, "RequirementFormController.setRequest");
      return NextResponse.json({
        message: `Error: ${status} — ${msg}. Failed to enqueue Requests.`,
        status,
      });
    }
  }
  _clearRequests(): NextResponse<{
    message: string;
    status: HTTPResponseCode;
  }> {
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
        status,
      });
    } catch (e) {
      const errMsg = `Error clearing requests list:\n${(e as Error).message}`;
      chalk.red(console.error(errMsg));
      LoggingHandler.logDefault(
        `${errMsg}\n${msg}`,
        "RequirementFormController._clearRequests"
      );
      return NextResponse.json({
        message: `Error: ${status} — ${msg}. Failed to clear Requests.`,
        status,
      });
    }
  }
}
