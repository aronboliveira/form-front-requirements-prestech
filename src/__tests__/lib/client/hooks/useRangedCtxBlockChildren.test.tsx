import React from "react";
import useRangedCtxBlockChildren from "../../../../lib/client/hooks/useRangedCtxBlockChildren";
import StyleHandler from "../../../../lib/client/handlers/StyleHandler";
jest.mock("@/path/to/handlers/StyleHandler", () => ({
  tickFading: jest.fn(),
  findStyleSheet: jest.fn(() => ({
    cssRules: [],
    insertRule: jest.fn(),
  })),
  defineRangeThumbPseudoElement: jest.fn(() => "::thumb"),
  updatePseudos: jest.fn(),
}));
jest.mock("@/path/to/handlers/MathHandler", () => ({
  parseNotNaN: jest.fn(val => parseInt(val, 10)),
}));
jest.mock("@/path/to/validators/DOMValidator", () => ({
  isDefaultEntry: jest.fn(() => true),
}));
jest.mock("@/path/to/addQuestions", () => ({
  addQuestionsMap: new Map([
    ["developer", new Map([["groupA", { beginner: { q1: "What?" } }]])],
  ]),
}));
jest.mock("@/path/to/vars", () => ({
  appGroupsDict: { businessInteligence: "groupA" },
}));
describe("useRangedCtxBlockChildren", () => {
  const mockContext = {
    role: "developer",
  };
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(React, "useContext").mockReturnValue(mockContext);
  });
  test("returns the correct complexity label based on level", () => {
    const { levelTitle } = useRangedCtxBlockChildren(4, "businessInteligence");
    expect(levelTitle).toBe("expert");
  });
  test("retrieves questions based on role and app group", () => {
    const { questions } = useRangedCtxBlockChildren(1, "businessInteligence");
    expect(questions).toEqual({ q1: "What?" });
  });
  test("returns null if role is undefined", () => {
    const { questions } = useRangedCtxBlockChildren(1, "invalidGroup");
    expect(questions).toBeNull();
  });
  test("calls StyleHandler.tickFading on component load", () => {
    const { r } = useRangedCtxBlockChildren(1, "businessInteligence");
    expect(StyleHandler.tickFading).toHaveBeenCalledWith(r.current, "0.5");
  });
});
