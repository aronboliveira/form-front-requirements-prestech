import RequirementFormController from "../../../server/controllers/RequirementsFormController";
import { NextResponse } from "next/server";
import LoggingHandler from "../../../server/handlers/LoggingHandler";
jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));
jest.mock("../../../server/handlers/LoggingHandler", () => ({
  logDefault: jest.fn(),
}));
describe("RequirementFormController", () => {
  let controller: RequirementFormController;
  beforeEach(() => {
    controller = RequirementFormController.construct([
      { id: "req1", priority: 1, request: new Request("") },
      { id: "req2", priority: 2, request: new Request("") },
    ]);
    jest.clearAllMocks();
  });
  it("should initialize with a valid queue", () => {
    expect(controller._reqs?.length).toBe(2);
  });
  it("should handle post requests successfully", async () => {
    const response = await controller.post(1);
    expect(NextResponse.json).toHaveBeenCalledWith({
      message: expect.any(String),
      status: "200",
    });
    expect(controller._reqs?.length).toBe(1);
  });
  it("should handle errors in post requests", async () => {
    controller._reqs = null;
    const response = await controller.post(1);
    expect(NextResponse.json).toHaveBeenCalledWith({
      message: expect.any(String),
      status: "410",
    });
    expect(LoggingHandler.logDefault).toHaveBeenCalledWith(
      expect.stringContaining("No Requests List available"),
      expect.any(String)
    );
  });
  it("should process immediate post requests successfully", async () => {
    const response = await controller.postImmediately("req1");
    expect(NextResponse.json).toHaveBeenCalledWith({
      message: "Request processed successfully!",
      status: 201,
    });
  });
  it("should handle errors in immediate post requests", async () => {
    const response = await controller.postImmediately("invalidId");
    expect(NextResponse.json).toHaveBeenCalledWith({
      message: expect.any(String),
      status: 422,
    });
  });
  it("should set requests successfully", () => {
    const response = controller.setRequest({
      id: "req3",
      priority: 3,
      request: new Request(""),
    });
    expect(controller._reqs?.length).toBe(3);
    expect(NextResponse.json).toHaveBeenCalledWith({
      message: "Successfully set Requests",
      status: 100,
    });
  });
  it("should clear requests successfully", () => {
    const response = controller._clearRequests();
    expect(controller._reqs?.length).toBe(0);
    expect(NextResponse.json).toHaveBeenCalledWith({
      message: "The instance queue was correctly cleared.",
      status: 100,
    });
  });
});
