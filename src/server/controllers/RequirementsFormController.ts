import { PostController, RequestOpts } from "@/lib/definitions/foundations";
import { NextResponse } from "next/server";
export default class RequirementFormController implements PostController {
  static _instance: RequirementFormController;
  static _current: number;
  readonly max: number;
  _reqs: Array<RequestOpts> | null;
  constructor(_reqs: Array<RequestOpts>, _max: number = 64) {
    this.max = _max;
    RequirementFormController._current += _reqs.length;
    this._reqs = this === RequirementFormController._instance ? null : _reqs;
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
  public post(n: number = 1): NextResponse<{ message: string }> {
    let idx = NaN;
    try {
      if (!this._reqs)
        throw new ReferenceError(
          `No requests are available for this instance.`
        );
      for (let i = 0; i < n; i++) {
        this._reqs[this._reqs.length].request.json().then(d => console.log(d));
        const p = this._reqs.pop();
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
      return NextResponse.json({ message: "Request Failed." });
    }
  }
  public postImmediately(id: string): NextResponse<{ message: string }> {
    try {
      if (!this._reqs?.length)
        throw new ReferenceError(
          `No requests are available for this instance.`
        );
      const _req = this._reqs.find(r => r.id === id);
      if (!_req || !this._reqs.some(r => r.request === _req.request))
        throw new ReferenceError(
          `Request or Controller Instance not validated. Aborting POST.`
        );
      const i = this._reqs.indexOf(_req);
      if (!i) throw new RangeError(`Index of Request could not be found.`);
      _req.request.json().then(d => console.log(d));
      this._reqs.splice(i, 1);
      return NextResponse.json({ message: "Request received!" });
    } catch (e) {
      console.error(
        `Request or Controller Instance not validated. Aborting POST.`
      );
      return NextResponse.json({ message: "Request Failed." });
    }
  }
  public setRequest(...reqs: RequestOpts[]): RequestOpts[] | void {
    if (!this._reqs) return;
    if (this._reqs.length <= this.max) return this._reqs;
    reqs.forEach(r => this._reqs?.push(r));
    this.#setCurrent(reqs.length);
    return this._reqs;
  }
  #setCurrent(toAdd: number): number {
    RequirementFormController._current += toAdd;
    return RequirementFormController._current;
  }
  _clearRequests(): void {
    if (!this._reqs) return;
    this._reqs.splice(0, this._reqs.length);
    this.#resetCurrent();
  }
  #resetCurrent(): void {
    RequirementFormController._current = 0;
  }
}
