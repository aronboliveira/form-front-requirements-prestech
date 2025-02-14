import RequirementFormController from "../../../server/controllers/RequirementsFormController";
import { NextResponse } from "next/server";
import LoggingHandler from "../../../server/handlers/LoggingHandler";
jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));
jest.mock(
  "../../../server/handlers/LoggingHandler",
  () => ({
    logDefault: jest.fn(),
  })
);
jest.mock("chalk", () => ({
  blue: (msg: string) => msg,
  magenta: (msg: string) => msg,
  green: (msg: string) => msg,
  grey: (msg: string) => msg,
  red: (msg: string) => msg,
  yellow: (msg: string) => msg,
  yellowBright: (msg: string) => msg,
}));
describe("RequirementFormController", () => {
  let controller: RequirementFormController;
  let reqs: any[];
  beforeEach(() => {
    (RequirementFormController as any)._instance =
      undefined;
    reqs = [
      { id: "req1", request: "dummy1", priority: 1 },
      { id: "req2", request: "dummy2", priority: 2 },
    ];
    controller = RequirementFormController.construct(
      reqs,
      64
    );
  });
  test("construct returns a singleton instance", () => {
    const controller2 =
      RequirementFormController.construct();
    expect(controller).toBe(controller2);
  });
  test("post processes requests and returns a response", async () => {
    const response = await controller.post(1);
    const body = (response as any).body || response;
    expect(body.message).toBeDefined();
    expect(body.status).toBe("200");
  });
  test("post returns error response when no requests are available", async () => {
    (controller as any)._reqs = [];
    const response = await controller.post(1);
    const body = (response as any).body || response;
    expect(body.message).toBe("Length Required");
    expect(body.status).toBe("411");
  });
  test("postImmediately processes a valid request", async () => {
    const response = await controller.postImmediately(
      "req1"
    );
    const body = (response as any).body || response;
    expect(body.message).toBe(
      "Request processed successfully!"
    );
    expect(body.status).toBe(200);
  });
  test("postImmediately returns error for invalid request id", async () => {
    const response = await controller.postImmediately(
      "nonexistent"
    );
    const body = (response as any).body || response;
    expect(body.message).toMatch(/Error/);
  });
  test("setRequest enqueues new requests", () => {
    const newReq = {
      id: "req3",
      request: "dummy3",
      priority: 3,
    };
    const response = controller.setRequest(newReq);
    const body = (response as any).body || response;
    expect(body.message).toBe("Successfully set Requests");
    expect((controller as any)._reqs).toContain(newReq);
  });
  test("_clearRequests clears the request queue", () => {
    const response = controller._clearRequests();
    const body = (response as any).body || response;
    expect(body.message).toBe(
      "The instance queue was correctly cleared."
    );
    expect((controller as any)._reqs.length).toBe(0);
  });
});
