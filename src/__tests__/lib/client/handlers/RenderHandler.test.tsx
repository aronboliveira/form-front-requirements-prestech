import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import RenderHandler from "../../../../lib/client/handlers/RenderHandler";
jest.mock("../../../../lib/vars.ts", () => {
  return {
    questionsMap: new Map([
      [
        "undefined",
        new Map([
          [
            "appKey",
            {
              beginner: {
                A: "Test Label",
              },
            },
          ],
        ]),
      ],
    ]),
    defAddQuestions: {
      1: new Map([
        [
          "appKey",
          {
            beginner: {
              A: "Fallback Label",
            },
          },
        ],
      ]),
    },
    fieldsMap: new Map([
      [
        "appKey",
        {
          undefined: {
            beginner: {
              A: {
                type: "textarea",
              },
            },
          },
        },
      ],
    ]),
  };
});
//@ts-ignore
if (!Set.prototype.intersection) {
  //@ts-ignore
  Set.prototype.intersection = function (
    otherSet: Set<any>
  ) {
    return new Set([...this].filter(x => otherSet.has(x)));
  };
}
describe("RenderHandler", () => {
  it("should render input elements correctly when valid data is provided", () => {
    const handler = new RenderHandler({
      name: "TestName",
      _role: "undefined",
      _complexity: "beginner",
      _appType: "appKey",
    });
    const renderedInputs = handler.renderInputs();
    const { container } = render(<>{renderedInputs}</>);
    expect(
      container.querySelectorAll(
        "div, input, select, textarea"
      ).length
    ).toBeGreaterThan(0);
  });
  // it("should return error message when questions dictionary is missing", () => {
  //   const { questionsMap } = require("../vars");
  //   questionsMap.set("undefined", undefined);
  //   const handler = new RenderHandler({
  //     name: "TestName",
  //     _role: "undefined",
  //     _complexity: "beginner",
  //     _appType: "appKey",
  //   });
  //   const renderedInputs = handler.renderInputs();
  //   const { getByText } = render(<>{renderedInputs}</>);
  //   expect(
  //     getByText(
  //       /Ops... Não foi possível construir o campo de questões!/i
  //     )
  //   ).toBeInTheDocument();
  // });
});
