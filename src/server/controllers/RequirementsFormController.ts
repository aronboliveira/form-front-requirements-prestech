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
import {
  HTTPRes,
  StartingHTTPDigits,
  limits,
} from "@/lib/vars";
import chalk from "chalk";
export default class RequirementFormController
  implements PostController
{
  static _instance: RequirementFormController;
  static defMsg: string = "Undefined response message";
  static runningClear: boolean = false;
  readonly max: number;
  defStatus: HTTPResponseCode;
  _reqs: Array<RequestOpts>;
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
    this._reqs = RequirementFormController._instance
      ? RequirementFormController._instance._reqs
      : _reqs;
    this.defStatus =
      this === RequirementFormController._instance
        ? 500
        : 422;
    this._reqs?.forEach(req => {
      if (!req.priority && req.priority !== 0)
        req.priority = _reqs.length;
      this._reqs?.push(req);
    });
    this._reqs &&
      this._reqs.sort(
        (a, b) =>
          (a.priority ?? this._reqs?.length ?? 0) -
          (b.priority ?? this._reqs?.length ?? 0)
      );
    if (!RequirementFormController.runningClear) {
      setInterval(
        () =>
          RequirementFormController._instance?._clearRequests(),
        limits.services.MAX_REQUEST_TIMER
      );
      RequirementFormController.runningClear = true;
    }
  }
  public static construct(
    _reqs: Array<RequestOpts> = [],
    _max: number = 64
  ): RequirementFormController {
    console.log(chalk.blue("Construct called"));
    console.log(chalk.magenta(JSON.stringify(_reqs)));
    if (!RequirementFormController._instance) {
      console.log(
        chalk.green(
          "Instance was not found. Constructing..."
        )
      );
      RequirementFormController._instance =
        new RequirementFormController(_reqs, _max);
    }
    return RequirementFormController._instance;
  }
  public async post(
    n: number = 1
  ): Promise<
    NextResponse<{ message: string; status: string }>
  > {
    let idx = NaN,
      msg = RequirementFormController.defMsg,
      status =
        RequirementFormController._instance.defStatus;
    try {
      const {
        ok,
        msg: message,
        status: code,
      } = RequirementFormController._instance.#checkQueue();
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
        const last =
          RequirementFormController._instance._reqs?.[
            RequirementFormController._instance._reqs
              ?.length - 1
          ];
        if (!last) break;
        //mock
        const s = 200;
        let label: HTTPResponseLabel =
          ExceptionHandler.isOkishCode(s)
            ? "OK"
            : "Internal Server Error";
        const dict =
          HTTPRes[
            StartingHTTPDigits[
              s.toString().charAt(0) as PseudoNum
            ] ?? "serverError"
          ].get(s);
        if (dict) label = dict.en;
        LoggingHandler.logDefault(
          label,
          "RequirementFormController.post"
        );
        results.push({
          id: last.id,
          status: s,
          message: label,
        });
        const p =
          RequirementFormController._instance._reqs?.pop();
        idx = i;
        console.log(
          chalk.grey(
            `Popped ${p?.id ?? "undefined request"}`
          )
        );
      }
      if (!results?.length)
        return NextResponse.json({
          message: "Length Required",
          status: "411",
        });
      else if (results.length === 1)
        return NextResponse.json({
          message: results[results.length - 1].message,
          status: "200",
        });
      else
        return NextResponse.json({
          message: results.reduce(
            (acc, r, i) =>
              acc +
              (i === 0 ? r.message : `\t${r.message}`),
            ""
          ),
          status: results.reduce(
            (acc, r, i) =>
              acc + (i === 0 ? r.status : `\t${r.status}`),
            ""
          ),
        });
    } catch (e) {
      const errMsg = `Error posting request ${idx} in ${
        RequirementFormController._instance.constructor.name
      }:\n${(e as Error).message}`;
      console.log(chalk.red(errMsg));
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
  ): Promise<
    NextResponse<{
      message: string;
      status: HTTPResponseCode;
    }>
  > {
    let msg = RequirementFormController.defMsg,
      status =
        RequirementFormController._instance.defStatus;
    try {
      const {
        ok,
        msg: message,
        status: code,
      } = RequirementFormController._instance.#checkQueue();
      msg = message;
      status = code;
      console.log(
        chalk.blue(message + " " + code.toString())
      );
      if (!ok)
        throw new ReferenceError(
          `No requests are available for this instance.`
        );
      //TODO ERRO AQUI
      const _req =
        RequirementFormController._instance._reqs?.find(
          r => r.id === id
        );
      if (
        !_req ||
        !RequirementFormController._instance._reqs?.some(
          r => r.request === _req.request
        )
      )
        throw new ReferenceError(
          `Request or Controller Instance not validated. Aborting POST.
           Value of Req: ${_req}
           List of Reqs: ${
             RequirementFormController._instance._reqs
           }
           Singleton: ${JSON.stringify(
             RequirementFormController._instance
           )}`
        );
      const i =
        RequirementFormController._instance._reqs?.indexOf(
          _req
        );
      if (i === -1)
        throw new RangeError(
          `Index of Request could not be found.`
        );
      console.log(
        chalk.yellowBright("SUBMITTING TO MODEL")
      );
      status = 200; //mock
      if (!ExceptionHandler.isOkishCode(status))
        throw new Error(
          `Service failed with status ${status}`
        );
      RequirementFormController._instance._reqs?.splice(
        i,
        1
      );
      LoggingHandler.logDefault(
        msg,
        "RequirementFormController.post"
      );
      console.log(
        chalk.grey(`Processed request with ID: ${id}`)
      );
      return NextResponse.json({
        message: "Request processed successfully!",
        status,
      });
    } catch (e) {
      const errMsg = `Error processing request with ID: ${id}:\n${
        (e as Error).message
      }`;
      console.log(chalk.red(errMsg));
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
  #checkQueue(checkLength: boolean = false): {
    ok: boolean;
    msg: string;
    status: HTTPResponseCode;
  } {
    if (!RequirementFormController._instance._reqs) {
      const msg = `No Requests List available for the instance`;
      console.log(chalk.yellow(msg));
      LoggingHandler.logDefault(
        msg,
        "RequirementFormController.checkQueue"
      );
      return { ok: false, msg, status: 410 };
    }
    if (
      checkLength &&
      RequirementFormController._instance._reqs.length >
        RequirementFormController._instance.max
    ) {
      const msg = `The current Requests List available for the instance has a length larger than the accepted.`;
      LoggingHandler.logDefault(
        msg,
        "RequirementFormController.checkQueue"
      );
      console.log(chalk.red(msg));
      return { ok: false, msg, status: 429 };
    }
    return {
      ok: true,
      msg: "Enqueuing is available.",
      status: 100,
    };
  }
  public setRequest(
    ...reqs: RequestOpts[]
  ): NextResponse<{
    message: string;
    status: HTTPResponseCode;
  }> {
    let msg = RequirementFormController.defMsg,
      status =
        RequirementFormController._instance.defStatus;
    try {
      const {
        ok,
        msg: message,
        status: code,
      } = RequirementFormController._instance.#checkQueue();
      msg = message;
      status = code;
      if (!ok)
        throw new ReferenceError(
          `Error: Failed to enqueue Requests: ${msg}`
        );
      reqs.forEach(r =>
        RequirementFormController._instance._reqs?.push(r)
      );
      return NextResponse.json({
        message: `Successfully set Requests`,
        status,
      });
    } catch (e) {
      console.log(
        chalk.red(`Error: \n${(e as Error).message}`)
      );
      LoggingHandler.logDefault(
        msg,
        "RequirementFormController.setRequest"
      );
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
      status =
        RequirementFormController._instance.defStatus;
    try {
      const {
        ok,
        msg: message,
        status: code,
      } = RequirementFormController._instance.#checkQueue();
      (msg = message), (status = code);
      if (!ok)
        throw new ReferenceError(
          `Could not validate instance Request List`
        );
      RequirementFormController._instance._reqs?.splice(
        0,
        RequirementFormController._instance._reqs?.length ||
          0
      );
      return NextResponse.json({
        message:
          "The instance queue was correctly cleared.",
        status,
      });
    } catch (e) {
      const errMsg = `Error clearing requests list:\n${
        (e as Error).message
      }`;
      console.log(chalk.red(errMsg));
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
